var Link = ReactRouter.Link;


var ResultsConstituenciesComponent = React.createClass({


    render: function () {
        var constituenciesList = this.props.constituencies.map(function (constituency, index) {
            return (
                <tr key={index}>
                    <td className="col-md-1">{constituency.id}</td>
                    <td className="col-md-3">{constituency.title}</td>
                    <td className="col-md-2">
                        <button id={"ResultsConstituencyInfo"+constituency.id} type="button" className="btn btn-info"
                                onClick={this.props.onResultsConstituenciesInfoClick(constituency)}
                                data-toggle="tooltip" data-placement="top" title="Apygardos rezultatai"
                                data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne"
                        >
                            Balsavimas apygardoje
                        </button>
                    </td>
                    <td className="col-md-2">
                        <button id={"ResultsDistricts"+constituency.id} type="button" className="btn btn-success"
                                onClick={this.props.onResultsDistrictsClick(constituency)}
                                data-toggle="tooltip" data-placement="top" title="Apylinkės"
                                data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne"
                        >
                            Apylinkių rezultatai
                        </button>
                    </td>
                    <td className="col-md-2">
                        <button id="ResultsConstituencyMultiple" type="button" className="btn btn-warning">
                            Partijų rezultatai
                        </button>
                    </td>
                    <td className="col-md-2">
                        <button id="ResultsConstituencySingle" type="button" className="btn btn-danger">
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
                        <th>Apygardos</th>
                        <th>Rezultatai</th>
                        <th>Apylinkės</th>
                        <th>Daugiamandatė</th>
                        <th>Vienmandatė</th>
                    </tr>
                    </thead>
                    <tbody>
                    {constituenciesList}
                    </tbody>
                </table>
            </div>
        )
    }
});

ResultsConstituenciesComponent.propTypes = {
    constituencies: React.PropTypes.array.isRequired
};

window.ResultsConstituenciesComponent = ResultsConstituenciesComponent;