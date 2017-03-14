var ResultsConstituenciesSingleComponent = React.createClass({

    render: function () {
        var votesCount = function(candidate){
            var votesCount = 0;
            var totalVotes = 0;
            var corruptedVotes = 0;
            this.props.constituency.districts.map(function(district, distIndex){
                district.single_results.map(function (vote, index) {
                    if (vote.candidates_id == candidate.id){
                        votesCount += vote.vote;
                    }
                }.bind(this))

                totalVotes += district.votedSingle;
                corruptedVotes += district.votedSingleCorrupt;
            }.bind(this))
            return {"votesCount": votesCount, "totalVotes": totalVotes, "corruptedVotes": corruptedVotes};
        }.bind(this);

        var candidatesList = this.props.candidatesList.map(function (candidate, index) {
            var votesCounter = votesCount(candidate);
            return (
                <tr key={index}>
                    <td className="col-md-5">{candidate.name + ' ' + candidate.last_name}</td>
                    <td className="col-md-1">{candidate.party_id != null ? this.props.parties[candidate.party_id].party_Code : "Išsikėlęs pats"}</td>
                    <td className="col-md-2">{votesCounter["votesCount"]}</td>
                    <td className="col-md-2">{Math.round((votesCounter.votesCount / votesCounter.totalVotes * 100) * 100) / 100}%</td>
                    <td className="col-md-2">{Math.round((votesCounter.votesCount / (votesCounter.totalVotes - votesCounter.corruptedVotes) * 100) * 100) / 100}%</td>
                </tr>
            );
        }.bind(this));

        return (
            <div className="">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Kandidatas</th>
                        <th>Partija</th>
                        <th>Surinkta balsų</th>
                        <th>% nuo visų balsų</th>
                        <th>% nuo galiojančių</th>
                    </tr>
                    </thead>
                    <tbody>
                    {candidatesList}
                    </tbody>
                </table>
                <button id="ResultsConstituenciesSingleReturn"
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

ResultsConstituenciesSingleComponent.propTypes = {
    constituency: React.PropTypes.object.isRequired,
    candidatesList: React.PropTypes.array.isRequired
};

window.ResultsConstituenciesSingleComponent = ResultsConstituenciesSingleComponent;