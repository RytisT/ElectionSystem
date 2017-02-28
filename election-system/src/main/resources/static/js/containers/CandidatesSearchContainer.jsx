var CandidatesSearchContainer = React.createClass( {
    getInitialState: function() {
        return {
            searchQuery: "",
            candidates: []
        };
    },

    componentWillMount: function() {
        var self = this;
        var candidateName = "Tomas";
        axios.get( '/api/candidates/search?name=' + candidateName )
            .then( function( response ) {
                self.setState( {
                    candidates: response.data
                });
            });
    },

    handleFieldChange: function(name){
        return function(){
            this.setState({searchQuery: name})
        }.bind(this)
    },
    // Description 
    handleCandidateDescription: function( candidate ) {
        var self = this;
        return function() {
            self.context.router.push( '/candidate/description/' + candidate.id );
        }
    },

    handleSearch: function( candidate ) {
                
    },

    // Cancel 
    handleCancelClick() {
        this.context.router.push( '/' );
    },
   
    render: function() {
        return <CandidatesSearchComponent candidates={this.state.candidates}
            onSearchItemClick={this.handleSearch}
            onDescriptionItemClick={this.handleCandidateDescription}
            onCancelClick={this.handleCancelClick} 
            onSearch={this.handleFieldChange}
            searchQuery={this.state.searchQuery}/>
    }
});

CandidatesSearchContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.CandidatesSearchContainer = CandidatesSearchContainer;