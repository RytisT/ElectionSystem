var EditDistrictRepresentativeComponent = React.createClass({

    getInitialState: function () {
        return {
            editing: false
    }
    },

    onFieldChange: function( fieldName ) {
        var _this = this;
        return function(representative) {
            var tempRepresentative = _this.state.representative;
            tempRepresentative[fieldName] = representative.target.value;
            _this.setState( { representative: tempRepresentative });

        };
    },


    handleEditRepresentative: function () {

        if(this.state.editing){
            return(
                    <form>
                        <input  className="form-control" placeholder="Vardas" value={this.props.distRep.name}
                            onChange={this.onFieldChange( 'name' )} type="text" />
                        <input  className="form-control" placeholder="Pavarde" value={this.props.distRep.last_name}
                            onChange={this.onFieldChange( 'last_name' )} type="text" />
                        <input  className="form-control" placeholder="Prisijungimo vardas" value={this.props.distRep.login}
                            onChange={this.onFieldChange( 'login' )} type="text" />
                        <input  className="form-control" placeholder="Slaptazodis" value={this.props.distRep.password}
                            onChange={this.onFieldChange( 'password' )} type="password" />

                        <button className="btn btn-block btn-success" type="submit"
                            onClick={(event) => { this.onSubmit(this.props.distRep);  this.setState({editing: true});}}>Prideti</button>

                        <button type="button" className="btn btn-block btn-danger" data-dismiss="modal">Cancel</button>
                    </form>
                    )
        } else {
            return(
            <div className="modal-body">
                <table className="table">
                    <tbody>
                    <tr>
                        <td>Vardas: </td>
                        <td>{this.props.distRep.name}</td>
                    </tr>
                    <tr>
                        <td>Pavarde: </td>
                        <td>{this.props.distRep.last_name}</td>
                    </tr>
                    <tr>
                        <td>Prisijungimo vardas: </td>
                        <td>{this.props.distRep.login}</td>
                    </tr>
                    <tr>
                        <td>Slaptazodis: </td>
                        <td>{this.props.distRep.password}</td>
                    </tr>
                    </tbody>
                </table>

                <button className="btn btn-block btn-success" type="submit"
                        onClick={() => this.setState({editing: true})}>Redaguoti</button>
            </div>
            )
        }
    },

    render: function () {
       return(
           <div className="modal fade" id={this.props.distRep.id} role="dialog">
               <div className="modal-dialog">

                   <div className="modal-content">
                       <div className="modal-header">
                           <button type="button" className="close" data-dismiss="modal">&times;</button>
                           <h4 className="modal-title">{this.props.distRep.name} {this.props.distRep.last_name}</h4>
                       </div>
                       {this.handleEditRepresentative()}
                       <div className="modal-footer">
                           <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                       </div>
                   </div>

               </div>
           </div>
       )
   }
});

window.EditDistrictRepresentativeComponent = EditDistrictRepresentativeComponent;