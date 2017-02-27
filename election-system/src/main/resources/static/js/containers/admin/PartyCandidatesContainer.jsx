var PartyCandidatesContainer = React.createClass({

    getInitialState: function () {
        return {
            candidates: []
        }
    },

    componentWillMount: function () {
        var partyId = this.props.routeParams.partyId;
        axios.get('/api/parties/' + partyId)
            .then(function (response) {
                console.log(response)
                this.setState({
                    candidates: response.data.candidates
                });
            }.bind(this))

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
                        console.log(response)
                        this.setState({
                            candidates: response.data.candidates
                        });
                    }.bind(this))
                }.bind(this)
            )
    },


    render: function () {
        return (
            <PartyCandidatesComponent onFileChange={this.handleFileChange}
                                      candidates={this.state.candidates}
            />
        )
    }
});

window.PartyCandidatesContainer = PartyCandidatesContainer;