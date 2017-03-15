var ConsolidatedSingleResultsContainer = React.createClass({

    getInitialState: function() {
        return {
            constituencies: [],
            candidatesList: [],
            parties: []
        }
    },


    componentWillMount: function () {
        axios.get('/api/constituencies/')
            .then(function (response) {
                var constList = {};
                response.data.map(function (constit, index) {
                    constList[constit.id] = constit;
                }.bind(this))
                this.setState({
                    constituencies: constList,
                });
            }.bind(this));

        axios.get('api/candidates/elected/single')
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
        return (this.state.constituencies[1] != null && this.state.parties[1] != null && this.state.candidatesList[0] != null)
            ?<ConsolidatedSingleResultsComponent constituencies={this.state.constituencies}
                                                  candidatesList={this.state.candidatesList}
                                                  parties = {this.state.parties}
                                                  onReturnConstituenciesClick={this.handleReturnConstituencies}
        />
            :<div>Rezultatai dar nepaskelbti</div>
    }
});

ResultsConstituenciesSingleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ConsolidatedSingleResultsContainer = ConsolidatedSingleResultsContainer;