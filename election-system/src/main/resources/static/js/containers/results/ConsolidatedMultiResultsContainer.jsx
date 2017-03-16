var ConsolidatedMultiResultsContainer = React.createClass({

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
                 var tempList;
                response.data.map(function (consti, index) {

                })
                this.setState({
                    constituencies: response.data,
                });
            }.bind(this));

        axios.get('api/candidates/elected/multi')
            .then(function (response) {
                this.setState({
                    candidatesList: response.data,
                });
            }.bind(this));


        axios.get('api/parties/mandates')
            .then(function (response) {
                this.setState({
                    parties: response.data,
                });
            }.bind(this));
    },


    handleReturnConstituencies() {
        this.context.router.push('/results/constituencies');
    },

    render: function () {
        return (this.state.parties[1] != null && this.state.candidatesList[0] != null)
            ?<ConsolidatedMultiResultsComponent candidatesList={this.state.candidatesList}
                                                constituencies = {this.state.constituencies}
                                                 parties = {this.state.parties}
                                                 onReturnConstituenciesClick={this.handleReturnConstituencies}
            />
            :<div>Rezultatai dar nepaskelbti</div>
    }
});

ResultsConstituenciesSingleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ConsolidatedMultiResultsContainer = ConsolidatedMultiResultsContainer;