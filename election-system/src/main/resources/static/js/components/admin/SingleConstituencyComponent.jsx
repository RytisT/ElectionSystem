var SingleConstituencyComponent = React.createClass({

    render: function () {
        return this.props.isEditing
            ? <tr>
                <td className="col-md-5"><input className="form-control" size="3"
                                                placeholder="Iveskite Apygardos pavadinima"
                                                value={this.props.constituency.title}
                                                onChange={this.props.onFieldChange('title')} type="text"/></td>
                <td className="col-md-4"></td>
                <td className="col-md-2">
                    <button type="button" className="btn btn-success" onClick={this.props.onSaveConst}>Issaugoti
                    </button>
                    <button type="button" className="btn btn-danger" onClick={this.props.onEditConst}>Atsaukti</button>
                </td>
                <td className="col-md-1">
                    <button type="button" className="btn btn-danger"
                            onClick={this.props.onDeleteConst(this.props.constituency)}>Trinti
                    </button>
                </td>
            </tr>
            : <tr>
                <td className="col-md-5">{this.props.constituency.title}</td>
                <td className="col-md-4">
                    <button type="button" className="btn btn-info"
                            onClick={this.props.onEditDistrict(this.props.constituency)}>Redaguoti apylinkes
                    </button>
                </td>
                <td className="col-md-2">
                    <button type="button" className="btn btn-warning" onClick={this.props.onEditConst}>Redaguoti
                        apygarda
                    </button>
                </td>
                <td className="col-md-1">
                    <button type="button" className="btn btn-danger"
                            onClick={this.props.onDeleteConst(this.props.constituency)}>Trinti
                    </button>
                </td>
            </tr>
    }
});


window.SingleConstituencyComponent = SingleConstituencyComponent;