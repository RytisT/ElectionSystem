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


    handleResultsDistricts: function (constituency) {
        return function () {
            this.context.router.push("/results/districts/" + constituency.id);
        }.bind(this)
    },

    handleResultsConstituenciesInfo: function(constituency) {
        return function() {
            this.context.router.push( '/results/constituencies/info/' + constituency.id );
        }.bind(this)
    },

    render: function () {
        return (
            <div>
                <ResultsConstituenciesComponent constituencies={this.state.constituencies}
                                                onResultsDistrictsClick={this.handleResultsDistricts}
                                                onResultsConstituenciesInfoClick={this.handleResultsConstituenciesInfo}
                />
            </div>
        )
    }
});

ResultsConstituenciesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsConstituenciesContainer = ResultsConstituenciesContainer;