const laikinaApylinke = 1;

var SubmitVotesContainer = React.createClass({
    getInitialState: function () {
        return {
            parties: [],
            district: [],
            constituency: [],
        };
    },

    componentWillMount: function () {
        axios.get('/api/parties')
            .then(function (response) {
                this.setState({
                    parties: response.data
                });
            }.bind(this));
        axios.get('api/districts/' + laikinaApylinke)
            .then(function (response) {
                this.setState({
                    district: response.data
                });
            }.bind(this));
        axios.get(`api/candidates/search?constituency_id=` + laikinaApylinke)
            .then(function (response) {
                this.setState({
                    constituency: response.data
                });
            }.bind(this));

        // handleSubmitDistrict: function (tempDistrict) {
        //     console.log(tempDistrict);
        //     axios.post('/api/districts/' + laikinaApylinke, tempDistrict).then(function () {
        //         axios.get('/api/districts/' + laikinaApylinke)
        //             .then(function (response) {
        //                 this.setState({
        //                     district: response.data,
        //                  });
        //             }.bind(this));
        //     }.bind(this));
        // },

        //var self = this;
        // axios.get('/api/parties')
        //     .then(function (response) {
        //         self.setState({
        //             parties: response.data
        //         });
        //     });
        // axios.get('api/districts/' + laikinaApygarda)
        //     .then(function (response) {
        //         self.setState({
        //             district: response.data
        //         });
        //     });
        // axios.get('api/candidates/search?constituency_id=' + laikinaApygarda)
        //     .then(function (response) {
        //         self.setState({
        //             candidates: response.data
        //         });
        //     });
    },

    // componentDidMount: function () {
    //     var districts = this.state.district;
    //     console.log(districts);
    //     var party = this.state.parties;
    //     console.log(party);
    // },

    render: function () {
        return (
            <div>
                <DistrictInfoComponent district={this.state.district} constituency={this.state.constituency}/>
                <MultiVotesComponent parties={this.state.parties}/>
                <SingleVotesComponent constituency={this.state.constituency}/>
            </div>
        )
    }
});

SubmitVotesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.SubmitVotesContainer = SubmitVotesContainer;