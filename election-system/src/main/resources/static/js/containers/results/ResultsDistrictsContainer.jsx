var ResultsDistrictsContainer = React.createClass( {

    getInitialState: function() {
        return {
            districts: []
        }
    },

    componentWillMount: function() {
        var constituencyId = this.props.routeParams.constituencyId;
        axios.get( '/api/constituencies/' + constituencyId )
            .then( function(response) {
                this.setState( {
                    districts: response.data.districts,
                });
            }.bind(this))
    },

    handleReturnConstituencies() {
        this.context.router.push('/results/constituencies');
    },

    handleResultsDistrictsInfo: function(district) {
        return function() {
            this.context.router.push({
                pathname: '/results/districts/info/' + district.id
            });
        }.bind(this)
    },

    handleResultsDistrictsMulti: function(district) {
        return function() {
            this.context.router.push({
                pathname: '/results/districts/multi/' + district.id
            });
        }.bind(this)
    },

    handleResultsDistrictsSingle: function(district) {
        return function() {
            this.context.router.push({
                pathname: '/results/districts/single/' + district.id
            });
        }.bind(this)
    },

    render: function() {
        return (
            <div>
                <ResultsDistrictsComponent districts={this.state.districts}
                                           onReturnConstituenciesClick={this.handleReturnConstituencies}
                                           onResultsDistrictsInfoClick={this.handleResultsDistrictsInfo}
                                           onResultsDistrictsMultiClick={this.handleResultsDistrictsMulti}
                                           onResultsDistrictsSingleClick={this.handleResultsDistrictsSingle}

                />
            </div>
        )
    }
});



ResultsDistrictsContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsDistrictsContainer = ResultsDistrictsContainer;