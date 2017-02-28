var PartyCandidatesContainer = React.createClass({

    getInitialState: function () {
        return {
            candidates: [],
            csvFile: ""
        }
    },

    componentWillMount: function () {
        var partyId = this.props.routeParams.partyId;
        axios.get('/api/parties/' + partyId)
            .then(function (response) {
                console.log(response)
                this.setState({
                    candidates: response.data.candidates,
                    csvFile: response.data.candidates_file
                });
            }.bind(this))
        console.log(this.state.csvFile)
    },

    handleFileChange: function (file) {
        var data = new FormData();
        var header = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'partyId': this.props.routeParams.partyId
            }
        };
        data.append('file', file);
        console.log(file)
        axios.post("/uploadForm", data, header)
            .then(function (response) {
                var partyId = this.props.routeParams.partyId;
                axios.get('/api/parties/' + partyId)
                    .then(function (response) {
                        this.setState({
                            candidates: response.data.candidates,
                            csvFile: response.data.candidates_file
                        });
                    }.bind(this))
                }.bind(this)
            )
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
            />
        )
    }
});

PartyCandidatesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.PartyCandidatesContainer = PartyCandidatesContainer;