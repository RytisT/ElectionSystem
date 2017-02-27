var SingleDistrictComponent = React.createClass({


    render: function () {

        return this.props.isEditing

            ? <tr>
                <td className="col-md-3"><input id="District name" className="form-control" size="3"
                                                placeholder="Įveskite apylinkės pavadinimą"
                                                value={this.props.district.title}
                                                onChange={this.props.onFieldChange('title')} type="text"/></td>
                <td className="col-md-1"><input id="Voters Count" className="form-control" size="3" placeholder="Įveskite rinkejų skaičių"
                                                value={this.props.district.number_of_voters}
                                                onChange={this.props.onFieldChange('number_of_voters')} type="number"/>
                </td>
                <td className="col-md-3"><input id="District id" className="form-control" size="3"
                                                placeholder="Įveskite apylinkės adresą"
                                                value={this.props.district.address}
                                                onChange={this.props.onFieldChange('address')} type="text"/></td>
                <td className="col-md-2">
                    <DistrictRepresentativeContainer distRep={this.props.district.district_representatives}
                                                     distId={this.props.district.id}/>
                </td>

                <td className="col-md-2">
                    <button id="update District " type="button" className="btn btn-success" onClick={this.props.onSaveDist}>Išsaugoti</button>
                    <button id="Cancel Changes" type="button" className="btn btn-danger" onClick={this.props.onEditDist}>Atšaukti</button>
                </td>
                <td className="col-md-1">
                    <button id="Delete district" type="button" className="btn btn-danger" onClick={this.props.onDelete(this.props.district)}>
                        Trinti
                    </button>
                </td>
            </tr>
            : <tr>
                <td className="col-md-3">{this.props.district.title}</td>
                <td className="col-md-1">{this.props.district.number_of_voters}</td>
                <td className="col-md-3">{this.props.district.address}</td>
                <td className="col-md-2"><DistrictRepresentativeContainer
                    distRep={this.props.district.district_representatives} distId={this.props.district.id}/>
                </td>

                <td className="col-md-2">
                    <button id="Edit District" type="button" className="btn btn-info" onClick={this.props.onEditDist}>Redaguoti</button>
                </td>
                <td className="col-md-1">
                    <button id="Delete district" type="button" className="btn btn-danger" onClick={this.props.onDelete(this.props.district)}>
                        Trinti
                    </button>
                </td>
            </tr>
    }
});

window.SingleDistrictComponent = SingleDistrictComponent;