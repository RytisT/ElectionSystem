var AddPartyComponent = React.createClass( {

    getInitialState: function() {
        return {
            adding: false
        };
    },

    changeAddingState() {
        if ( this.state.adding ) {
            this.setState( { adding: false });
        } else {
            this.setState( { adding: true });
        }
    },


    render: function() {
        return this.state.adding
            ? <div className=" well col-md-10  col-md-offset-1">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td className="col-md-10">
                                    <input id="PartyId" className="form-control" placeholder="Partijos numeris" value={this.props.party.Id}
                                        onChange={this.props.onFieldChange( 'id' )} type="number" min="1" max="99" />
                                    <input id="PartyName" className="form-control" placeholder="Partijos Pavadinimas"
                                        value={this.props.party.title} maxLength="200"
                                        onChange={this.props.onFieldChange( 'title' )} type="text" />
                                    <input id="PartyCode" className="form-control" placeholder="Partijos Trumpinys"
                                        value={this.props.party.party_Code} maxLength="6"
                                        onChange={this.props.onFieldChange( 'party_Code' )} type="text" />
                                </td>

                                <td className="col-md-2">
                                    <button id="Submit party" className="btn btn-block btn-success" type="submit"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            var partyNumb = $( "#PartyId" ).val();
                                            if ( partyNumb < 1 || partyNumb > 99 ) {
                                                $( '#PartyIdValidation' ).hide( "slow" );
                                                $( '#PartyIdValidation' ).show( "slow" );
                                            }
                                            else { $( '#PartyIdValidation' ).hide( "slow" ) }

                                            var name = $( "#PartyName" ).val();
                                            var matchesn = name.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“\"!,.:;-? ()]$)" );
                                            if ( matchesn != null ) { $( '#PartyTitleValidation' ).hide( "slow" ) }
                                            else { $( '#PartyTitleValidation' ).hide( "slow" ); $( '#PartyTitleValidation' ).show( "slow" ) }

                                            var code = $( "#PartyCode" ).val();
                                            var matchesc = code.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
                                            if ( matchesc != null ) { $( '#PartyCodeValidation' ).hide( "slow" ) }
                                            else { $( '#PartyCodeValidation' ).hide( "slow" ); $( '#PartyCodeValidation' ).show( "slow" ) }

                                            if ( matchesn != null && matchesc != null && ( partyNumb > 0 && partyNumb <= 99 ) ) {
                                                $("#successAddPartyValidation").show().delay(3000).fadeOut();
                                                this.props.onSubmit( this.props.party ), this.changeAddingState()
                                            };

                                        } }>Pridėti
                                </button>
                                </td>
                                <td>
                                    <button id="Cancel_adding" className="btn btn-block btn-danger" type="submit"
                                        onClick={this.changeAddingState}>Atšaukti
                                </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <div id="PartyIdValidation" className="validationForm">
                    <span>Partijos numeris turi būti nuo 1 iki 99.</span></div>
                <div id="PartyTitleValidation" className="validationForm">
                    <span>Partijos pavadinime naudojami netinkami simboliai arba jis neįvestas.</span></div>
                <div id="PartyCodeValidation" className="validationForm">
                    <span>Partijos trumpinyje naudojami netinkami simboliai arba jis neįvestas.</span></div>
            </div>
            : <div>
                <button id="Add_party" className="btn btn-block btn-success" type="submit"
                    onClick={this.changeAddingState}>Pridėti Partiją
                </button>
            </div>

    }
});

window.AddPartyComponent = AddPartyComponent;