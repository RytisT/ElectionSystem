var CandidatesContainer = React.createClass( {
    getInitialState: function() {
        return {
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


    // Add mygtuko paspaudimo action
    handleAdd() {
        this.context.router.push( '/admin/candidates/add-candidate' );
    },

    // Main page mygtuko paspaudimo action
    handleMainPage() {
        this.context.router.push( '/' );
    },

    // Edit candidate mygtuko action
    handleCandidateEdit: function( candidate ) {
        var self = this;
        return function() {
            self.context.router.push( '/admin/candidates/edit/' + candidate.id );
        }
    },

    // Remove candidate mygtuko action
    handleCandidateRemove: function( candidate ) {
        var self = this;
        return function() {
            axios.delete( '/api/candidates/' + candidate.id ).then( function(response) {                
                self.componentWillMount();
            });
        };
    },
    


    render: function() {
        return <CandidatesComponent candidates={this.state.candidates} onAddClick={this.handleAdd} onMainPageClick={this.handleMainPage} onEditItem={this.handleCandidateEdit} onRemoveItem={this.handleCandidateRemove} />
    }
});

CandidatesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.CandidatesContainer = CandidatesContainer;