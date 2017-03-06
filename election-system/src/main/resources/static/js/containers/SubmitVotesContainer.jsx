const laikinaApygarda = 1;

var SubmitVotesContainer = React.createClass({
    getInitialState: function () {
        return {
            parties: [],
            // district: {
            //     id: '',
            //     constituency_id: '',
            //     title: '',
            //     number_of_voters: '',
            //     address: '',
            //     votedSingle: '',
            //     votedSingleCorrupt: '',
            //     votedMulti: '',
            //     votedMultiCorrupt: '',
            //     votedSingleTime: '',
            //     votedMultiTime: '',
            //     district_representatives: {
            //         district_id: '',
            //         name: '',
            //         last_name: '',
            //         login: '',
            //         password: ''
            //     },
            //     single_results: [],
            //     multi_results: []
            // },
            candidates: []
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
        // axios.get('api/districts/' + laikinaApygarda)
        //     .then(function (response) {
        //         self.setState({
        //             district: response.data
        //         });
        //     });
        axios.get('api/candidates/search?constituency_id=' + laikinaApygarda)
            .then(function (response) {
                self.setState({
                    candidates: response.data
                });
            });
    },

    render: function () {
        return (
            <div>
                <MultiVotesComponent parties={this.state.parties}/>
                <SingleVotesComponent candidates={this.state.candidates}/>
            </div>
        )
    }
});

SubmitVotesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.SubmitVotesContainer = SubmitVotesContainer;