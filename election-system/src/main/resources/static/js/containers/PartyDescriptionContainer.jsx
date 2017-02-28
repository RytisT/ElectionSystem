var PartyDescriptionContainer = React.createClass( {
    getInitialState: function() {
        return {            
            party: {
                id: this.props.params.id,
                title: '',
                party_Code: ''
            },
            candidate: {
                id: '',
                name: '',
                last_name: '',
                date_of_birth: '',
                description: '',
                party_id: ''
            },
            candidates: []
        };
    },

    componentWillMount: function() {
        var self = this;
        var partyId = this.props.params.partyId;
        axios.get( '/api/candidates/search?party_id=' + this.props.params.partyId )
            .then( function( response ) {
                self.setState( {
                    candidates: response.data
                });
            });
    },

    // Description
    handleMemberDescription: function( candidate ) {
        var self = this;
        return function() {
            self.context.router.push( '/partymember/description/' + candidate.id );
        }
    },

    handleCancelClick() {
        this.context.router.push( '/parties' );
    },


    render: function() {
        return <PartyDescriptionComponent
            candidate={this.state.candidate}
            candidates={this.state.candidates}
            party={this.state.party}
            onCancelClick={this.handleCancelClick}
            onDescriptionItemClick={this.handleMemberDescription} />
    }
});

PartyDescriptionContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.PartyDescriptionContainer = PartyDescriptionContainer;