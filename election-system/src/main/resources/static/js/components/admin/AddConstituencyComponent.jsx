var AddConstituencyComponent = React.createClass( {

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

    handleSubmitConstituency: function() {
        if ( this.state.adding ) {
            return (
                <div className=" well col-md-10  col-md-offset-1">
                    <form>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="col-md-10">
                                        <input id="ConstituencyName" className="form-control" placeholder="Apygardos Pavadinimas"
                                            maxLength="30" value={this.props.constituency.title}
                                            onChange={this.props.onFieldChange( 'title' )} type="text" />
                                    </td>
                                    <td className="col-md-2">
                                        <button id="SubmitConstituency" className="btn btn-block btn-success" type="submit"
                                            onClick={( event ) => {
                                                event.preventDefault();
                                                var val = $( "#ConstituencyName" ).val();
                                                var matches = val.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
                                                if ( matches != null ) {
                                                    $( '#ConstituencyTitleValidation' ).hide( "slow" );
                                                    $("#successAddConstituencyValidation").show().delay(3000).fadeOut();
                                                    this.props.onSubmitConst( this.props.constituency );
                                                    this.changeAddingState();
                                                }
                                                else {
                                                    $( '#ConstituencyTitleValidation' ).hide( "slow" );
                                                    $( '#ConstituencyTitleValidation' ).show( "slow" )
                                                }

                                            } }>Pridėti
                                    </button>
                                    </td>
                                    <td>
                                        <button id="CancelSubmitting" className="btn btn-block btn-danger" type="submit"
                                            onClick={this.changeAddingState}>Atšaukti
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                     <div id="ConstituencyTitleValidation" className="validationForm">
                                    <span>Naudojami netinkami simboliai arba neužpildytas laukas.</span></div>               
                </div>
            )
        } else {
            return (
                <div>
                    <button id="AddConstituency" className="btn btn-block btn-success" type="submit"
                        onClick={this.changeAddingState}>Pridėti apygardą
                    </button>
                </div> )
        }
    },

    render: function() {
        return (
            <div>
                {this.handleSubmitConstituency()}
            </div>
        )
    }
});

window.AddConstituencyComponent = AddConstituencyComponent;