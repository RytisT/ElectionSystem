var DistrictRepresentativeComponent = React.createClass({

    addNewRepresentative: function () {
        return (
            <div>
                <button id="Add District Rep" type="button" className="btn btn-success" data-toggle="modal"
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
                                    <input id="Rep name" className="form-control" placeholder="Vardas" value={this.props.distRep.name}
                                           onChange={this.props.onFieldChange('name')} type="text"/>
                                    <input id="Rep surname" className="form-control" placeholder="Pavardė"
                                           value={this.props.distRep.last_name}
                                           onChange={this.props.onFieldChange('last_name')} type="text"/>
                                    <input id="Rep login name" className="form-control" placeholder="Prisijungimo vardas"
                                           value={this.props.distRep.login}
                                           onChange={this.props.onFieldChange('login')} type="text"/>
                                    <input id="Rep password" className="form-control" placeholder="Slaptažodis"
                                           value={this.props.distRep.password}
                                           onChange={this.props.onFieldChange('password')} type="password"/>

                                    <button id="Submit Rep" className="btn btn-block btn-success" type="submit"
                                            onClick={() => this.props.onSubmit(this.props.distRep)}>Pridėti
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

    editExistingRepresentative: function () {
        if (this.props.editing) {
            return (
                <div className="modal-body">
                    <form>
                        <input id="Rep name" className="form-control" placeholder="Vardas" value={this.props.distRep.name}
                               onChange={this.props.onFieldChange('name')} type="text"/>
                        <input id="Rep surname" className="form-control" placeholder="Pavardė" value={this.props.distRep.last_name}
                               onChange={this.props.onFieldChange('last_name')} type="text"/>
                        <input id="Rep login name" className="form-control" placeholder="Prisijungimo vardas"
                               value={this.props.distRep.login}
                               onChange={this.props.onFieldChange('login')} type="text"/>
                        <input id="Rep password" className="form-control" placeholder="Slaptažodis" value={this.props.distRep.password}
                               onChange={this.props.onFieldChange('password')} type="password"/>

                        <button id="Submit Rep" className="btn btn-block btn-success" type="submit"
                                onClick={() => this.props.onSubmit(this.props.distRep)}>Pridėti
                        </button>

                        <button id="Cancel" type="button" className="btn btn-block btn-danger" data-dismiss="modal">Atšaukti</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="modal-body">
                    {console.log(this.props.editing, this.props.existing)}
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


    representativeWrapper: function () {
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
                                <button type="button" className="btn btn-default" data-dismiss="modal">Uždaryti</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    },
    render: function () {
        return this.props.existing
            ? <div>
                <button id="Rep information" type="button" className="btn btn-default" data-toggle="modal"
                        data-target={"#" + this.props.distId}>{this.props.distRep.name} {this.props.distRep.last_name}</button>
                {this.representativeWrapper()}
            </div>
            : <div>
                <button id="Add Rep" type="button" className="btn btn-success" data-toggle="modal"
                        data-target={"#" + this.props.distId}>
                    Pridėti apylinkės atstovą
                </button>
                {this.representativeWrapper()}
            </div>


    }

});

window.DistrictRepresentativeComponent = DistrictRepresentativeComponent;