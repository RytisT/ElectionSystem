var SubmitVotesContainer = React.createClass({
    getInitialState: function () {
        return {
            district: {},
        };
    },


    handleSaveVotes: function (district) {

        axios.post("api/districts", district)
        this.setState({district: district});
},

    componentWillMount: function() {
        var repLogin = this.props.routeParams.repLogin;
            axios.get('api/representatives/login/' + repLogin)
                .then(function (response) {
                   this.setState({district: response.data})
                }.bind(this))

    },


    render: function () {
        if (this.state.district.title != (null)) {
            return (
                <div>
                    <DistrictInfoComponent district={this.state.district}/>
                    <MultiVotesContainer district={this.state.district} onSaveVotes = {this.handleSaveVotes}/>
                    <SingleVotesContainer district={this.state.district}
                                          onSaveVotes = {this.handleSaveVotes}
                                          constId={this.state.district.constituency_id}/>
                </div>
            )
        } else {
            return <div>Daumenų nerasta</div>
        }
    }
});


window.SubmitVotesContainer = SubmitVotesContainer;