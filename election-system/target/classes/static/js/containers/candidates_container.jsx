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
        this.context.router.push( '/candidates/add-candidate' );
    },

    // Main page mygtuko paspaudimo action
    handleMainPage() {
        this.context.router.push( '/' );
    },

    // Edit candidate mygtuko action
    handleCandidateEdit: function( candidate ) {
        var self = this;
        return function() {
            self.context.router.push( '/candidates/edit/' + candidate.id );
        }
    },



    render: function() {
        return <CandidatesComponent candidates={this.state.candidates} onAddClick={this.handleAdd} onMainPageClick={this.handleMainPage} onEditItem={this.handleCandidateEdit} />
    }
});

CandidatesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.CandidatesContainer = CandidatesContainer;