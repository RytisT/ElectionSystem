var SinglePartyContainer = React.createClass( {

    getInitialState: function() {
        return {
            bgColor: "white",
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

    handleHover: function() {
        return function() {
            this.state.bgColor == "white"
                ? this.setState( { bgColor: "#ffee91" })
                : this.setState( { bgColor: "white" })
        }.bind( this )
    },

    handleFieldChange: function( fieldName ) {
        return function( party ) {

            var tempParty = this.state.party;
            tempParty[fieldName] = party.target.value;
            this.setState( { party: tempParty, isChanged: true });
        }.bind( this );
    },

    handleEditParty: function() {

        if ( this.state.isEditing ) {
            this.setState( { isEditing: false })
            this.state.party.id = this.state.fieldContainer.id;
            this.state.party.title = this.state.fieldContainer.title;
            this.state.party.party_Code = this.state.fieldContainer.party_Code;
            this.forceUpdate()
        } else {
            this.setState( { isEditing: true })
            this.state.fieldContainer.id = this.state.party.id;
            this.state.fieldContainer.title = this.state.party.title;
            this.state.fieldContainer.party_Code = this.state.party.party_Code;
        }

    },

    handleSaveParty: function() {

        var partyNumb = $( "#Party_Number" ).val();
        if ( partyNumb < 1 || partyNumb > 99 ) {
            $( '#PartyNumber_Validation' ).hide( "slow" );
            $( '#PartyNumber_Validation' ).show( "slow" );
        }
        else { $( '#PartyNumber_Validation' ).hide( "slow" ) }

        var code = $( "#Party_Code" ).val();
        var matches2 = code.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
        if ( matches2 != null ) { $( '#PartyCode_Validation' ).hide( "slow" ); }
        else { $( '#PartyCode_Validation' ).hide( "slow" ); $( '#PartyCode_Validation' ).show( "slow" ) }

        var address = $( "#Party_Title" ).val();
        var matches3 = address.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“\"!,.:;-? ()]$)" );
        if ( matches3 != null ) { $( '#PartyTitle_Validation' ).hide( "slow" ); }
        else { $( '#PartyTitle_Validation' ).hide( "slow" ); $( '#PartyTitle_Validation' ).show( "slow" ) }

        if ( matches2 != null && matches3 != null && ( partyNumb > 0 && partyNumb <= 99 ) ) {
            axios.post( '/api/parties', this.state.party )
                .then( this.setState( { isEditing: false }) )
        };


    },

    render: function() {
        return (
            <SinglePartyComponent party={this.props.party}
                isEditing={this.state.isEditing}
                onSave={this.handleSaveParty}
                onDelte={this.props.onDelete}
                onFieldChange={this.handleFieldChange}
                onDeleteParty={this.props.onDeleteParty}
                onCandidates={this.props.onCandidates}
                color={this.state.bgColor}
                onHover={this.handleHover}
                onEdit={this.handleEditParty} />
        )
    }
});

window.SinglePartyContainer = SinglePartyContainer;