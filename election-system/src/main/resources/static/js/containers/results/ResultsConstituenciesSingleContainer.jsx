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
            candidatesList: [],
            parties: []
        }
    },


    componentWillMount: function () {
        var constituencyId = this.props.routeParams.constituencyId;
        axios.get('/api/constituencies/' + constituencyId)
            .then(function (response) {
                this.setState({
                    constituency: response.data,
                });
            }.bind(this));

        axios.get('api/candidates/search?constituency_id=' + constituencyId)
            .then(function (response) {
                this.setState({
                    candidatesList: response.data,
                });
            }.bind(this));

        axios.get('/api/parties/')
            .then(function (response) {
                var partyList = {};
                response.data.map(function (party, index) {
                    partyList[party.id] = party;
                }.bind(this))
                this.setState({
                    parties: partyList,
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
                                                  parties = {this.state.parties}
                                                  onReturnConstituenciesClick={this.handleReturnConstituencies}
            />
        );
    }
});

ResultsConstituenciesSingleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsConstituenciesSingleContainer = ResultsConstituenciesSingleContainer;