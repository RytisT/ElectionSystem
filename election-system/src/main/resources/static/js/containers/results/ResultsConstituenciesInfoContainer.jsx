var ResultsConstituenciesInfoContainer = React.createClass({

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
            }
        }
    },


    componentWillMount: function () {
        var constituencyId = this.props.routeParams.constituencyId;
        axios.get('/api/constituencies/' + constituencyId)
            .then(function (response) {
                this.setState({
                    constituency: response.data,
                });
            }.bind(this))
    },


    handleReturnConstituencies() {
        this.context.router.push('/results/constituencies');
    },

    render: function () {
        return (
            <ResultsConstituenciesInfoComponent constituency={this.state.constituency}
                                                onReturnConstituenciesClick={this.handleReturnConstituencies}
            />
        );
    }
});

ResultsConstituenciesInfoContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsConstituenciesInfoContainer = ResultsConstituenciesInfoContainer;
