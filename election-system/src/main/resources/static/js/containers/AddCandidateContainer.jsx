var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var date = d.getDate();
if (month < 10) {
    month = '0' + month;
}
if (date < 10) {
    date = '0' + date;
}
var fullDate = year + '-' + month + '-' + date;

var AddCandidateContainer = React.createClass({
    getInitialState: function () {
        return {
            candidate: {
                name: '',
                last_name: '',
                date_of_birth: fullDate,
                description: ''
            }
        }
    },

    handleSaveClick: function (e) {
        e.preventDefault();
        var self = this;
        axios.post('/api/candidates', this.state.candidate).then(function () {
            self.context.router.push('/candidates');
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
            <AddCandidateComponent
                candidate={this.state.candidate}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
                onFieldChange={this.handleFieldChange}
            />
        );
    }

});

AddCandidateContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.AddCandidateContainer = AddCandidateContainer;