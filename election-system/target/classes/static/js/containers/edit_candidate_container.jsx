var EditCandidateContainer = React.createClass( {
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

    handleSaveClick: function( e ) {
        e.preventDefault();
        var self = this;
        axios.put( '/api/candidates/' + this.state.candidate.id, this.state.candidate ).then( function() {
            self.context.router.push( '/candidates' );
        });
    },    
   

    componentDidMount: function() {
        var self = this;
        var candidateId = this.props.params.candidateId;
        axios.get( '/api/candidates/' + candidateId ).then( function( response ) {
            self.setState( { candidate: response.data });
        });
    },
    
    

    handleFieldChange: function( fieldName ) {
        var self = this;
        return function( e ) {
            var candidate = self.state.candidate;
            candidate[fieldName] = e.target.value;
            self.setState( { candidate: candidate });
        };
    },

    handleCancelClick() {
        this.context.router.push( '/candidates' );
    },

    render: function() {
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