var PartyCandidatesContainer = React.createClass({

    getInitialState: function () {
        return {
            candidates: [],
            csvFile: "",
            partyCode: ""
        }
    },

    componentWillMount: function () {
        var partyId = this.props.routeParams.partyId;
        axios.get('/api/parties/' + partyId)
            .then(function (response) {
                this.setState({
                    candidates: response.data.candidates,
                    csvFile: response.data.candidates_file,
                    partyCode: response.data.party_Code
                });
            }.bind(this))
    },

    handleFileChange: function (file) {
        var data = new FormData();
        var header = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'partyId': this.props.routeParams.partyId,
                'partyCode': this.state.partyCode

            }
        };
        data.append('file', file);
        axios.post("/uploadForm", data, header)
            .then(function (response) {
                var partyId = this.props.routeParams.partyId;
                axios.get('/api/parties/' + partyId)
                    .then(function (response) {
                        this.setState({
                            candidates: response.data.candidates,
                            csvFile: response.data.candidates_file,
                            partyCode: response.data.party_Code
                        });

                    }.bind(this))
                }.bind(this)
            )
    },

    handleDeleteFile: function (filename) {
        return function () {
            axios.delete("/uploadForm/party/" + filename)
                .then(function () {
                    var partyId = this.props.routeParams.partyId;
                    axios.delete("/api/candidates/party/" + partyId)
                        .then(function () {
                            axios.get('/api/parties/' + partyId)
                                .then(function (response) {
                                    this.setState({
                                        candidates: response.data.candidates,
                                        csvFile: response.data.candidates_file,
                                        partyCode: response.data.party_Code
                                    });

                                }.bind(this))
                            }.bind(this)
                        )
                }.bind(this))
        }.bind(this)
    },

    handleReturn: function () {
        this.context.router.push('/admin/parties');
    },

    render: function () {
        return (
            <PartyCandidatesComponent onFileChange={this.handleFileChange}
                                      candidates={this.state.candidates}
                                      csvFile={this.state.csvFile}
                                      onReturn={this.handleReturn}
                                      onFileDelete={this.handleDeleteFile}
            />
        )
    }
});

PartyCandidatesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.PartyCandidatesContainer = PartyCandidatesContainer;