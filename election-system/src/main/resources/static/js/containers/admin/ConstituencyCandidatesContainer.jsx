var ConstituencyCandidatesContainer = React.createClass({

    getInitialState: function () {
        return {
            candidates: [],
            csvFile: "",
            constTitle: ""
        }
    },

    componentWillMount: function () {
        var constId = this.props.routeParams.constId;
        axios.get('/api/constituencies/' + constId)
            .then(function (response) {
                this.setState({
                    candidates: response.data.candidates,
                    csvFile: response.data.candidates_file,
                    constTitle: response.data.title
                });
            }.bind(this))
    },

    handleFileChange: function (file) {
        var data = new FormData();
        var header = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'constId': this.props.routeParams.constId,
                'constTitle': this.state.constTitle

            }
        };
        data.append('file', file);
        axios.post("/uploadForm", data, header)
            .then(function (response) {
                var constId = this.props.routeParams.constId;
                axios.get('/api/constituencies/' + constId)
                    .then(function (response) {
                        this.setState({
                            candidates: response.data.candidates,
                            csvFile: response.data.candidates_file,
                            constTitle: response.data.title
                        });
                    }.bind(this))
                }.bind(this)
            )
    },

    handleDeleteFile: function (filename) {
        return function () {
            console.log(filename)
            axios.delete("/uploadForm/const/" + filename)
                .then(function () {
                    var constId = this.props.routeParams.constId;
                    axios.delete("/api/candidates/const/" + constId)
                        .then(function () {
                            axios.get('/api/constituencies/' + constId)
                                .then(function (response) {
                                    this.setState({
                                        candidates: response.data.candidates,
                                        csvFile: response.data.candidates_file,
                                        constTitle: response.data.title
                                    });
                                }.bind(this))
                            }.bind(this)
                        )
                }.bind(this))
        }.bind(this)
    },

    handleReturn: function () {
        this.context.router.push('/admin');
    },

    render: function () {
        return (
            <ConstituencyCandidatesComponent onFileChange={this.handleFileChange}
                                      candidates={this.state.candidates}
                                      csvFile={this.state.csvFile}
                                      onReturn={this.handleReturn}
                                      onFileDelete={this.handleDeleteFile}
            />
        )
    }
});

ConstituencyCandidatesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ConstituencyCandidatesContainer = ConstituencyCandidatesContainer;