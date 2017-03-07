var SingleConstituencyComponent = React.createClass( {

    render: function() {
        return this.props.isEditing
            ? <tr>
                <td className="col-md-5"><input id="ConstituencyName" className="form-control" size="3"
                                                placeholder="Įveskite Apygardos pavadinimą"
                                                value={this.props.constituency.title}
                                                onChange={this.props.onFieldChange( 'title' )} type="text" /><br />
                    <div id="ConstituencyNameValidation" className="validationForm">
                        <span> naudojami netinkami simboliai. </span></div></td>
                <td className="col-md-2"></td>
                <td className="col-md-2"></td>
                <td className="col-md-2">
                    <button id="Update_constituency" type="button" className="btn btn-success" onClick={this.props.onSaveConst}>Išsaugoti
                    </button>
                    <button id="Cancel_update" type="button" className="btn btn-danger" onClick={this.props.onEditConst}>Atšaukti</button>
                </td>
                <td className="col-md-1">
                    <button id="Delete_Constituency" type="button" className="btn btn-danger"
                            onClick={this.props.onDeleteConst( this.props.constituency )}>Trinti
                    </button>
                </td>
            </tr>
            : <tr>
                <td className="col-md-5">{this.props.constituency.title}</td>
                <td className="col-md-2">
                    <button id="Edit_Districts" type="button" className="btn btn-info"
                            onClick={this.props.onEditDistrict( this.props.constituency )}>Redaguoti apylinkes
                    </button>
                </td>
                <td className="col-md-2">
                    <button id="Candidates_info" type="button" className="btn btn-info"
                            onClick={this.props.onCandidates( this.props.constituency )}>Kandidatai
                    </button>
                </td>
                <td className="col-md-2">
                    <button id="Edit_constituency" type="button" className="btn btn-warning" onClick={this.props.onEditConst}>Redaguoti
                        apygardą
                    </button>
                </td>
                <td className="col-md-1">
                    <button id="Delete_constituency" type="button" className="btn btn-danger"
                            onClick={this.props.onDeleteConst( this.props.constituency )}>Trinti
                    </button>
                </td>
            </tr>
    }
});


window.SingleConstituencyComponent = SingleConstituencyComponent;