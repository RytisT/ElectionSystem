var RepresentativeContainer = React.createClass({
    getInitialState: function () {
        return {
            parties: []
        };
    },

    componentWillMount: function () {
        var self = this;
        axios.get('/api/parties')
            .then(function (response) {
                self.setState({
                    parties: response.data
                });
            });
    },

    render: function () {
        return (
            <div>
                <MultiVotesComponent parties={this.state.parties}/>
                <SingleVotesComponent />
            </div>
        )
    }
});

RepresentativeContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.RepresentativeContainer = RepresentativeContainer;