var SubmitVotesContainer = React.createClass({
    getInitialState: function () {
        return {
            district: {},
        };
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
                    <MultiVotesContainer district={this.state.district}/>
                    <SingleVotesContainer district={this.state.district} constId={this.state.district.constituency_id}/>
                </div>
            )
        } else {
            return <div>Kraunama</div>
        }
    }
});


window.SubmitVotesContainer = SubmitVotesContainer;