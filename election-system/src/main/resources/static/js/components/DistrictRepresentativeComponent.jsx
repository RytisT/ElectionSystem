
var DistrictRepresentativeComponent = React.createClass({
    getInitialState: function(){
        return {
            existing: false,
            representative: {
                id: "",
                district_id: "",
                name: "",
                last_name: "",
                login: "",
                password: ""
            }
        }
    },

    componentWillMount: function() {
        if (this.props.distRep[0] != null){
            this.setState( { existing: true });

        }
    },

    handleRepresentative: function(){
        var _this = this;

        if(!this.state.existing){
            return(
                <div>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addRepresentative">Prideti apylinkes atstova</button>
                    <div className="modal fade" id="addRepresentative" role="dialog">
                        <div className="modal-dialog">

                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Prideti apylinkes atstovaaa</h4>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <input  className="form-control" placeholder="Vardas" value={this.state.representative.name}
                                                onChange={_this.onFieldChange( 'name' )} type="text" />
                                        <input  className="form-control" placeholder="Pavarde" value={this.state.representative.last_name}
                                                onChange={_this.onFieldChange( 'last_name' )} type="text" />
                                        <input  className="form-control" placeholder="Prisijungimo vardas" value={this.state.representative.login}
                                                onChange={_this.onFieldChange( 'login' )} type="text" />
                                        <input  className="form-control" placeholder="Slaptazodis" value={this.state.representative.password}
                                                onChange={_this.onFieldChange( 'password' )} type="password" />

                                        <button className="btn btn-block btn-success" type="submit"
                                                onClick={(event) => { this.onSubmit(this.state.representative); this.changeExistingState();}}>Prideti</button>

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
        }else{

            return(
                <div>
                    <button type="button" className="btn btn-default" data-toggle="modal" data-target={"#" + this.props.distRep[0].id}>{this.props.distRep[0].name} {this.props.distRep[0].last_name}</button>
                    <EditDistrictRepresentativeComponent distRep={this.props.distRep[0]}/>
                </div>
            )
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

    onSubmit: function (representative) {
        var _this = this;
        representative.district_id = this.props.distId;
        axios.post('/api/representatives', representative).then(function() {
                _this.setState( { representative: representative });
        });
    },

    changeExistingState(){
        if(this.state.existing){
            this.setState( { existing: false });
        } else {
            this.setState( { existing: true });
        }
    },
    render: function () {
        return(
            <div>
            {this.handleRepresentative()}
            </div>
        )
    }
});

window.DistrictRepresentativeComponent = DistrictRepresentativeComponent;