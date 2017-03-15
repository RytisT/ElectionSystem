var styles = {
    menu: {
        margin: '20 0 0 5',
        fontSize: '20px'
    },
    space: {
        margin: '0 20 0 0'
    },
    marginTop: {
        marginTop: '20px'
    },
    cursor: {
        cursor: 'pointer'
    },
    line: {
        borderBottom: '1px solid #888',
        margin: '20 0 20 0'
    },
    blue: {
        color: '#0080ff'
    },
    width: {
        width: '20px'
    }
};

var SingleVotesComponent = React.createClass( {

    render: function() {
        var candidatesList = this.props.SingleCandidates.map( function( candidate, index ) {

            return (
                <tr id="candidateList" key={index}>
                    <td></td>
                    <td>{candidate.name}</td>
                    <td>{candidate.last_name}</td>
                    <td>
                        <input
                            className="form-control"
                            placeholder="Įveskite surinktų balsų skaičių"
                            value={this.props.votes[candidate.id].vote}
                            onChange={this.props.onVotesChange( candidate.id )}
                            type="text"
                            />
                    </td>
                </tr>
            );
        }.bind( this ) );

        return !this.props.district.singleVoteActive
            ? <div className="">
                <h2 style={styles.blue}> Vienmandatininkų rezultatų suvedimas </h2>
                <div style={styles.line}></div>
                <div className="panel panel-default" style={styles.marginTop} id="Table">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th id="RowNumber">Eil.Nr.</th>
                                <th>VARDAS</th>
                                <th>PAVARDĖ</th>
                                <th>SURINKTI BALSAI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidatesList}
                        </tbody>
                    </table>
                    <table className="table table-striped">
                        <thead>
                            <tr></tr>
                            <tr>
                                <th>Sugadinta vienmandatės biuletenių:</th>
                                <td>
                                    <input
                                        className="form-control"
                                        placeholder="Įveskite sugadintų biuletenių skaičių"
                                        type="text"
                                        value={this.props.district.votedSingleCorrupt ? this.props.district.votedSingleCorrupt : ""}
                                        onChange={this.props.onTotalVotesChange( "votedSingleCorrupt" )}
                                        />
                                </td>
                            </tr>
                            <tr>
                                <th>Išduota vienmandatės biuletenių:</th>
                                <td>
                                    <input
                                        id="DistrictVotedSingle"
                                        className="form-control"
                                        placeholder="Įveskite atėjusių balsuoti rinkėjų skaičių"
                                        type="text"
                                        value={this.props.district.votedSingle ? this.props.district.votedSingle : ""}
                                        onChange={this.props.onTotalVotesChange( "votedSingle" )}
                                        />
                                </td>
                            </tr>
                        </thead>
                    </table>
                    <div id="SinglResultValidation" className="validationForm"><span>Balsų ir sugadintų biuletenių suma neatitinka išduotų biuletenių skaičiaus.</span></div>
                    <button className="btn btn-block btn-success" type="submit" onClick={this.props.onSubmit( event )}>
                        Patvirtinti kandidatų surinktus balsus ir biuletenių skaičių
                    </button>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
            : <div className="alert alert-success" role="alert">Vienmandatininkų rezultatai užregistruoti sėkmingai!</div>
    }
});

window.SingleVotesComponent = SingleVotesComponent;