var AddConstituencyComponent = React.createClass({
   render: function () {
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
                                                    <td></td>
                                                    <td>
                                                        <button className="btn btn-block btn-success" type="submit"
                                                                onClick={this.props.onSubmitConst}>Continue</button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </form>
           </div>
       )
   }
});

window.AddConstituencyComponent = AddConstituencyComponent;