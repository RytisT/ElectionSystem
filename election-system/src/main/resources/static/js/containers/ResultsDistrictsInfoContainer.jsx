var ResultsDistrictsInfoContainer = React.createClass({

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
            this.context.router.push("/results/district/" + constituency.id);
        }.bind(this)
    },

    handleResultsConstituenciesInfo: function( constituency ) {
        return function() {
            this.context.router.push( '/results/constituencies/info/' + candidate.id );
        }.bind(this)
    },

    render: function () {
        return (
            <div>
                <ResultsConstituenciesComponent constituencies={this.state.constituencies}
                                                onResultsDistrict={this.handleResultsDistricts}
                                                onResultsConstituenciesInfoClick={this.handleResultsConstituenciesInfo}
                />
            </div>
        )
    }
});

ResultsDistrictsInfoContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsDistrictsInfoContainer = ResultsConstituenciesInfoContainer;