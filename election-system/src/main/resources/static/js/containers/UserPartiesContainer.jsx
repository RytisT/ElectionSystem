var UserPartiesContainer = React.createClass({
    getInitialState: function () {
        return {
            parties: []
        };
    },

    componentWillMount: function () {
        var self = this;
        axios.get('/api/parties')
            .then(function (response) {
                self.setState({
                    parties: response.data
                });
            });
    },

    handlePartyDescription: function (party) {
        var self = this;
        return function () {
            self.context.router.push('/party/description/' + party.id);
        }
    },

    handleCancelClick() {
        this.context.router.push('/main');
    },


    render: function () {
        return <UserPartiesComponent
            parties={this.state.parties}
            onCancelClick={this.handleCancelClick}
            onDescriptionItemClick={this.handlePartyDescription}
        />
    }
});

UserPartiesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.UserPartiesContainer = UserPartiesContainer;