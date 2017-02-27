var PartiesComponent = React.createClass({
    render: function () {
        var partiesList = this.props.parties.map(function (party, index) {
            return (
                <SinglePartyContainer party={party}
                                      key={index}
                                      onDeleteParty={this.props.onDeleteParty}
                                      onCandidates={this.props.onCandidates}
                />
            );
        }.bind(this));

        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th className="col-md-1">Partijos numeris</th>
                        <th className="col-md-1">Partijos trumpinys</th>
                        <th className="col-md-5">Partijos pavadinimas</th>
                        <th className="col-md-2">Kandidatai</th>
                        <th className="col-md-2">Redaguoti</th>
                        <th className="col-md-1">Trinti</th>

                    </tr>
                    </thead>
                    <tbody>
                    {partiesList}
                    </tbody>
                </table>
            </div>

        )
    }
});


window.PartiesComponent = PartiesComponent;