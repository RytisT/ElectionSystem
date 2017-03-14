var ResultsConstituenciesContainer = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        return {
            constituencies: []
        };
    },

    componentWillMount: function () {
        axios.get('/api/constituencies')
            .then(function (response) {
                this.setState({
                    constituencies: response.data
                });

            }.bind(this))
    },

    handleReturnHome() {
        this.context.router.push('/main');
    },

    handleResultsConstituenciesInfo: function(constituency) {
        return function() {
            this.context.router.push( '/results/constituencies/info/' + constituency.id );
        }.bind(this)
    },

    handleResultsConstituenciesMulti: function(constituency) {
        return function() {
            this.context.router.push( '/results/constituencies/multi/' + constituency.id );
        }.bind(this)
    },

    handleResultsConstituenciesSingle: function(constituency) {
        return function() {
            this.context.router.push( '/results/constituencies/single/' + constituency.id );
        }.bind(this)
    },

    handleResultsDistricts: function (constituency) {
        return function () {
            this.context.router.push({
                pathname: '/results/districts/' + constituency.id
            });
        }.bind(this)
    },

    render: function () {
        return (
            <div>
                <ResultsConstituenciesComponent constituencies={this.state.constituencies}
                                                onResultsDistrictsClick={this.handleResultsDistricts}
                                                onResultsConstituenciesInfoClick={this.handleResultsConstituenciesInfo}
                                                onResultsConstituenciesMultiClick={this.handleResultsConstituenciesMulti}
                                                onResultsConstituenciesSingleClick={this.handleResultsConstituenciesSingle}
                                                onReturnHomeClick={this.handleReturnHome}
                />
            </div>
        )
    }
});

ResultsConstituenciesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsConstituenciesContainer = ResultsConstituenciesContainer;