var ResultsConstituenciesSingleComponent = React.createClass({

    render: function () {
        var candidatesList = this.props.candidatesList.map(function (candidate, index) {
            return (
                <tr key={index}>
                    <td className="col-md-5">{candidate.name + ' ' + candidate.last_name}</td>
                    <td className="col-md-1">{candidate.party}</td>
                    <td className="col-md-2">{candidate.numberOfVotes}</td>
                    <td className="col-md-2">{Math.round(candidate.numberOfVotes / (this.props.constituency.votedSingle + this.props.constituency.votedSingleCorrupt) * 10000) / 100 + '%'}</td>
                    <td className="col-md-2">{Math.round(candidate.numberOfVotes / this.props.constituency.votedSingle * 10000) / 100 + '%'}</td>
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
    candidatesList: React.PropTypes.object.isRequired
};

window.ResultsConstituenciesSingleComponent = ResultsConstituenciesSingleComponent;