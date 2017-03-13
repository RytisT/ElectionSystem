var ResultsConstituenciesSingleContainer = React.createClass({

    getInitialState: function() {
        return {
            constituency: {
                id: '',
                title: '',
                number_of_voters: '',
                votedSingle: '',
                votedSingleCorrupt: '',
                votedMulti: '',
                votedMultiCorrupt: ''
            },
            candidatesList: []
        }
    },


    componentWillMount: function () {
        var constituencyId = this.props.routeParams.constituencyId;
        axios.get('/user/resultsconstituencies/' + constituencyId)
            .then(function (response) {
                this.setState({
                    constituency: response.data,
                });
            }.bind(this));
        axios.get('/user/resultsconstituencies/single/candidatelist/' + constituencyId)
            .then(function (response) {
                this.setState({
                    candidatesList: response.data,
                });
            }.bind(this));
    },


    handleReturnConstituencies() {
        this.context.router.push('/results/constituencies');
    },

    render: function () {
        return (
            <ResultsConstituenciesSingleComponent constituency={this.state.constituency}
                                                  candidatesList={this.state.candidatesList}
                                                  onReturnConstituenciesClick={this.handleReturnConstituencies}
            />
        );
    }
});

ResultsConstituenciesSingleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsConstituenciesSingleContainer = ResultsConstituenciesSingleContainer;