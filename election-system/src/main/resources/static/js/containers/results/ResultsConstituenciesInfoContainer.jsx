var ResultsConstituenciesInfoContainer = React.createClass({

    getInitialState: function() {
        return {
            constituency: {}
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
            return this.state.constituency.id

                ?<ResultsConstituenciesInfoComponent constituency={this.state.constituency}
                                                    onReturnConstituenciesClick={this.handleReturnConstituencies}/>
                : <div>kraunama</div>
    }
});

ResultsConstituenciesInfoContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsConstituenciesInfoContainer = ResultsConstituenciesInfoContainer;
