var AddPartyComponent = React.createClass({

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


    render: function () {
        return this.state.adding
        ? <div className=" well col-md-10  col-md-offset-1">
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td className="col-md-10">
                                <input className="form-control" placeholder="Partijos ID" value={this.props.party.Id}
                                       onChange={this.props.onFieldChange( 'id' )} type="number" />
                                <input className="form-control" placeholder="Partijos Pavadinimas" value={this.props.party.title}
                                       onChange={this.props.onFieldChange( 'title' )} type="text" />
                                <input className="form-control" placeholder="Partijos Kodas" value={this.props.party.party_Code}
                                       onChange={this.props.onFieldChange( 'party_Code' )} type="text" />
                            </td>

                            <td className="col-md-2">
                                <button className="btn btn-block btn-success" type="submit"
                                        onClick={() => { this.props.onSubmit(this.props.party)}}>Continue</button>
                            </td>
                            <td>
                                <button className="btn btn-block btn-danger" type="submit"
                                        onClick={this.changeAddingState}>Cancel</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            : <div>
                <button className="btn btn-block btn-success" type="submit"
                        onClick={this.changeAddingState}>Prideti Partija</button>
            </div>

    }
});

window.AddPartyComponent = AddPartyComponent;