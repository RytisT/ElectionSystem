var SingleDistrictComponent = React.createClass({


render: function () {

    return this.props.isEditing

            ?<tr>
            <td className="col-md-3"><input className="form-control" size="3" placeholder="Iveskite apylinkes pavadinima" value={this.props.district.title}
                       onChange={this.props.onFieldChange( 'title' )} type="text" /></td>
            <td className="col-md-1"><input className="form-control" size="3" placeholder="Iveskite rinkeju skaiciu" value={this.props.district.number_of_voters}
                       onChange={this.props.onFieldChange( 'number_of_voters' )} type="number" /></td>
            <td className="col-md-3"><input className="form-control" size="3" placeholder="Iveskite apylinkes adresa" value={this.props.district.address}
                       onChange={this.props.onFieldChange( 'address' )} type="text" /></td>
            <td className="col-md-2">
                <DistrictRepresentativeContainer distRep={this.props.district.district_representatives} distId={this.props.district.id}/>
            </td>

            <td className="col-md-2">
                <button type="button" className="btn btn-success" onClick={this.props.onSaveDist}>Issaugoti</button>
                <button type="button" className="btn btn-danger" onClick={this.props.onEditDist}>Atsaukti</button>
            </td>
            <td className="col-md-1">
                <button type="button" className="btn btn-danger" onClick={this.props.onDelete(this.props.district)}>Trinti
                </button>
            </td>
            </tr>
            : <tr>
            <td className="col-md-3">{this.props.district.title}</td>
            <td className="col-md-1">{this.props.district.number_of_voters}</td>
            <td className="col-md-3">{this.props.district.address}</td>
            <td className="col-md-2"> <DistrictRepresentativeContainer distRep={this.props.district.district_representatives} distId={this.props.district.id}/>
            </td>

            <td className="col-md-2">
                <button type="button" className="btn btn-info" onClick={this.props.onEditDist}>Redaguoti</button>
            </td>
            <td className="col-md-1">
                <button type="button" className="btn btn-danger" onClick={this.props.onDelete(this.props.district)}>Trinti
                </button>
            </td>
            </tr>
    }
});

window.SingleDistrictComponent = SingleDistrictComponent;