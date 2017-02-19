var UserPartiesContainer = React.createClass( {
    getInitialState: function() {
        return {
            parties: []
        };
    },

    componentWillMount: function() {
        var self = this;
        axios.get( '/api/parties' )
            .then( function( response ) {
                self.setState( {
                    parties: response.data
                });
            });
    },

      
    // Cancel mygtuko paspaudimo action
    handleCancelClick() {
        this.context.router.push( '/' );
    },


    render: function() {
        return <UserPartiesComponent parties={this.state.parties}
            onCancelClick={this.handleCancelClick} />
    }
});

UserPartiesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.UserPartiesContainer = UserPartiesContainer;