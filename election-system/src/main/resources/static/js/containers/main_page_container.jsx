var MainPageContainer = React.createClass( {



    // Admin mygtuko paspaudimo action
    handleAdmin() {
        this.context.router.push( '/Admin' );
    },

    // Representatives mygtuko paspaudimo action
    handleRepresentatives() {
        this.context.router.push( '/Representatives' );
    },

    // Candidates nuorodos paspaudimo action
    handleCandidates() {
        this.context.router.push( '/Candidates' );
    },



    render: function() {
        return <MainPageComponent onAdminClick={this.handleAdmin} onRepresentativesClick={this.handleRepresentatives} onCandidatesClick={this.handleCandidates} />
    }
});

MainPageContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.MainPageContainer = MainPageContainer;