var SingleConstituencyComponent = React.createClass({

    render: function () {
        return this.props.isEditing
            ? <tr>
                <td className="col-md-5"><input id="Constituency name" className="form-control" size="3"
                                                placeholder="Įveskite Apygardos pavadinimą"
                                                value={this.props.constituency.title}
                                                onChange={this.props.onFieldChange('title')} type="text"/></td>
                <td className="col-md-4"></td>
                <td className="col-md-2">
                    <button id="Update constituency" type="button" className="btn btn-success" onClick={this.props.onSaveConst}>Išsaugoti
                    </button>
                    <button id="Cancel update" type="button" className="btn btn-danger" onClick={this.props.onEditConst}>Atšaukti</button>
                </td>
                <td className="col-md-1">
                    <button id="Delete Constituency" type="button" className="btn btn-danger"
                            onClick={this.props.onDeleteConst(this.props.constituency)}>Trinti
                    </button>
                </td>
            </tr>
            : <tr>
                <td className="col-md-5">{this.props.constituency.title}</td>
                <td className="col-md-4">
                    <button id="Edit Districts" type="button" className="btn btn-info"
                            onClick={this.props.onEditDistrict(this.props.constituency)}>Redaguoti apylinkes
                    </button>
                </td>
                <td className="col-md-2">
                    <button id="Edit constituency" type="button" className="btn btn-warning" onClick={this.props.onEditConst}>Redaguoti
                        apygardą
                    </button>
                </td>
                <td className="col-md-1">
                    <button id="Delete constituency" type="button" className="btn btn-danger"
                            onClick={this.props.onDeleteConst(this.props.constituency)}>Trinti
                    </button>
                </td>
            </tr>
    }
});


window.SingleConstituencyComponent = SingleConstituencyComponent;