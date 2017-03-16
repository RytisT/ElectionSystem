var ConsolidatedResultsContainer = React.createClass({

    getInitialState: function() {
        return {
            candidatesList: [],
            parties: [],
            partiesElected: [],
            constituencies: []
        }
    },


    componentWillMount: function () {
        axios.get('/api/candidates/elected')
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

        axios.get('/api/constituencies/')
            .then(function (response) {
                this.setState({
                    constituencies: response.data,
                });
            }.bind(this));



        axios.get('api/parties/mandates')
            .then(function (response) {
                this.setState({
                    partiesElected: response.data,
                });
            }.bind(this));

    },


    handleReturnConstituencies() {
        this.context.router.push('/results/constituencies');
    },

    render: function () {
        return (this.state.parties[1] != null && this.state.candidatesList[0] != null)
            ?<ConsolidatedResultsComponent candidatesList={this.state.candidatesList}
                                                 parties = {this.state.parties}
                                           partiesElected = {this.state.partiesElected}
                                           constituencies = {this.state.constituencies}
                                                 onReturnConstituenciesClick={this.handleReturnConstituencies}
            />
            :<div>Rezultatai dar nepaskelbti</div>
    }
});

ResultsConstituenciesSingleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ConsolidatedResultsContainer = ConsolidatedResultsContainer;