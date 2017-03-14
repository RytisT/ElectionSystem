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
            candidatesList: [],
            parties: {}
        }
    },


    componentWillMount: function () {
        var districtId = this.props.routeParams.districtId;
        var constId;
        axios.get('/api/districts/' + districtId)
            .then(function (response) {
                constId = response.data.constituency_id;
                axios.get('api/candidates/search?constituency_id=' + constId)
                    .then(function (response) {
                        this.setState({
                            candidatesList: response.data,
                        });
                    }.bind(this));
                this.setState({
                    district: response.data,
                });
            }.bind(this));

        axios.get('/api/parties/')
            .then(function (response) {
                var partyList = {};
                response.data.map(function (party, index) {
                    partyList[party.id] = party;
                }.bind(this))
                this.setState({
                    parties: partyList,
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
                                             parties = {this.state.parties}
                                            onReturnDistrictsClick={this.handleReturnDistricts}
            />
        );
    }
});

ResultsDistrictsSingleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsDistrictsSingleContainer = ResultsDistrictsSingleContainer;