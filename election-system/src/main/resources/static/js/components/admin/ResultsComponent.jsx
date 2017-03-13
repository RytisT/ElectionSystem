var ResultsComponent = React.createClass( {


    resultsList: function () {
        return this.props.districts.map(function (district, index) {
                if (district.title.toLowerCase().includes(this.props.searchQuery.toLowerCase()) || district.district_representatives.name.toLowerCase().includes(this.props.searchQuery.toLowerCase()) || district.district_representatives.last_name.toLowerCase().includes(this.props.searchQuery.toLowerCase()))  return (
                    <SingleResultComponent district = {district}
                                           key = {index}
                                           />
                )
        }.bind(this))
    },

    render: function() {
        return(
            <div className="">
                <div className="panel panel-default">
                    <div className="panel-heading"><label htmlFor="basic-url">Ieškoti rezultatų: </label></div>
                    <div className=" panel-body input-group">
                        <span className="input-group-addon" id="basic-addon3">Apylinkės pavadinimas: </span>
                        <input type="text" className="form-control" id="SearchByTitle" onChange={this.props.onSearchQueryChange(this.props.searchQuery)}/>
                    </div>
                    <div id="ResultsSearchValidation" className="validationForm"><span>Naudojami netinkami simboliai.</span></div>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Apylinkė</th>
                        <th>Apylinkės atstovas</th>
                        <th>Vienmandatės apygardos rezultatų registravimo laikas</th>
                        <th>Daugiamandate apygardos rezultatų registravimo laikas</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.resultsList()}
                    </tbody>

                </table>
                <button id="Return" className="btn btn-success" style={{ marginRight: '20px' }}
                        onClick={this.props.onReturn}>Grįžti
                </button>
            </div>
        )
    }
});

window.ResultsComponent = ResultsComponent;