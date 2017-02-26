var SinglePartyContainer = React.createClass({

    getInitialState: function () {
        return {
            isEditing: false,
            party: this.props.party,
            isChanged: false,
            fieldContainer: {
                id: "",
                title: "",
                party_Code: ""
            }
        };
    },


    handleFieldChange: function (fieldName) {
        return function (party) {

            var tempParty = this.state.party;
            tempParty[fieldName] = party.target.value;
            this.setState({party: tempParty, isChanged: true});
        }.bind(this);
    },

    handleEditParty: function () {

        if (this.state.isEditing) {
            this.setState({isEditing: false})
            this.state.party.id = this.state.fieldContainer.id;
            this.state.party.title = this.state.fieldContainer.title;
            this.state.party.party_Code = this.state.fieldContainer.party_Code;
            this.forceUpdate()
        } else {
            this.setState({isEditing: true})
            this.state.fieldContainer.id = this.state.party.id;
            this.state.fieldContainer.title = this.state.party.title;
            this.state.fieldContainer.party_Code = this.state.party.party_Code;
        }

    },

    handleSaveParty: function () {
        axios.post('/api/parties', this.state.party)
            .then(this.setState({isEditing: false}))
    },

    render: function () {
        return (
            <SinglePartyComponent party={this.props.party}
                                  isEditing={this.state.isEditing}
                                  onSave={this.handleSaveParty}
                                  onDelte={this.props.onDelete}
                                  onFieldChange={this.handleFieldChange}
                                  onDeleteParty={this.props.onDeleteParty}
                                  onEdit={this.handleEditParty}/>
        )
    }
});

window.SinglePartyContainer = SinglePartyContainer;