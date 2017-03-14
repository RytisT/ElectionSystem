var CandidatesContainer = React.createClass( {
    getInitialState: function() {
        return {
            searchQuery: "",
            candidate: {
                name: '',
                last_name: '',
                date_of_birth: '',
                description: ''
            },
            candidates: []
        };
    },

    componentWillMount: function() {
        var self = this;
        axios.get( '/api/candidates' )
            .then( function( response ) {
                self.setState( {
                    candidates: response.data
                });
            });
    },

    // Description 
    handleCandidateDescription: function( candidate ) {
        var self = this;
        return function() {
            self.context.router.push( '/candidate/description/' + candidate.id );
        }
    },

    // Add 
    handleAdd() {
        this.context.router.push( '/admin/candidates/add-candidate' );
    },

    // Cancel 
    handleCancelClick() {
        this.context.router.push( '/main' );
    },

    // Edit candidate 
    handleCandidateEdit: function( candidate ) {
        var self = this;
        return function() {
            self.context.router.push( '/admin/candidates/edit/' + candidate.id );
        }
    },

    // Remove candidate 
    handleCandidateRemove: function( candidate ) {
        var self = this;
        return function() {
            axios.delete( '/api/candidates/' + candidate.id ).then( function( response ) {
                self.componentWillMount();
            });
        };
    },

    handleSearchQueryChange: function() {
        return function( newQuery ) {

            //validation
            var val = $( "#SearchCandidate" ).val();
            var matches = val.match( ".*([a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
            if ( matches != null ) { $( "#CandidateSearchValidation" ).hide("slow"); }
            else { $( "#CandidateSearchValidation" ).show("slow"); }

            this.setState( { searchQuery: newQuery.target.value })

        }.bind( this )
    },

    
    render: function() {
        return <CandidatesComponent candidates={this.state.candidates}
            onAddClick={this.handleAdd}
            onEditItem={this.handleCandidateEdit}
            onDescriptionItemClick={this.handleCandidateDescription}
            onRemoveItem={this.handleCandidateRemove}
            searchQuery={this.state.searchQuery}
            onSearchQueryChange={this.handleSearchQueryChange}
            onCancelClick={this.handleCancelClick}
            />
    }
});

CandidatesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.CandidatesContainer = CandidatesContainer;