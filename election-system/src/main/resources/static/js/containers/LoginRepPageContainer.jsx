var LoginRepPageContainer = React.createClass({


 // Cancel 
    handleCancelClick() {
        this.context.router.push( '/' );
    },


    render: function () {
        return <LoginRepPageComponent  onCancelClick={this.handleCancelClick} />
    }
});

LoginRepPageContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.LoginRepPageContainer = LoginRepPageContainer;