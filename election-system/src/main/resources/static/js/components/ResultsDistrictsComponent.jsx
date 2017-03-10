var Link = ReactRouter.Link;


var ResultsDistrictsComponent = React.createClass({


    render: function () {
        var districtsList = this.props.districts.map(function (district, index) {
            return (
                <tr key={index}>
                    <td className="col-md-1">{district.id}</td>
                    <td className="col-md-3">{district.title}</td>
                    <td className="col-md-2">
                        <button id={"ResultsDistrictInfo"+district.id} type="button" className="btn btn-info"
                                onClick={this.props.onResultsDistrictsInfoClick(district)}
                                data-toggle="tooltip" data-placement="top" title="Apylinkės rezultatai"
                                data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne"
                        >
                            Balsavimas apylinkėje
                        </button>
                    </td>
                    <td className="col-md-2">
                        <button id="ResultsDistrictMultiple" type="button" className="btn btn-warning">
                            Partijų rezultatai
                        </button>
                    </td>
                    <td className="col-md-2">
                        <button id="ResultsDistrictSingle" type="button" className="btn btn-danger">
                            Kandidatų rezultatai
                        </button>
                    </td>
                </tr>
            );
        }.bind(this));


        return (
            <div className="">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Nr.</th>
                        <th>Apylinkės</th>
                        <th>Rezultatai</th>
                        <th>Daugiamandatė</th>
                        <th>Vienmandatė</th>
                    </tr>
                    </thead>
                    <tbody>
                    {districtsList}
                    </tbody>
                </table>
            </div>
        )
    }
});

ResultsDistrictsComponent.propTypes = {
    districts: React.PropTypes.array.isRequired
};

window.ResultsDistrictsComponent = ResultsDistrictsComponent;