var styles = {
    hidden: {
        display: 'none'
    },
};

var SinglePartyComponent = React.createClass( {


    render: function() {

        return this.props.isEditing

            ? <tr>
                <td><input id="Party_Number" className="form-control"
                    placeholder="Nr."
                    value={this.props.party.id}
                    onChange={this.props.onFieldChange( 'id' )} type="number" min="1" max="99" /></td>
                <td><input id="Party_Code" className="form-control" placeholder="Trump."
                    value={this.props.party.party_Code} maxLength="6"
                    onChange={this.props.onFieldChange( 'party_Code' )} type="text" />
                </td>
                <td><input id="Party_Title" className="form-control"
                    placeholder="Įveskite partijos pavadinimą"
                    value={this.props.party.title} maxLength="200"
                    onChange={this.props.onFieldChange( 'title' )} type="text" />
                    <br />
                    <div id="PartyNumber_Validation" className="validationForm">
                        <span>Partijos numeris turi būti nuo 1 iki 99. </span></div>
                    <div id="PartyCode_Validation" className="validationForm">
                        <span> Trumpinyje naudojami netinkami simboliai. </span></div>
                    <div id="PartyTitle_Validation" className="validationForm">
                        <span> Pavadinime naudojami netinkami simboliai. </span></div>
                </td>
                <td>
                    <button id="CandidatesInfo" type="button" className="btn btn-info"
                        onClick={this.props.onCandidates( this.props.party )}>Sąrašas
                    </button>
                </td>
                <td>
                    <button id="UpdateParty" type="button" className="btn btn-success" onClick={this.props.onSave}>Išsaugoti</button>
                    <button id="CancelChanges" type="button" className="btn btn-danger" onClick={this.props.onEdit}>Atšaukti</button>
                </td>
                <td>
                    <button id="DeleteParty" type="button" className="btn btn-danger"
                        onClick={this.props.onDeleteParty( this.props.party )}>
                        Trinti
                    </button>
                </td>
            </tr>
            : <tr onMouseOver={this.props.onHover()} onMouseOut={this.props.onHover()} style={{ backgroundColor: this.props.color }}>
                <td>{this.props.party.id}</td>
                <td>{this.props.party.party_Code}</td>
                <td>{this.props.party.title}</td>
                <td><button id="CandidatesInfo" type="button" className="btn btn-info"
                    onClick={this.props.onCandidates( this.props.party )}>Sąrašas
                </button>
                </td>
                <td>
                    <button id="EditParty" type="button" className="btn btn-info" onClick={this.props.onEdit}>Redaguoti</button>
                </td>
                <td>
                    <button id={"x_party" + this.props.party.id} type="button" className="btn btn-danger"
                        onClick={( event ) => {
                            var x = this.props.party.id;
                            var y = "#DeleteParty" + x;
                            var z = "#x_party" + x
                            if ( $( y ).is( ":hidden" ) ) { $( y ).show(); $( z ).html( "Atšaukti" ) }
                            else { $( y ).hide(); $( z ).html( "Trinti" ); }
                        } }>Trinti
                </button>
                    <button id={"DeleteParty" + this.props.party.id} style={styles.hidden} type="button" className="btn btn-danger" data-toggle="confirmation"
                        onClick={this.props.onDeleteParty( this.props.party )}>Patvirtinti
                    </button>
                </td>

            </tr>
    }
});

window.SinglePartyComponent = SinglePartyComponent;