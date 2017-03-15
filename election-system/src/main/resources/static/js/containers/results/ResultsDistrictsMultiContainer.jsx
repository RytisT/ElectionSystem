var ResultsDistrictsMultiContainer = React.createClass({

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
            votesList: {},
            parties: []
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
        axios.get('/api/parties/')
            .then(function (response) {
                this.setState({
                    parties: response.data,
                });
            }.bind(this));
    },


    handleReturnDistricts() {
        this.context.router.push('/results/districts/' + this.state.district.constituency_id);
    },

    render: function () {
        return (
            <ResultsDistrictsMultiComponent district={this.state.district}
                                            parties={this.state.parties}
                                            votesCount = {this.state.partiesList}
                                            onReturnDistrictsClick={this.handleReturnDistricts}
            />
        );
    }
});

ResultsDistrictsMultiContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsDistrictsMultiContainer = ResultsDistrictsMultiContainer;