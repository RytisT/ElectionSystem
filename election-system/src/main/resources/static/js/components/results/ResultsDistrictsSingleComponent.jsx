var ResultsDistrictsSingleComponent = React.createClass({

    render: function () {
        var candidatesList = this.props.candidatesList.map(function (candidate, index) {
            return (
                <tr key={index}>
                    <td className="col-md-5">{candidate.name + ' ' + candidate.last_name}</td>
                    <td className="col-md-1">{candidate.party_id != null ? this.props.parties[candidate.party_id].party_Code : "Išsikėlęs pats"}</td>
                    <td className="col-md-2">{this.props.district.single_results[index].vote}</td>
                    <td className="col-md-2">{Math.round((this.props.district.single_results[index].vote / this.props.district.votedSingle * 100) * 100) / 100}</td>
                    <td className="col-md-2">{Math.round((this.props.district.single_results[index].vote / (this.props.district.votedSingle - this.props.district.votedSingleCorrupt) * 100) * 100) / 100}</td>
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
                <button id="ResultsDistrictsSingleReturn"
                        className="btn btn-success"
                        style={{marginRight: '20px'}}
                        onClick={this.props.onReturnDistrictsClick}
                >
                    Grįžti
                </button>
            </div>
        )
    }
});

ResultsDistrictsSingleComponent.propTypes = {
    district: React.PropTypes.object.isRequired,
};

window.ResultsDistrictsSingleComponent = ResultsDistrictsSingleComponent;