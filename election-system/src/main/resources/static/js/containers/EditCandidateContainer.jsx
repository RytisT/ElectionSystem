var EditCandidateContainer = React.createClass({
    getInitialState: function () {
        return {
            candidate: {
                id: this.props.params.id,
                name: '',
                last_name: '',
                date_of_birth: '',
                description: ''
            }
        }
    },

    handleSaveClick: function (e) {
        e.preventDefault();
        var self = this;
        axios.post('/api/candidates/', this.state.candidate).then(function () {
            console.log('candidate updated');
            self.context.router.push('candidates');
        });
    },


    componentDidMount: function () {
        var self = this;
        var candidateId = this.props.params.candidateId;
        axios.get('/api/candidates/' + candidateId).then(function (response) {
            self.setState({candidate: response.data});
        });
    },


    handleFieldChange: function (fieldName) {
        var self = this;
        return function (e) {
            var candidate = self.state.candidate;
            candidate[fieldName] = e.target.value;
            self.setState({candidate: candidate});
        };
    },

    handleCancelClick() {
        this.context.router.push('/candidates');
    },

    render: function () {
        return (
            <EditCandidateComponent
                candidate={this.state.candidate}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
                onFieldChange={this.handleFieldChange}
            />
        );
    }

});

EditCandidateContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.EditCandidateContainer = EditCandidateContainer;