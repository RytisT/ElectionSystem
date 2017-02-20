
var AddDistrictComponent = React.createClass({

    getInitialState: function() {
        return {
            adding: false
        };
    },

    changeAddingState(){
        if(this.state.adding){
            this.setState( { adding: false });
        } else {
            this.setState( { adding: true });
        }
    },

    handleSubmitDistrict: function() {
        if(this.state.adding){
            return(
                <div>
                    <form>
                                    <input  className="form-control" placeholder="Apylinkes Pavadinimas" value={this.props.district.title}
                                           onChange={this.props.onFieldChange( 'title' )} type="text" />
                                    <input  className="form-control" placeholder="Rinkeju skaicius" value={this.props.district.number_of_voters}
                                            onChange={this.props.onFieldChange( 'number_of_voters' )} type="number" />
                                    <input  className="form-control" placeholder="Adresas" value={this.props.district.address}
                                            onChange={this.props.onFieldChange( 'address' )} type="text" />

                                    <button className="btn btn-block btn-success" type="submit"
                                            onClick={(event) => { this.props.onSubmitDist(this.props.district); this.changeAddingState();}}>Continue</button>

                                    <button className="btn btn-block btn-danger" type="submit"
                                            onClick={this.changeAddingState}>Cancel</button>

                    </form>
                </div>
            )
        } else {
            return(
                <div>
                    <button className="btn btn-block btn-success" type="submit"
                            onClick={this.changeAddingState}>Prideti apylinke</button>
                </div>)
        }
    },

    render: function () {
        return(
            <div>{this.handleSubmitDistrict()}</div>
        )
    }
});


window.AddDistrictComponent = AddDistrictComponent;