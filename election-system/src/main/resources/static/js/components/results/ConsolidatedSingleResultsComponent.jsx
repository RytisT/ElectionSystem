var styles = {
    cursor: {
        cursor: 'pointer'
    },
};

var ConsolidatedSingleResultsComponent = React.createClass( {

    render: function() {
        var votesCount = function( candidate ) {
            var votesCount = 0;
            var totalVotes = 0;
            var corruptedVotes = 0;

            this.props.constituencies[candidate.constituency_id].districts.map( function( district, index ) {
                district.single_results.map( function( vote, index ) {
                    if ( vote.candidates_id == candidate.id ) {
                        votesCount += vote.vote;
                    }
                }.bind( this ) )

                totalVotes += district.votedSingle;
                corruptedVotes += district.votedSingleCorrupt;
            }.bind( this ) )

            return { "votesCount": votesCount, "totalVotes": totalVotes, "corruptedVotes": corruptedVotes };
        }.bind( this );

        var candidatesList = this.props.candidatesList.map( function( candidate, index ) {
            var votesCounter = votesCount( candidate );
            return (
                <tr key={index}>
                    <td className="col-md-5">{candidate.name + ' ' + candidate.last_name}</td>
                    <td className="col-md-1">{candidate.party_id != null ? this.props.parties[candidate.party_id].party_Code : "Išsikėlęs pats"}</td>
                    <td className="col-md-2">{candidate.constituency_id != null ? this.props.constituencies[candidate.constituency_id].title : "Kraunama"}</td>
                    <td className="col-md-2">{votesCounter.votesCount}</td>
                    <td className="col-md-2">{Math.round(( votesCounter.votesCount / ( votesCounter.totalVotes ) * 100 ) * 100 ) / 100} %</td>
                </tr>
            );
        }.bind( this ) );

        return (
            <div className="">
                <table id="Consolidate_Single_Results" className="table table-striped">
                    <thead>
                        <tr style={styles.cursor} onClick={( event ) => {
                            $( "#Consolidate_Single_Results" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
                        } }>
                            <th>Kandidatas</th>
                            <th>Partija</th>
                            <th>Laimėta apygarda</th>
                            <th>Surinkta balsų</th>
                            <th>% nuo visų balsų</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidatesList}
                    </tbody>
                </table>
            </div>
        )
    }
});


window.ConsolidatedSingleResultsComponent = ConsolidatedSingleResultsComponent;