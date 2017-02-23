var PartyDescriptionContainer = React.createClass( {
    getInitialState: function() {
        return {
            party: {
                id: this.props.params.id,
                title: '',
                party_Code: ''
            },
            candidates: []
        };
    },

    componentWillMount: function() {
        var self = this;
        var partyId = this.props.params.partyId;
        axios.get( '/api/candidates/search?party_id=' +  this.props.params.partyId )
            .then( function( response ) {
                self.setState( {
                    candidates: response.data
                });
            });
    },

    handleCancelClick() {
        this.context.router.push( '/parties' );
    },


    render: function() {
        return <PartyDescriptionComponent candidates={this.state.candidates} party={this.state.party}
            onCancelClick={this.handleCancelClick} />
    }
});

PartyDescriptionContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.PartyDescriptionContainer = PartyDescriptionContainer;