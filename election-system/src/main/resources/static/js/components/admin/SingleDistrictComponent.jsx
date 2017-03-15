var styles = {
    hidden: {
        display: 'none'
    },
};

var SingleDistrictComponent = React.createClass( {


    render: function() {

        return this.props.isEditing

            ? <tr onMouseOver={this.props.onHover()} onMouseOut={this.props.onHover()} style={{ backgroundColor: this.props.color }}>
                <td className="col-md-3"><input id="District_name" className="form-control" size="3"
                    placeholder="Apylinkės pavadinimas"
                    value={this.props.district.title} maxLength="30"
                    onChange={this.props.onFieldChange( 'title' )} type="text" />
                    <br />
                    <div id="District_name_Validation" className="validationForm">
                        <span>netinkami simboliai</span></div>
                </td>
                <td className="col-md-1"><input id="Voters_Count" className="form-control" size="3" placeholder="0" min="1" max="10000"
                    value={this.props.district.number_of_voters}
                    onChange={this.props.onFieldChange( 'number_of_voters' )} type="number" />
                    <br />
                    <div id="Voters_Count_Validation" className="validationForm">
                        <span>1-10000</span></div>
                </td>
                <td className="col-md-3"><input id="District_address" className="form-control" size="3"
                    placeholder="Apylinkės adresas"
                    value={this.props.district.address} maxLength="150"
                    onChange={this.props.onFieldChange( 'address' )} type="text" />
                    <br />
                    <div id="District_address_Validation" className="validationForm">
                        <span>netinkami simboliai</span></div>
                </td>
                <td className="col-md-2">
                    <DistrictRepresentativeContainer distRep={this.props.district.district_representatives}
                        distId={this.props.district.id} />
                </td>

                <td className="col-md-2">
                    <button id="update_District " type="button" className="btn btn-success" onClick={this.props.onSaveDist}>Išsaugoti</button>
                    <button id="Cancel_Changes" type="button" className="btn btn-danger" onClick={this.props.onEditDist}>Atšaukti</button>
                </td>
                <td className="col-md-1">
                    <button id={"Delete_district" + this.props.district.id} type="button" className="btn btn-danger" onClick={this.props.onDelete( this.props.district )}>
                        Trinti
                    </button>
                </td>
            </tr>
            : <tr onMouseOver={this.props.onHover()} onMouseOut={this.props.onHover()} style={{ backgroundColor: this.props.color }}>
                <td className="col-md-3">{this.props.district.title}</td>
                <td className="col-md-1">{this.props.district.number_of_voters}</td>
                <td className="col-md-3">{this.props.district.address}</td>
                <td className="col-md-2"><DistrictRepresentativeContainer
                    distRep={this.props.district.district_representatives} distId={this.props.district.id} />
                </td>

                <td className="col-md-2">
                    <button id="Edit_District" type="button" className="btn btn-info" onClick={this.props.onEditDist}>Redaguoti</button>
                </td>
                <td className="col-md-1">
                    <button id={"x_district" + this.props.district.id} type="button" className="btn btn-danger"
                        onClick={( event ) => {
                            var x = this.props.district.id;
                            var y = "#Delete_district" + x;
                            var z = "#x_district" + x
                            if ( $( y ).is( ":hidden" ) ) {
                                $( y ).show(); $( z ).html( "Atšaukti" );
                            } else { $( y ).hide(); $( z ).html( "Trinti" ); }
                        } }>Trinti
                </button>
                    <button id={"Delete_district" + this.props.district.id} style={styles.hidden} type="button" className="btn btn-danger"
                        onClick={this.props.onDelete( this.props.district )} >
                        Patvirtinti
                    </button>
                </td>
            </tr>
    }
});

window.SingleDistrictComponent = SingleDistrictComponent;