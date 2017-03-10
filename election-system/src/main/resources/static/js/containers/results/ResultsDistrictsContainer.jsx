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

    handleResultsDistrictsInfo: function(district) {
        return function() {
            this.context.router.push({
                pathname: '/results/districts/info/' + district.id
            });
        }.bind(this)
    },

    // handleReturn: function() {
    //     this.context.router.push( '/admin' );
    // },

    render: function() {
        return (
            <div>
                <ResultsDistrictsComponent districts={this.state.districts}
                                           onResultsDistrictsInfoClick={this.handleResultsDistrictsInfo}
                />
            </div>
        )
    }
});



ResultsDistrictsContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsDistrictsContainer = ResultsDistrictsContainer;