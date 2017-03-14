var ResultsDistrictsComponent = React.createClass({

    render: function () {
        var progress = function () {
            var submittedDistrict = 0;
            this.props.districts.map(function (district, index){
                if(district.multiVoteActive && district.singleVoteActive){
                    submittedDistrict += 1;
                }
            }.bind(this))
            return submittedDistrict;
        }.bind(this);

        var districtsList = this.props.districts.map(function (district, index) {
            return (
                <tr key={index}>
                    <td className="col-md-1">{district.id}</td>
                    <td className="col-md-3">{district.title}</td>
                    <td className="col-md-2">
                        <button id={"ResultsDistrictsInfo"+district.id} type="button" className="btn btn-info"
                                onClick={this.props.onResultsDistrictsInfoClick(district)}
                                data-toggle="tooltip" data-placement="top" title="Apylinkės rezultatai"
                                data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne"
                        >
                            Balsavimas apylinkėje
                        </button>
                    </td>
                    <td className="col-md-2">
                        <button id={"ResultsDistrictsMulti"+district.id} type="button" className="btn btn-warning"
                                onClick={this.props.onResultsDistrictsMultiClick(district)}
                                data-toggle="tooltip" data-placement="top" title="Daugiamandatės rezultatai"
                                data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne"
                        >
                            Partijų rezultatai
                        </button>
                    </td>
                    <td className="col-md-2">
                        <button id={"ResultsDistrictsSingle"+district.id} type="button" className="btn btn-danger"
                                onClick={this.props.onResultsDistrictsSingleClick(district)}
                                data-toggle="tooltip" data-placement="top" title="Vienmandatės rezultatai"
                                data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne"
                        >
                            Kandidatų rezultatai
                        </button>
                    </td>
                </tr>
            );
        }.bind(this));

        var districtSubmitted = progress();
        var submittedPercentage = Math.round(districtSubmitted / this.props.districts.length * 100) + "%";
        return (
            <div className="">
                <div className="panel panel-default">
                    <div className="panel-heading"> <h4>Jau užregistruotos apylinkės: {districtSubmitted} / {this.props.districts.length}</h4></div>
                    <div className="panel-body ">
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped active" role="progressbar"
                         aria-valuenow={districtSubmitted} aria-valuemin="0" aria-valuemax="100" style={{ width: submittedPercentage }}>
                         {submittedPercentage}
                    </div>
                    </div>
                </div>
                </div>
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
                <button id="ResultsDistrictsReturn"
                        className="btn btn-success"
                        style={{marginRight: '20px'}}
                        onClick={this.props.onReturnConstituenciesClick}
                >
                    Grįžti
                </button>
            </div>
        )
    }
});

ResultsDistrictsComponent.propTypes = {
    districts: React.PropTypes.array.isRequired
};

window.ResultsDistrictsComponent = ResultsDistrictsComponent;