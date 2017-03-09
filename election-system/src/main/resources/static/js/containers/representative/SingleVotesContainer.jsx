var SingleVotesContainer = React.createClass({


    getInitialState: function () {
        return {
            SingleCandidates: []
        };
    },


    componentWillMount: function() {
        axios.get(`api/candidates/search?constituency_id=` + this.props.constId)
            .then(function (response) {
                this.setState({
                    SingleCandidates: response.data
                });

            }.bind(this))
    },

    render: function () {
        return (
            <SingleVotesComponent SingleCandidates={this.state.SingleCandidates}/>
        )
    }
});


window.SingleVotesContainer = SingleVotesContainer;