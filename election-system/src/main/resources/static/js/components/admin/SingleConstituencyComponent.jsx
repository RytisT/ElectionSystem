var styles = {
    hidden: {
        display: 'none'
    },
};

var SingleConstituencyComponent = React.createClass( {

    render: function() {
        return this.props.isEditing
            ? <tr>
                <td className="col-md-6"><input id="ConstituencyName" className="form-control" size="3"
                    placeholder="Įveskite Apygardos pavadinimą"
                    value={this.props.constituency.title}
                    onChange={this.props.onFieldChange( 'title' )} type="text" /><br />
                    <div id="ConstituencyNameValidation" className="validationForm">
                        <span> naudojami netinkami simboliai. </span></div></td>
                <td className="col-md-2"></td>
                <td className="col-md-1"></td>
                <td className="col-md-2">
                    <button id="Update_constituency" type="button" className="btn btn-success" onClick={this.props.onSaveConst}>Išsaugoti
                    </button>
                    <button id="Cancel_update" type="button" className="btn btn-danger" style={styles.space}
                        onClick={this.props.onEditConst}>Atšaukti</button>
                </td>
                <td className="col-md-1">
                    <button id="Delete_Constituency" type="button" className="btn btn-danger"
                        onClick={this.props.onDeleteConst( this.props.constituency )}>Trinti
                    </button>
                </td>
            </tr>
            : <tr onMouseOver={this.props.onHover()} onMouseOut={this.props.onHover()} style={{ backgroundColor: this.props.color }}>
                <td className="col-md-6">{this.props.constituency.title}</td>
                <td className="col-md-2">
                    <button id="Edit_Districts" type="button" className="btn btn-info"
                        onClick={this.props.onEditDistrict( this.props.constituency )}>Redaguoti apylinkes
                    </button>
                </td>
                <td className="col-md-1">
                    <button id="Candidates_info" type="button" className="btn btn-info"
                        onClick={this.props.onCandidates( this.props.constituency )}>Sąrašas
                    </button>
                </td>
                <td className="col-md-2">
                    <button id="Edit_constituency" type="button" className="btn btn-warning" onClick={this.props.onEditConst}>Redaguoti
                        apygardą
                    </button>
                </td>
                <td className="col-md-1">
                    <button id={"x_constituency" + this.props.constituency.id} type="button" className="btn btn-danger"
                        onClick={( event ) => {
                            var x = this.props.constituency.id;
                            var y = "#Delete_constituency" + x;
                            var z = "#x_constituency" + x
                            if ( $( y ).is( ":hidden" ) ) { $( y ).show(); $( z ).html( "Atšaukti" ) }
                            else { $( y ).hide(); $( z ).html( "Trinti" ); }
                        } }>Trinti
                    </button>
                    <button id={"Delete_constituency" + this.props.constituency.id} style={styles.hidden} type="button" className="btn btn-danger"
                        onClick={this.props.onDeleteConst( this.props.constituency )}>Patvirtinti
                    </button>
                </td>
            </tr>
    }
});


window.SingleConstituencyComponent = SingleConstituencyComponent;