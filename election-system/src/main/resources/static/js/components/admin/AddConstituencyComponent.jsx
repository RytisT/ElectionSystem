var AddConstituencyComponent = React.createClass({

    getInitialState: function () {
        return {
            adding: false
        };
    },

    changeAddingState(){
        if (this.state.adding) {
            this.setState({adding: false});
        } else {
            this.setState({adding: true});
        }
    },

    handleSubmitConstituency: function () {
        if (this.state.adding) {
            return (
                <div className=" well col-md-10  col-md-offset-1">
                    <form>
                        <table>
                            <tbody>
                            <tr>
                                <td className="col-md-10">
                                    <input id="Constituency name" className="form-control" placeholder="Apygardos Pavadinimas"
                                           value={this.props.constituency.title}
                                           onChange={this.props.onFieldChange('title')} type="text"/>
                                </td>
                                <td className="col-md-2">
                                    <button id="Submit constituency" className="btn btn-block btn-success" type="submit"
                                            onClick={(event) => {
                                                this.props.onSubmitConst(this.props.constituency);
                                                this.changeAddingState();
                                            }}>Pridėti
                                    </button>
                                </td>
                                <td>
                                    <button id="Cancel submitting" className="btn btn-block btn-danger" type="submit"
                                            onClick={this.changeAddingState}>Atšaukti
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <button id="Add Constituency" className="btn btn-block btn-success" type="submit"
                            onClick={this.changeAddingState}>Pridėti apygardą
                    </button>
                </div>)
        }
    },

    render: function () {
        return (
            <div>
                {this.handleSubmitConstituency()}
            </div>
        )
    }
});

window.AddConstituencyComponent = AddConstituencyComponent;