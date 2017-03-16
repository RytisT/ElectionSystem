var DistrictRepresentativeComponent = React.createClass( {

    addNewRepresentative: function() {
        return (
            <div>
                <button id="Add_District_Rep" type="button" className="btn btn-success" data-toggle="modal"
                    data-target={"#" + this.props.distId}>
                    Pridėti apylinkės atstovą
                </button>
                <div className="modal fade" id={"add" + this.props.distId} role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Pridėti apylinkės atstovą</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <input id="Rep_name" className="form-control" placeholder="Vardas" value={this.props.distRep.name}
                                        onChange={this.props.onFieldChange( 'name' )} type="text" />
                                    <input id="Rep_surname" className="form-control" placeholder="Pavardė"
                                        value={this.props.distRep.last_name}
                                        onChange={this.props.onFieldChange( 'last_name' )} type="text" />
                                    <input id="Rep_login_name" className="form-control" placeholder="Prisijungimo vardas"
                                        value={this.props.distRep.login}
                                        onChange={this.props.onFieldChange( 'login' )} type="text" />
                                    <input id="Rep_password" className="form-control" placeholder="Slaptažodis"
                                        value={this.props.distRep.password}
                                        onChange={this.props.onFieldChange( 'password' )} type="password" />

                                    <button id="Submit_Rep" className="btn btn-block btn-success" type="submit"
                                        onClick={(event) =>{ event.preventDefault(); this.props.onSubmit( this.props.distRep )}}>Pridėti
                                    </button>

                                    <button id="Cancel" type="button" className="btn btn-block btn-danger" data-dismiss="modal">
                                        Cancel
                                    </button>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Uždaryti</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    editExistingRepresentative: function() {
        if ( this.props.editing ) {
            return (
                <div className="modal-body">
                    <form>
                        <input id="RepName" className="form-control" placeholder="Vardas" value={this.props.distRep.name}
                            onChange={this.props.onFieldChange( 'name' )} type="text" maxLength="40" />
                        <input id="RepLastName" className="form-control" placeholder="Pavardė" value={this.props.distRep.last_name}
                            onChange={this.props.onFieldChange( 'last_name' )} type="text" maxLength="40" />
                        <input id="RepLoginName" className="form-control" placeholder="Prisijungimo vardas"
                            value={this.props.distRep.login}
                            onChange={this.props.onFieldChange( 'login' )} type="text" maxLength="40" />
                        <input id="RepPassword" className="form-control" placeholder="Slaptažodis" value={this.props.distRep.password}
                            onChange={this.props.onFieldChange( 'password' )} type="password" maxLength="30" />

                        <div id="RepNameValidation" className="validationForm">
                            <span> Neįvestas vardas arba naudojami netinkami simboliai.</span></div>
                        <div id="RepLastNameValidation" className="validationForm">
                            <span> Neįvesta pavardė arba naudojami netinkami simboliai.</span></div>
                        <div id="RepLoginNameValidation" className="validationForm">
                            <span> Neįvestas prisijungimo vardas arba naudojami netinkami simboliai.</span></div>
                        <div id="RepPassValidation" className="validationForm">
                            <span> Neįvestas slaptažodis arba naudojami netinkami simboliai.</span></div>

                        <button id="Submit_Rep" className="btn btn-block btn-success" type="submit"
                            onClick={() => {

                                var name = $( "#RepName" ).val();
                                var matches = name.match( ".*([a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
                                if ( matches != null ) { $( '#RepNameValidation' ).hide( "slow" ) }
                                else { $( '#RepNameValidation' ).hide( "slow" ); $( '#RepNameValidation' ).show( "slow" ) }
                                
                                var lastName = $( "#RepLastName" ).val();
                                var matches2 = lastName.match( ".*([a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
                                if ( matches2 != null ) { $( '#RepLastNameValidation' ).hide( "slow" ) }
                                else { $( '#RepLastNameValidation' ).hide( "slow" ); $( '#RepLastNameValidation' ).show( "slow" ) }

                                var login = $( "#RepLoginName" ).val();
                                var matches3 = login.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
                                if ( matches3 != null ) { $( '#RepLoginNameValidation' ).hide( "slow" ) }
                                else { $( '#RepLoginNameValidation' ).hide( "slow" ); $( '#RepLoginNameValidation' ).show( "slow" ) }
                                
                                var pass = $( "#RepPassword" ).val();
                                var matches4 = pass.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
                                if ( matches4 != null ) { $( '#RepPassValidation' ).hide( "slow" ) }
                                else { $( '#RepPassValidation' ).hide( "slow" ); $( '#RepPassValidation' ).show( "slow" ) }
                                
                                if ( matches != null && matches2 != null && matches3 != null && matches4 != null )
                                {this.props.onSubmit( this.props.distRep ) };

                            } }>
                            Pridėti
                        </button>

                        <button id="Cancel" type="button" className="btn btn-block btn-danger" data-dismiss="modal">Atšaukti</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="modal-body">
                    {console.log( this.props.editing, this.props.existing )}
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Vardas:</td>
                                <td>{this.props.distRep.name}</td>
                            </tr>
                            <tr>
                                <td>Pavardė:</td>
                                <td>{this.props.distRep.last_name}</td>
                            </tr>
                            <tr>
                                <td>Prisijungimo vardas:</td>
                                <td>{this.props.distRep.login}</td>
                            </tr>
                            <tr>
                                <td>Slaptažodis:</td>
                                <td>{this.props.distRep.password}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-block btn-success" type="submit" onClick={this.props.onEdit}>Redaguoti
                    </button>
                </div>
            )
        }
    },


    representativeWrapper: function() {
        return (
            <div>
                <div className="modal fade" id={this.props.distId} role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{this.props.distRep.name} {this.props.distRep.last_name}</h4>
                            </div>
                            {this.editExistingRepresentative()}
                            <div className="modal-footer">
                                <button id="Rep_Edit_Close" type="button" className="btn btn-default" data-dismiss="modal">Uždaryti</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    },
    render: function() {
        return this.props.existing
            ? <div>
                <button id="Rep_information" type="button" className="btn btn-default" data-toggle="modal"
                    data-target={"#" + this.props.distId}>{this.props.distRep.name} {this.props.distRep.last_name}</button>
                {this.representativeWrapper()}
            </div>
            : <div>
                <button id="Add_Rep" type="button" className="btn btn-success" data-toggle="modal"
                    data-target={"#" + this.props.distId}>
                    Pridėti apylinkės atstovą
                </button>
                {this.representativeWrapper()}
            </div>


    }

});

window.DistrictRepresentativeComponent = DistrictRepresentativeComponent;