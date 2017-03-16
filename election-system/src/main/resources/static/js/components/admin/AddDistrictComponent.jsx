
var AddDistrictComponent = React.createClass( {

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

    handleSubmitDistrict: function() {
        if ( this.state.adding ) {
            return (
                <div className=" well col-md-10  col-md-offset-1">
                    <h3>Pridėti naują apylinkę</h3>
                    <form>
                        <div className="col-md-10"><input id="DistrictName" className="form-control" placeholder="Apylinkės pavadinimas"
                            value={this.props.district.title} maxLength="30"
                            onChange={this.props.onFieldChange( 'title' )} type="text" />
                            <input id="VotersCount" className="form-control" placeholder="Rinkėjų skaičius" min="1" max="10000"
                                value={this.props.district.number_of_voters} 
                                onChange={this.props.onFieldChange( 'number_of_voters' )} type="number" />
                            <input id="Address" className="form-control" placeholder="Adresas" value={this.props.district.address} maxLength="150"
                                onChange={this.props.onFieldChange( 'address' )} type="text" />
                            <br />
                            <table><tbody>
                                <tr><td><div id="DistrictTitleValidation" className="validationForm">
                                    <span>Neįvestas apylinkės pavadinimas arba naudojami netinkami simboliai.</span></div></td></tr>
                                <tr><td><div id="DistrictVotersNumberValidation" className="validationForm">
                                    <span>Rinkėjų skaičius turi būti nuo 1 iki 10000.</span></div></td></tr>
                                <tr><td><div id="DistrictAddressValidation" className="validationForm">
                                    <span>Neįvestas apylinkės adresas arba naudojami netinkami simboliai.</span></div></td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="col-md-2">
                            <button id="Submit_new_district" className="btn btn-block btn-success" type="submit"
                                onClick={( event ) => {
                                    event.preventDefault();
                                    var name = $( "#DistrictName" ).val();
                                    var matches1 = name.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
                                    if ( matches1 != null ) { $( '#DistrictTitleValidation' ).hide( "slow" ); }
                                    else { $( '#DistrictTitleValidation' ).hide( "slow" ); $( '#DistrictTitleValidation' ).show( "slow" ) }

                                    var voters = $( "#VotersCount" ).val();
                                    if ( voters < 1 || voters > 10000 ) {
                                        $( '#DistrictVotersNumberValidation' ).hide( "slow" );
                                        $( '#DistrictVotersNumberValidation' ).show( "slow" );                                       
                                    }
                                    else { $( '#DistrictVotersNumberValidation' ).hide( "slow" ) }

                                    var address = $( "#Address" ).val();
                                    var matches3 = address.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“\"!,.:;-? ()]$)" );
                                    if ( matches3 != null ) { $( '#DistrictAddressValidation' ).hide( "slow" ); }
                                    else { $( '#DistrictAddressValidation' ).hide( "slow" ); $( '#DistrictAddressValidation' ).show( "slow" ) }

                                    if ( matches1 != null && matches3 != null && ( voters > 0 && voters <= 10000 ) ) {
                                        $('#successAddDistrictValidation').show().delay(3000).fadeOut();
                                        this.props.onSubmitDist( this.props.district );
                                        this.changeAddingState();
                                    };

                                } }>Pridėti
                            </button>
                            <button id="Cancel_Adding" className="btn btn-block btn-danger" type="submit"
                                onClick={this.changeAddingState}>Atšaukti
                            </button>
                            <p></p>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <button id="Add_District" className="btn btn-block btn-success" type="submit"
                        onClick={this.changeAddingState}>Pridėti apylinkę
                    </button>
                </div> )
        }
    },

    render: function() {
        return (
            <div>{this.handleSubmitDistrict()}</div>
        )
    }
});


window.AddDistrictComponent = AddDistrictComponent;