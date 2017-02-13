
var AddCandidateContainer = React.createClass( {
    getInitialState: function() {
        return {
            candidate: {
                name: '',                
                last_name: '',
                date_of_birth: '',
                description: ''
            }
        }
    },
    
    handleSaveClick: function(e) {
        e.preventDefault();
        var self = this;
        axios.post('/api/candidates', this.state.candidate).then(function () {
            self.context.router.push('/candidates');
          });
    },
    
    handleFieldChange: function(fieldName) {
        var self = this;
        return function(e) {
          var candidate = self.state.candidate;
          candidate[fieldName] = e.target.value;
          self.setState({ candidate: candidate });
        };
    },
    
    handleCancelClick() {
        this.context.router.push('/candidates');
    },
      
    render: function() {
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