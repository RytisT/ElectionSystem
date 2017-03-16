var styles = {
    marginTop: {
        marginTop: '20px'
    },
    cursor: {
        cursor: 'pointer'
    },
};

var ResultsConstituenciesMultiComponent = React.createClass( {

    render: function() {

        var votesCount = function( party ) {
            var votesCount = 0;
            var totalVotes = 0;
            var corruptedVotes = 0;
            this.props.constituency.districts.map( function( district, distIndex ) {
                district.multi_results.map( function( vote, index ) {
                    if ( vote.party_id == party.id ) {
                        votesCount += vote.m_votes;
                    }
                }.bind( this ) );

                totalVotes += district.votedMulti;
                corruptedVotes += district.votedMultiCorrupt;
            }.bind( this ) );
            return { "votesCount": votesCount, "totalVotes": totalVotes, "corruptedVotes": corruptedVotes };
        }.bind( this );

        var partiesList = this.props.partiesList.map( function( party, index ) {
            var votesCounter = votesCount( party );
            console.log( votesCounter );
            return (
                <tr key={index}>
                    <td className="col-md-1">{party.id}</td>
                    <td className="col-md-5">{party.title}</td>
                    <td className="col-md-2">{votesCounter.votesCount}</td>
                    <td className="col-md-2">{Math.round(( votesCounter.votesCount / votesCounter.totalVotes * 100 ) * 100 ) / 100} %</td>
                    <td className="col-md-2">{Math.round(( votesCounter.votesCount / ( votesCounter.totalVotes - votesCounter.corruptedVotes ) * 100 ) * 100 ) / 100} %</td>
                </tr>
            );
        }.bind( this ) );

        return (
            <div className="">

                <button id="export_ConsMulti" className="btn btn-info" data-export="export" onClick={( event ) => {
                    $( "#ResultsConsMulti" ).tableToCSV();
                } }>Atsisiųsti CSV failą</button>

                <div className="panel panel-default" style={styles.marginTop}>
                    <table id="ResultsConsMulti" className="table table-striped">
                        <thead>
                            <tr style={styles.cursor} onClick={( event ) => {
                                $( "#ResultsConsMulti" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
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
                <button id="ResultsConstituenciesMultiReturn"
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

ResultsConstituenciesMultiComponent.propTypes = {
    constituency: React.PropTypes.object.isRequired,
};

window.ResultsConstituenciesMultiComponent = ResultsConstituenciesMultiComponent;