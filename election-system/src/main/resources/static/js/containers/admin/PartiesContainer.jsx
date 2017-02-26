var PartiesContainer = React.createClass({
    getInitialState: function () {
        return {
            parties: [],
            party: {
                title: '',
                id: '',
                party_Code: ''
            },
        };
    },

    componentWillMount: function () {
        axios.get('/api/parties')
            .then(function (response) {
                this.setState({
                    parties: response.data
                });
            }.bind(this));
    },

    handleDeleteParty: function (party) {
        return function () {
            axios.delete('/api/parties/' + party.id)
                .then(function (response) {
                    axios.get('/api/parties')
                        .then(function (response) {
                                this.setState({
                                    parties: response.data
                                });

                            }.bind(this)
                        )
                }.bind(this));
        }.bind(this);
    },

    handleSubmitParty: function (party) {
        console.log(party);
        axios.post('/api/parties', party).then(function () {
            this.componentWillMount();
        }.bind(this));
    },

    handleFieldChange: function (fieldName) {
        return function (party) {
            var tempParty = this.state.party;
            tempParty[fieldName] = party.target.value;
            this.setState({party: tempParty});
        }.bind(this);
    },


    render: function () {
        return (
            <div>
                <AddPartyComponent party={this.state.party}
                                   onSubmit={this.handleSubmitParty}
                                   onFieldChange={this.handleFieldChange}/>
                <PartiesComponent parties={this.state.parties}
                                  onDeleteParty={this.handleDeleteParty}/>
            </div>
        )
    }
});

PartiesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.PartiesContainer = PartiesContainer;