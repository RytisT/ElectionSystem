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
                        <div className="col-md-10"><input id="District name" className="form-control" placeholder="Apylinkės pavadinimas"
                            value={this.props.district.title}
                            onChange={this.props.onFieldChange( 'title' )} type="text" />
                            <input id="Voters count" className="form-control" placeholder="Rinkėjų skaičius"
                                value={this.props.district.number_of_voters}
                                onChange={this.props.onFieldChange( 'number_of_voters' )} type="number" />
                            <input id="Address" className="form-control" placeholder="Adresas" value={this.props.district.address}
                                onChange={this.props.onFieldChange( 'address' )} type="text" />
                            <br />
                        </div>
                        <div className="col-md-2">
                            <button id="Submit new district" className="btn btn-block btn-success" type="submit"
                                onClick={( event ) => {
                                    this.props.onSubmitDist( this.props.district );
                                    this.changeAddingState();
                                } }>Pridėti
                            </button>

                            <button id="Cancel adding" className="btn btn-block btn-danger" type="submit"
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
                    <button id="Add district" className="btn btn-block btn-success" type="submit"
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