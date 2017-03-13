var ResultsDistrictsSingleContainer = React.createClass({

    getInitialState: function() {
        return {
            district: {
                id: '',
                constituency_id: '',
                title: '',
                number_of_voters: '',
                address: '',
                votedSingle: '',
                votedSingleCorrupt: '',
                votedMulti: '',
                votedMultiCorrupt: '',
                votedSingleTime: '',
                votedMultiTime: '',
                singleVoteActive: '',
                multiVoteActive: '',
                district_representatives: {
                    district_id: '',
                    name: '',
                    last_name: '',
                    login: '',
                    password: ''
                },
                single_results: [],
                multi_results: []
            },
            candidatesList: []
        }
    },


    componentWillMount: function () {
        var districtId = this.props.routeParams.districtId;
        axios.get('/api/districts/' + districtId)
            .then(function (response) {
                this.setState({
                    district: response.data,
                });
            }.bind(this));
        axios.get('/user/resultsdistricts/single/candidatelist/' + districtId)
            .then(function (response) {
                this.setState({
                    candidatesList: response.data,
                });
            }.bind(this));
    },


    handleReturnDistricts() {
        this.context.router.push('/results/districts/' + this.state.district.constituency_id);
    },

    render: function () {
        return (
            <ResultsDistrictsSingleComponent district={this.state.district}
                                            candidatesList={this.state.candidatesList}
                                            onReturnDistrictsClick={this.handleReturnDistricts}
            />
        );
    }
});

ResultsDistrictsSingleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsDistrictsSingleContainer = ResultsDistrictsSingleContainer;