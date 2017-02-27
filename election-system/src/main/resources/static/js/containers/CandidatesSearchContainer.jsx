var CandidatesSearchContainer = React.createClass( {
    getInitialState: function() {
        return {
            candidates: []
        };
    },

    componentWillMount: function() {
        var self = this;
        var candidateName = this.props.params.candidateName;
        axios.get( '/api/candidates/search?name=' + candidateName )
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

    // Main page 
    //    handleMainPage() {
    //        this.context.router.push( '/' );
    //    },

    // Cancel 
    handleCancelClick() {
        this.context.router.push( '/' );
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


    render: function() {
        return <CandidatesSearchComponent candidates={this.state.candidates}
            onAddClick={this.handleAdd}
            onMainPageClick={this.handleMainPage}
            onEditItem={this.handleCandidateEdit}
            onDescriptionItemClick={this.handleCandidateDescription}
            onRemoveItem={this.handleCandidateRemove}
            onCancelClick={this.handleCancelClick} />
    }
});

CandidatesSearchContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.CandidatesSearchContainer = CandidatesSearchContainer;