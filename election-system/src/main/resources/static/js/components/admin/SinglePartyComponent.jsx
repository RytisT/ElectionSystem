var SinglePartyComponent = React.createClass({


    render: function () {

        return this.props.isEditing

            ? <tr>
                <td><input id="Party number" className="form-control"
                           placeholder="Partijos numeris"
                           value={this.props.party.id}
                           onChange={this.props.onFieldChange('id')} type="number"/></td>
                <td><input id="Party code" className="form-control" placeholder="Partijos trumpinys"
                           value={this.props.party.party_Code}
                           onChange={this.props.onFieldChange('party_Code')} type="text"/>
                </td>
                <td><input id="Party address" className="form-control"
                           placeholder="Įveskite apylinkės adresą"
                           value={this.props.party.title}
                           onChange={this.props.onFieldChange('title')} type="text"/></td>
                <td>
                    <button id="Candidates info" type="button" className="btn btn-info"
                            onClick={this.props.onCandidates(this.props.party)}>Kandidatai
                    </button>
                </td>
                <td>
                    <button id="Update party" type="button" className="btn btn-success" onClick={this.props.onSave}>Išsaugoti</button>
                    <button id="Cancel Changes" type="button" className="btn btn-danger" onClick={this.props.onEdit}>Atšaukti</button>
                </td>
                <td>
                    <button id="Delete party" type="button" className="btn btn-danger"
                            onClick={this.props.onDeleteParty(this.props.party)}>
                        Trinti
                    </button>
                </td>
            </tr>
            : <tr>
                <td>{this.props.party.id}</td>
                <td>{this.props.party.party_Code}</td>
                <td>{this.props.party.title}</td>
                <td><button id="Candidates info" type="button" className="btn btn-info"
                            onClick={this.props.onCandidates(this.props.party)}>Kandidatai
                </button>
                </td>
                <td>
                    <button id="Edit Party" type="button" className="btn btn-info" onClick={this.props.onEdit}>Redaguoti</button>
                </td>
                <td>
                    <button id="Delete Party" type="button" className="btn btn-danger"
                            onClick={this.props.onDeleteParty(this.props.party)}>Trinti
                    </button>
                </td>

            </tr>
    }
});

window.SinglePartyComponent = SinglePartyComponent;