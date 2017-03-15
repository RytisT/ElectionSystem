var styles = {
    marginTop: {
        marginTop: '20px'
    },
};

var Link = ReactRouter.Link;

var ConstituenciesComponent = React.createClass( {


    render: function() {
        var constituenciesList = this.props.constituencies.map( function( constituency, index ) {
            if ( constituency.title.toLowerCase().includes( this.props.searchQuery.toLowerCase() ) ) {
                return (
                    <SingleConstituencyContainer constituency={constituency}
                        key={index}
                        onEditDistrict={this.props.onEditDistrict}
                        onDeleteConst={this.props.onDeleteConst}
                        onFieldChange={this.props.onFieldChange}
                        onCandidates={this.props.onCandidates} />
                );
            }
        }.bind( this ) );


        return (
            <div className="">
                <div className="panel panel-default">
                    <div className=" panel-body input-group">
                        <span className="input-group-addon" id="basic-addon3">Apygardos paieška: </span>
                        <input type="text" className="form-control" id="SearchByTitle" placeholder="Įveskite apygardos pavadinimą" maxLength="35"
                            onChange={this.props.onSearchQueryChange( this.props.searchQuery )} />
                    </div>
                    <div id="DistrictSearchValidation" className="validationForm"><span>Naudojami netinkami simboliai.</span></div>
                </div>

                <div id="successAddConstituencyValidation" className="alert alert-success" role="alert"><span>Apygarda pridėta sėkmingai.</span></div>

                <div className="panel panel-default" style={styles.marginTop}>
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
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
});

//<div className="panel-heading"><label htmlFor="basic-url">Ieškoti apylinkės: </label></div>

ConstituenciesComponent.propTypes = {
    constituencies: React.PropTypes.array.isRequired
};

window.ConstituenciesComponent = ConstituenciesComponent;