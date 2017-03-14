var ResultsConstituenciesMultiComponent = React.createClass({

    render: function () {
        var partiesList = this.props.partiesList.map(function (party, index) {
            return (
                <tr key={index}>
                    <td className="col-md-1">{party.id}</td>
                    <td className="col-md-5">{party.title}</td>
                    <td className="col-md-2">{party.numberOfVotes}</td>
                    <td className="col-md-2">{Math.round(party.numberOfVotes / (this.props.constituency.votedMulti + this.props.constituency.votedMultiCorrupt) * 10000) / 100 + '%'}</td>
                    <td className="col-md-2">{Math.round(party.numberOfVotes / this.props.constituency.votedMulti * 10000) / 100 + '%'}</td>
                </tr>
            );
        }.bind(this));

        return (
            <div className="">
                <table className="table table-striped">
                    <thead>
                    <tr>
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
                <button id="ResultsConstituenciesMultiReturn"
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

ResultsConstituenciesMultiComponent.propTypes = {
    constituency: React.PropTypes.object.isRequired,
    partiesList: React.PropTypes.object.isRequired
};

window.ResultsConstituenciesMultiComponent = ResultsConstituenciesMultiComponent;