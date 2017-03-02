var LoginPageContainer = React.createClass({


 // Cancel 
    handleCancelClick() {
        this.context.router.push( '/' );
    },


    render: function () {
        return <LoginPageComponent  onCancelClick={this.handleCancelClick} />
    }
});

LoginPageContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.LoginPageContainer = LoginPageContainer;