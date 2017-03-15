var styles = {
    marginTop: {
        marginTop: '20px'
    },
    cursor: {
        cursor: 'pointer'
    },
};

var ResultsDistrictsComponent = React.createClass( {

    render: function() {
        var timeCount = function( district ) {
            var votedSingleDate = new Date( district.votedSingleTime );
            var year = votedSingleDate.getFullYear();
            var month = votedSingleDate.getMonth() + 1;
            var date = votedSingleDate.getDate();
            if ( votedSingleDate.getHours() < 10 ) {
                var hour = "0" + votedSingleDate.getHours();
            } else {
                var hour = votedSingleDate.getHours();
            }
            var minutes = "0" + votedSingleDate.getMinutes();
            var seconds = "0" + votedSingleDate.getSeconds();
            if ( month < 10 ) {
                month = '0' + month;
            }
            if ( date < 10 ) {
                date = '0' + date;
            }
            var singleDate = year + '-' + month + '-' + date + "    " + hour + ':' + minutes.substr( -2 ) + ':' + seconds.substr( -2 );

            var votedMultiDate = new Date( district.votedMultiTime );
            var year = votedMultiDate.getFullYear();
            var month = votedMultiDate.getMonth() + 1;
            var date = votedMultiDate.getDate();
            if ( votedMultiDate.getHours() < 10 ) {
                var hour = "0" + votedMultiDate.getHours();
            } else {
                var hour = votedMultiDate.getHours();
            }
            var minutes = "0" + votedMultiDate.getMinutes();
            var seconds = "0" + votedMultiDate.getSeconds();
            if ( month < 10 ) {
                month = '0' + month;
            }
            if ( date < 10 ) {
                date = '0' + date;
            }
            var multiDate = year + '-' + month + '-' + date + " " + hour + ':' + minutes.substr( -2 ) + ':' + seconds.substr( -2 );
            return { "singleDate": singleDate, "multiDate": multiDate };
        }.bind( this );

        var progress = function() {
            var submittedDistrict = 0;
            this.props.districts.map( function( district, index ) {
                if ( district.multiVoteActive && district.singleVoteActive ) {
                    submittedDistrict += 1;
                }
            }.bind( this ) )
            return submittedDistrict;
        }.bind( this );

        var districtsList = this.props.districts.map( function( district, index ) {
            var timeCounter = timeCount( district );
            return (
                <tr key={index}>
                    <td className="col-md-">{district.id}</td>
                    <td className="col-md-3">{district.title}</td>
                    <td className="col-md-3">{timeCounter.singleDate}</td>
                    <td className="col-md-2">{timeCounter.multiDate}</td>
                    <td className="col-md-1">
                        <button id={"ResultsDistrictsInfo" + district.id} type="button" className="btn btn-info"
                            onClick={this.props.onResultsDistrictsInfoClick( district )}
                            data-toggle="tooltip" data-placement="top" title="Apylinkės rezultatai"
                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"
                            >
                            Apylinkės rez.
                        </button>
                    </td>
                    <td className="col-md-1">
                        <button id={"ResultsDistrictsMulti" + district.id} type="button" className="btn btn-warning"
                            onClick={this.props.onResultsDistrictsMultiClick( district )}
                            data-toggle="tooltip" data-placement="top" title="Daugiamandatės rezultatai"
                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"
                            >
                            Partijų rez.
                        </button>
                    </td>
                    <td className="col-md-1">
                        <button id={"ResultsDistrictsSingle" + district.id} type="button" className="btn btn-danger"
                            onClick={this.props.onResultsDistrictsSingleClick( district )}
                            data-toggle="tooltip" data-placement="top" title="Vienmandatės rezultatai"
                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne"
                            >
                            Kandidatų rez.
                        </button>
                    </td>
                </tr>
            );
        }.bind( this ) );

        var districtSubmitted = progress();
        var submittedPercentage = Math.round( districtSubmitted / this.props.districts.length * 100 ) + "%";
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
                <div className="panel panel-default" style={styles.marginTop}>
                    <table id="Results_Districts_Table" className="table table-striped">
                        <thead>
                            <tr style={styles.cursor} onClick={( event ) => {
                                $( "#Results_Districts_Table" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
                            } }>
                                <th>Nr.</th>
                                <th>Apylinkės</th>
                                <th>Vienmandatės duomenų laikas</th>
                                <th>Daugiamandatės duomenų laikas</th>
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
                <button id="ResultsDistrictsReturn"
                    className="btn btn-success"
                    style={{ marginRight: '20px' }}
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