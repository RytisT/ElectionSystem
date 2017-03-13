var LoginPageContainer = React.createClass( {

    // Login validation
    handleSubmitClick() {
        var val = $( "#inputAdminName" ).val();
        var matches = val.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
        if ( matches != null ) { $( '#AdminNameValidation' ).hide( "slow" ) }
        else { $( '#AdminNameValidation' ).show( "slow" ) }

        var valp = $( "#inputAdminPass" ).val();
        var matchesp = valp.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
        if ( matchesp != null ) { $( '#AdminPassValidation' ).hide( "slow" ) }
        else { $( '#AdminPassValidation' ).show( "slow" ) }

        if ( matches != null && matchesp != null ) { this.context.router.push( '/admin' ) };
    },

    // Cancel 
    handleCancelClick() {
        this.context.router.push( '/' );
    },

    render: function() {
        return <LoginPageComponent onCancelClick={this.handleCancelClick} onSubmitClick={this.handleSubmitClick} />
    }
});

LoginPageContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.LoginPageContainer = LoginPageContainer;