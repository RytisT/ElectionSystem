var LoginRepPageContainer = React.createClass( {

    // Login validation
    handleSubmitClick() {
        var val = $( "#inputUserName" ).val();
        var matches = val.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“\"!,.:;-? ()]$)" );
        if ( matches != null ) { $( '#UserNameValidation' ).hide( "slow" ) }
        else { $( '#UserNameValidation' ).show( "slow" ) }

        var valp = $( "#inputUserPass" ).val();
        var matchesp = valp.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“\"!,.:;-? ()]$)" );
        if ( matchesp != null ) { $( '#UserPassValidation' ).hide( "slow" ) }
        else { $( '#UserPassValidation' ).show( "slow" ) }

        if ( matches != null && matchesp != null ) {
            this.context.router.push( '/representatives/' + val )
            $( '#loginMenu' ).hide( "slow" );
            $( '#logOut' ).show( "slow" )
        };
    },

    // Cancel 
    handleCancelClick() {
        this.context.router.push( '/' );
    },

    render: function() {
        return <LoginRepPageComponent onCancelClick={this.handleCancelClick} onSubmitClick={this.handleSubmitClick} />
    }
});

LoginRepPageContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.LoginRepPageContainer = LoginRepPageContainer;