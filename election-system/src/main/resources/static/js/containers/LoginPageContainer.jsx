var LoginPageContainer = React.createClass( {

    // Login validation
    handleSubmitClick() {


        var self = this;

        var val = $( "#inputAdminName" ).val();
        var matches = val.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );

        var loginName = $( "#inputAdminName" ).val();
        var matches = loginName.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );


        var loginName = $( "#inputAdminName" ).val();
        var matches = loginName.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );

        if ( matches != null ) { $( '#AdminNameValidation' ).hide( "slow" ) }
        else { $( '#AdminNameValidation' ).show( "slow" ) }

        var valp = $( "#inputAdminPass" ).val();
        var matchesp = valp.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
        if ( matchesp != null ) { $( '#AdminPassValidation' ).hide( "slow" ) }
        else { $( '#AdminPassValidation' ).show( "slow" ) }


        var pass = $( "#inputAdminPass" ).val();
        
        if ( loginName != "admin" || pass != "admin" ) { $( '#WronLoginValidation' ).show( "slow" ) }
        else { $( '#WronLoginValidation' ).hide( "slow" ) }
          
        if ( matches != null && matchesp != null && loginName == "admin" && pass == "admin") {
            this.context.router.push( '/admin' );
            $( '#loginMenu' ).hide( "slow" );
            $( '#logOut' ).show( "slow" )
        };
    },

    // Cancel
    handleCancelClick() {
        this.context.router.push( '/main' );
    },

    render: function() {
        return <LoginPageComponent onCancelClick={this.handleCancelClick} onSubmitClick={this.handleSubmitClick} />
    }
});

LoginPageContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.LoginPageContainer = LoginPageContainer;
