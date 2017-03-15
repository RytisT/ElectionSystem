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

var MultiVotesComponent = React.createClass( {

    propTypes: {
        parties: React.PropTypes.array.isRequired,
        votes: React.PropTypes.array.isRequired
    },


    render: function() {
        var partiesList = this.props.parties.map( function( party, index ) {


            return (
                <tr id="partiesList" key={index}>
                    <td></td>
                    <td>{party.party_Code}</td>
                    <td>{party.title}</td>
                    <td>
                        <input
                            className="form-control"
                            placeholder="Įveskite surinktų balsų skaičių"
                            value={this.props.votes[party.id].m_votes}
                            onChange={this.props.onVotesChange( party.id )}
                            type="text"
                            />
                    </td>
                </tr>
            );
        }.bind( this ) );
        return !this.props.district.multiVoteActive
            ? <div className="">
                <h2 style={styles.blue}> Daugiamandatininkų rezultatų suvedimas </h2>
                <div style={styles.line}></div>
                <div className="panel panel-default" style={styles.marginTop} id="Table">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th id="RowNumber">Eil.Nr.</th>
                                <th>TRUMPINYS</th>
                                <th >PARTIJA</th>
                                <th>SURINKTI BALSAI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {partiesList}
                        </tbody>
                    </table>
                    <table className="table table-striped">
                        <thead>
                            <tr></tr>
                            <tr>
                                <th>Sugadinta daugiamandatės biuletenių:</th>
                                <td>
                                    <input
                                        className="form-control"
                                        placeholder="Įveskite sugadintų biuletenių skaičių"
                                        type="text"
                                        value={this.props.district.votedMultiCorrupt ? this.props.district.votedMultiCorrupt : ""}
                                        onChange={this.props.onTotalVotesChange( "votedMultiCorrupt" )}
                                        />
                                </td>
                            </tr>
                            <tr>
                                <th>Išduota daugiamandatės biuletenių:</th>
                                <td>
                                    <input
                                        className="form-control"
                                        placeholder="Įveskite atėjusių balsuoti rinkėjų skaičių"
                                        type="text"
                                        value={this.props.district.votedMulti ? this.props.district.votedMulti : ""}
                                        onChange={this.props.onTotalVotesChange( "votedMulti" )}
                                        />
                                </td>
                            </tr>
                        </thead>
                    </table>
                    <div id="MultiResultValidation" className="validationForm"><span>Balsų ir sugadintų biuletenių suma neatitinka išduotų biuletenių skaičiaus.</span></div>
                    <button className="btn btn-block btn-success" type="submit" onClick={this.props.onSubmit( event )}>
                        Patvirtinti partijų surinktus balsus ir biuletenių skaičių
                    </button>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
            : <div className="alert alert-success" role="alert">Daugiamandatininkų rezultatai užregistruoti sėkmingai!</div>
    }
});


window.MultiVotesComponent = MultiVotesComponent;