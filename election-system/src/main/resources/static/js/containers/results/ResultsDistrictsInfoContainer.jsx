var ResultsDistrictsInfoContainer = React.createClass({

    getInitialState: function () {
        return {
            district: {
                id: this.props.params.id,
                title: '',
                number_of_voters: '',
                address: '',
                votedSingle: '',
                votedSingleCorrupt: '',
                votedMulti: '',
                votedMultiCorrupt: '',
                votedSingleTime: '',
                votedMultiTime: '',
            }
        }
    },


    componentWillMount: function () {
        var districtId = this.props.routeParams.districtId;
        axios.get('/api/districts/' + districtId)
            .then(function (response) {
                this.setState({
                    district: response.data.district,
            });
        }.bind(this))
    },


    // handleCancelClick() {
    //     this.context.router.push('/candidates');
    // },

    render: function () {
        return (
            <ResultsDistrictsInfoComponent district={this.state.district}
                /*onCancelClick={this.handleCancelClick}*/
            />
        );
    }
});

ResultsDistrictsInfoContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ResultsDistrictsInfoContainer = ResultsConstituenciesInfoContainer;