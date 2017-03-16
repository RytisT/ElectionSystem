var ConsolidatedResultsComponent = React.createClass({

    render: function () {


        var candidatesList = this.props.candidatesList.map(function (candidate, index) {
            console.log(candidate.name)

            return (
                <tr key={index}>
                    <td className="col-md-4">{candidate.last_name + ' ' + candidate.name}</td>
                    <td className="col-md-8">{candidate.party_id != null ? this.props.parties[candidate.party_id].title : "Išsikėlęs pats"}</td>
                </tr>
            );
        }.bind(this));

        var votesCount = function(party){
            var votesCount = 0;
            var totalVotes = 0;

            party.multi_results.map(function (result, index) {
                votesCount += result.m_votes;
            }.bind(this));

            this.props.constituencies.map(function (constit, index) {
                constit.districts.map(function(district, index){
                    totalVotes += district.votedMulti;
                }.bind(this))
            }.bind(this));

            return {"votesCount": votesCount, "totalVotes": totalVotes};
        }.bind(this);

        var partiesList = this.props.partiesElected.map(function (party, index) {
            console.log(party);
            var votesCounter = votesCount(party);

            return (
                <tr key={index}>
                    <td className="col-md-1">{index + 1}</td>
                    <td className="col-md-5">{party.title}</td>
                    <td className="col-md-2">{votesCounter["votesCount"]}</td>
                    <td className="col-md-2">{Math.round((votesCounter.votesCount / (votesCounter.totalVotes ) * 100) * 100) / 100}%</td>
                    <td className="col-md-2">{party.mandates}</td>
                </tr>
            );
        }.bind(this));

        return (
            <div className="">
                <div className="jumbotron">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Nr.</th>
                            <th>Partija</th>
                            <th>Laimėtų balsų skaičius</th>
                            <th>% nuo visų</th>
                            <th>Laimėti mandatai</th>
                        </tr>
                        </thead>
                        <tbody>
                        {partiesList}
                        </tbody>
                    </table>
                </div>
                <div className="jumbotron">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Kandidatas</th>
                        <th>Partija</th>
                    </tr>
                    </thead>
                    <tbody>
                    {candidatesList}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
});


window.ConsolidatedResultsComponent = ConsolidatedResultsComponent;