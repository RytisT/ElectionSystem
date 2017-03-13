var ResultsConstituenciesMultiContainer = React.createClass({

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
            partiesList: []
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
        axios.get('/user/resultsconstituencies/multi/partylist/' + constituencyId)
            .then(function (response) {
                this.setState({
                    partyList: response.data,
                });
            }.bind(this));
    },


    handleReturnConstituencies() {
        this.context.router.push('/results/constituencies');
    },

    render: function () {
        return (
            <ResultsConstituenciesMultiComponent constituency={this.state.constituency}
                                                 partiesList={this.state.partiesList}
                                                 onReturnConstituenciesClick={this.handleReturnConstituencies}
            />
        );
    }
});

ResultsConstituenciesMultiContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsConstituenciesMultiContainer = ResultsConstituenciesMultiContainer;