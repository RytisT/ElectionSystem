var MemberDescriptionContainer = React.createClass({
    getInitialState: function () {
        return {
            candidate: {
                id: this.props.params.id,
                name: '',
                last_name: '',
                date_of_birth: '',
                description: ''
            },
            party: {
                id: this.props.params.id,
                title: '',
                party_Code: ''
            }
        }
    },


    componentDidMount: function () {
        var self = this;
        var candidateId = this.props.params.candidateId;
        axios.get('/api/candidates/' + candidateId).then(function (response) {
            self.setState({candidate: response.data});
        });
//        var partyId = this.props.params.partyId;
//        axios.get( '/api/parties/' + partyId ).then( function( response ) {
//            self.setState({ party: response.data });
//        });
    },


    handleCancelClick() {
        this.context.router.push('/parties');
    },

    render: function () {
        return (
            <MemberDescriptionComponent
                candidate={this.state.candidate}
                party={this.state.party}
                onCancelClick={this.handleCancelClick}
            />
        );
    }
});

MemberDescriptionContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.MemberDescriptionContainer = MemberDescriptionContainer;