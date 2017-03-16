var styles = {
    marginTop: {
        marginTop: '20px'
    },
    cursor: {
        cursor: 'pointer'
    },
};

var ResultsDistrictsMultiComponent = React.createClass( {

    render: function() {

        var partiesList = this.props.parties.map( function( party, index ) {
            return (
                <tr key={index}>
                    <td className="col-md-1">{party.id}</td>
                    <td className="col-md-5">{party.title}</td>
                    <td className="col-md-2">{this.props.district.multi_results[index].m_votes}</td>
                    <td className="col-md-2">{Math.round(( this.props.district.multi_results[index].m_votes / this.props.district.votedMulti * 100 ) * 100 ) / 100} %</td>
                    <td className="col-md-2">{Math.round(( this.props.district.multi_results[index].m_votes / ( this.props.district.votedMulti - this.props.district.votedMultiCorrupt ) * 100 ) * 100 ) / 100} %</td>

                </tr>
            );
        }.bind( this ) );

        return (
            <div className="">

                <button id="export_ResultsDistrictMulti" className="btn btn-info" data-export="export" onClick={( event ) => {
                    $( "#ResultsDistrictMulti" ).tableToCSV();
                } }>Atsisiųsti CSV failą</button>

                <div className="panel panel-default" style={styles.marginTop}>
                    <table id="ResultsDistrictMulti" className="table table-striped">
                        <thead>
                            <tr style={styles.cursor} onClick={( event ) => {
                                $( "#ResultsDistrictMulti" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
                            } }>
                                <th>Nr.</th>
                                <th>Partija</th>
                                <th>Surinkta balsų</th>
                                <th>% nuo visų balsų</th>
                                <th>% nuo galiojančių</th>
                            </tr>
                        </thead>
                        <tbody>
                            {partiesList}
                        </tbody>
                    </table>
                </div>
                <button id="ResultsDistrictsMultiReturn"
                    className="btn btn-success"
                    style={{ marginRight: '20px' }}
                    onClick={this.props.onReturnDistrictsClick}
                    >
                    Grįžti
                </button>
            </div>
        )
    }
});

ResultsDistrictsMultiComponent.propTypes = {
    district: React.PropTypes.object.isRequired,
};

window.ResultsDistrictsMultiComponent = ResultsDistrictsMultiComponent;