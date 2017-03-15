var PartiesContainer = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

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
                            var x = party.id;
                            var y = "#DeleteParty" + x;
                            var z = "#x_party" + x;
                            $( y ).hide(); $( z ).html( "Trinti" );
                                this.setState({
                                    parties: response.data
                                });
                            }.bind(this)
                        )
                }.bind(this));
        }.bind(this);
    },

    handleCandidates: function (party) {
        return function () {
            this.context.router.push({
                pathname: "/admin/party-candidates/" + party.id,
                query: {fileName: party.candidates_file}
            });
        }.bind(this)
    },

    handleSubmitParty: function (party) {
        console.log(party);
        axios.post('/api/parties', party).then(function () {
            axios.get('/api/parties')
                .then(function (response) {
                    var temp = this.state.party;
                    temp.title = "";
                    temp.id = "";
                    temp.party_Code = "";
                    this.setState({
                        parties: response.data,
                        party: temp
                    });
                }.bind(this));
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
                                  onCandidates={this.handleCandidates}
                                  onDeleteParty={this.handleDeleteParty}/>
            </div>
        )
    }
});

PartiesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.PartiesContainer = PartiesContainer;