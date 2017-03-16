var styles = {
    marginTop: {
        marginTop: '20px'
    },
    cursor: {
        cursor: 'pointer'
    },
};

var ResultsConstituenciesComponent = React.createClass( {


    render: function() {
        var constituenciesList = this.props.constituencies.map( function( constituency, index ) {
            return (
                <tr key={index}>
                    <td className="col-md-1">{constituency.id}</td>
                    <td className="col-md-3">{constituency.title}</td>
                    <td className="col-md-2">
                        <button id={"ResultsConstituenciesInfo" + constituency.id} type="button" className="btn btn-info"
                            onClick={this.props.onResultsConstituenciesInfoClick( constituency )}
                            data-toggle="tooltip" data-placement="top" title="Apygardos rezultatai"
                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"
                            >
                            Balsavimas apygardoje
                        </button>
                    </td>
                    <td className="col-md-2">
                        <button id={"ResultsDistricts" + constituency.id} type="button" className="btn btn-success"
                            onClick={this.props.onResultsDistrictsClick( constituency )}
                            data-toggle="tooltip" data-placement="top" title="Apylinkės"
                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"
                            >
                            Apylinkių rezultatai
                        </button>
                    </td>
                    <td className="col-md-2">
                        <button id={"ResultsConstituenciesMulti" + constituency.id} type="button" className="btn btn-warning"
                            onClick={this.props.onResultsConstituenciesMultiClick( constituency )}
                            data-toggle="tooltip" data-placement="top" title="Daugiamandatės rezultatai"
                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"
                            >
                            Partijų rezultatai
                        </button>
                    </td>
                    <td className="col-md-2">
                        <button id={"ResultsConstituenciesSingle" + constituency.id} type="button" className="btn btn-danger"
                            onClick={this.props.onResultsConstituenciesSingleClick( constituency )}
                            data-toggle="tooltip" data-placement="top" title="Vienmandatės rezultatai"
                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"
                            >
                            Kandidatų rezultatai
                        </button>
                    </td>
                </tr>
            );
        }.bind( this ) );

        var progress = function() {
            var submittedDistricts = 0;
            var totalDistricts = 0;
            this.props.constituencies.map( function( constituency, index ) {
                constituency.districts.map( function( district, index ) {
                    if ( district.multiVoteActive && district.singleVoteActive ) {
                        submittedDistricts += 1;
                    }
                }.bind( this ) )
                totalDistricts += constituency.districts.length;
            }.bind( this ) )
            return { "submittedDistricts": submittedDistricts, "totalDistricts": totalDistricts };
        }.bind( this );


        var districtSubmitted = progress();
        var submittedPercentage = Math.floor( districtSubmitted["submittedDistricts"] / districtSubmitted["totalDistricts"] * 100 ) + "%";

        return (
            <div className="">
                <div className="panel panel-default">
                    <div className="panel-heading"> <h4>Jau užregistruotos apylinkės: {districtSubmitted["submittedDistricts"]} / {districtSubmitted["totalDistricts"]}</h4></div>
                    <div className="panel-body ">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" role="progressbar"
                                aria-valuenow={districtSubmitted} aria-valuemin="0" aria-valuemax="100" style={{ width: submittedPercentage }}>
                                {submittedPercentage}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default" style={styles.marginTop}>
                    <table id="Results_Cons_Table" className="table table-striped">
                        <thead>
                                <tr style={styles.cursor} onClick={( event ) => {
                                    $( "#Results_Cons_Table" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
                                } }>
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
            </div>
        )
    }
});

ResultsConstituenciesComponent.propTypes = {
    constituencies: React.PropTypes.array.isRequired
};

window.ResultsConstituenciesComponent = ResultsConstituenciesComponent;