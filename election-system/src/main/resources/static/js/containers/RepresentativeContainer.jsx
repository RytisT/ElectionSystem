var SingleVotesContainer = React.createClass( {
        getInitialState: function() {
            return {
                candidates: []
            };
        },

        componentWillMount: function() {
            var self = this;
            axios.get( '/api/candidates' )
                .then( function( response ) {
                    self.setState( {
                        candidates: response.data
                    });
                });
        },
    render: function () {
        return <SingleVotesComponent />
    }
});

SingleVotesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.SingleVotesContainer = SingleVotesContainer;