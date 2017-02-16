var AddConstituencyComponent = React.createClass({

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

    handleSubmitConstituency: function() {
        if(this.state.adding){
                return(
                        <div>
                            <form>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <input className="form-control" placeholder="Apygardos Pavadinimas" value={this.props.constituency.title}
                                                   onChange={this.props.onFieldChange( 'title' )} type="text" />
                                        </td>
                                        <td>
                                            <button className="btn btn-block btn-success" type="submit"
                                                    onClick={(event) => { this.props.onSubmitConst(this.props.constituency); this.changeAddingState();}}>Continue</button>
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
            <div>
                {this.handleSubmitConstituency()}
            </div>
        )
    }
});

window.AddConstituencyComponent = AddConstituencyComponent;