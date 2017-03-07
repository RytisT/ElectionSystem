var Link = ReactRouter.Link;


var ConstituenciesComponent = React.createClass({


    render: function () {
        var constituenciesList = this.props.constituencies.map(function (constituency, index) {
            if(constituency.title.toLowerCase().includes(this.props.searchQuery.toLowerCase())) {
                return (
                    <SingleConstituencyContainer constituency={constituency}
                                                 key={index}
                                                 onEditDistrict={this.props.onEditDistrict}
                                                 onDeleteConst={this.props.onDeleteConst}
                                                 onFieldChange={this.props.onFieldChange}
                                                 onCandidates={this.props.onCandidates}/>
                );
            }
        }.bind(this));


        return (
            <div className="">
                <div className="panel panel-default">
                    <div className="panel-heading"><label htmlFor="basic-url">Ieškoti apylinkės: </label></div>
                    <div className=" panel-body input-group">
                        <span className="input-group-addon" id="basic-addon3">Apylinkės pavadinimas: </span>
                        <input type="text" className="form-control" id="SearchByTitle" onChange={this.props.onSearchQueryChange(this.props.searchQuery)}/>
                    </div>
                    <div id="DistrictSearchValidation" className="validationForm"><span>Naudojami netinkami simboliai.</span></div>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Apygarda</th>
                        <th>Apylinkės</th>
                        <th>Kandidatai</th>
                        <th>Redaguoti</th>
                        <th>Trinti</th>
                    </tr>
                    </thead>
                    <tbody>
                    {constituenciesList}
                    <tr>
                        <td>

                        </td>
                        <td></td>
                    </tr>
                    </tbody>

                </table>
            </div>

        )
    }
});

ConstituenciesComponent.propTypes = {
    constituencies: React.PropTypes.array.isRequired
};

window.ConstituenciesComponent = ConstituenciesComponent;