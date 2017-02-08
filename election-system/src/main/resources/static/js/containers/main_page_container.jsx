var MainPageContainer = React.createClass( {



    // Admin mygtuko paspaudimo action
    handleAdmin() {
        this.context.router.push( '/Admin' );
    },

    // Representatives mygtuko paspaudimo action
    handleRepresentatives() {
        this.context.router.push( '/Representatives' );
    },



    render: function() {
        return <MainPageComponent onAdminClick={this.handleAdmin} onRepresentativesClick={this.handleRepresentatives} />
    }
});

MainPageContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.MainPageContainer = MainPageContainer;