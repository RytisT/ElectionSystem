var CandidatesContainer = React.createClass( {
    getInitialState: function() {
        return {
          candidates: [] 
        };
    },
    
    componentWillMount: function() {
        var self = this;
        axios.get('/api/candidates')
        .then(function (response) {
            self.setState({ 
                candidates: response.data 
            });
        });

    },


    // Admin mygtuko paspaudimo action
    handleAdmin() {
        this.context.router.push( '/Admin' );
    },

    // Main page mygtuko paspaudimo action
    handleMainPage() {
        this.context.router.push( '/' );
    },



    render: function() {
        return <CandidatesComponent candidates={this.state.candidates} onAdminClick={this.handleAdmin} onMainPageClick={this.handleMainPage} />
    }
});

CandidatesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.CandidatesContainer = CandidatesContainer;