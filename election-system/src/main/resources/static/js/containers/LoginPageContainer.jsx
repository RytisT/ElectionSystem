var LoginPageContainer = React.createClass( {

    // Login validation
    handleSubmitClick() {
<<<<<<< HEAD
        var self = this;

        var val = $( "#inputAdminName" ).val();
        var matches = val.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
=======
        var loginName = $( "#inputAdminName" ).val();
        var matches = loginName.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
>>>>>>> a5f44d5443b0ed02b385927f80f3600997ded21d
        if ( matches != null ) { $( '#AdminNameValidation' ).hide( "slow" ) }
        else { $( '#AdminNameValidation' ).show( "slow" ) }

        var valp = $( "#inputAdminPass" ).val();
        var matchesp = valp.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
        if ( matchesp != null ) { $( '#AdminPassValidation' ).hide( "slow" ) }
        else { $( '#AdminPassValidation' ).show( "slow" ) }
<<<<<<< HEAD

        if ( matches != null && matchesp != null ) {
          axios.post('/post',val , valp).then(function (){
            self.context.router.push( '/#/admin' );
          });
=======
        
        var pass = $( "#inputAdminPass" ).val();
        
        if ( loginName != "admin" || pass != "admin" ) { $( '#WronLoginValidation' ).show( "slow" ) }
        else { $( '#WronLoginValidation' ).hide( "slow" ) }
          
        if ( matches != null && matchesp != null && loginName == "admin" && pass == "admin") {
            this.context.router.push( '/admin' );
>>>>>>> a5f44d5443b0ed02b385927f80f3600997ded21d
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
