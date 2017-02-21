
var DistrictRepresentativeComponent = React.createClass({

    addNewRepresentative: function () {
            return(
                <div>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addRepresentative">Prideti apylinkes atstova</button>
                    <div className="modal fade" id="addRepresentative" role="dialog">
                        <div className="modal-dialog">

                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Prideti apylinkes atstova</h4>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <input  className="form-control" placeholder="Vardas" value={this.props.distRep.name}
                                                onChange={this.props.onFieldChange( 'name' )} type="text" />
                                        <input  className="form-control" placeholder="Pavarde" value={this.props.distRep.last_name}
                                                onChange={this.props.onFieldChange( 'last_name' )} type="text" />
                                        <input  className="form-control" placeholder="Prisijungimo vardas" value={this.props.distRep.login}
                                                onChange={this.props.onFieldChange( 'login' )} type="text" />
                                        <input  className="form-control" placeholder="Slaptazodis" value={this.props.distRep.password}
                                                onChange={this.props.onFieldChange( 'password' )} type="password" />

                                        <button className="btn btn-block btn-success" type="submit" onClick={() => this.props.onSubmit(this.props.distRep)}>Prideti</button>

                                        <button type="button" className="btn btn-block btn-danger" data-dismiss="modal">Cancel</button>

                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    },

    editExistingRepresentative: function () {
        if(this.props.editing){
            return(
                <div className="modal-body">
                <form>
                    <input  className="form-control" placeholder="Vardas" value={this.props.distRep.name}
                            onChange={this.props.onFieldChange( 'name' )} type="text" />
                    <input  className="form-control" placeholder="Pavarde" value={this.props.distRep.last_name}
                            onChange={this.props.onFieldChange( 'last_name' )} type="text" />
                    <input  className="form-control" placeholder="Prisijungimo vardas" value={this.props.distRep.login}
                            onChange={this.props.onFieldChange( 'login' )} type="text" />
                    <input  className="form-control" placeholder="Slaptazodis" value={this.props.distRep.password}
                            onChange={this.props.onFieldChange( 'password' )} type="password" />

                    <button className="btn btn-block btn-success" type="submit" onClick={() => this.props.onSubmit(this.props.distRep)}>Prideti</button>

                    <button type="button" className="btn btn-block btn-danger" data-dismiss="modal">Cancel</button>
                </form>
                </div>
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
                    <button className="btn btn-block btn-success" type="submit" onClick={this.props.onEdit}>Redaguoti</button>
                </div>
            )
        }
    },


    representativeWrapper: function(){
        return (
            <div>
                <button type="button" className="btn btn-default" data-toggle="modal" data-target={"#" + this.props.distRep.id}>{this.props.distRep.name} {this.props.distRep.last_name}</button>
                <div className="modal fade" id={this.props.distRep.id} role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{this.props.distRep.name} {this.props.distRep.last_name}</h4>
                            </div>
                            {this.editExistingRepresentative()}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    },
    render: function () {
        if(!this.props.existing){
            return this.addNewRepresentative()
        }else{
            return this.representativeWrapper()
        }
    }


});

window.DistrictRepresentativeComponent = DistrictRepresentativeComponent;