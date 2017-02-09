var CandidatesContainer = React.createClass( {



    // Admin mygtuko paspaudimo action
    handleAdmin() {
        this.context.router.push( '/Admin' );
    },

    // Representatives mygtuko paspaudimo action
    handleRepresentatives() {
        this.context.router.push( '/Representatives' );
    },



    render: function() {
        return <CandidatesComponent onAdminClick={this.handleAdmin} onRepresentativesClick={this.handleRepresentatives} />
    }
});

CandidatesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.CandidatesContainer = CandidatesContainer;