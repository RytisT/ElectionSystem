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

var SingleVotesComponent = React.createClass({

    render: function () {
        var self = this;
        var candidatesList = this.props.constituency.map(function (candidate, index) {

            return (

                <tr id="candidateList" key={index}>
                    <td></td>
                    <td>{candidate.name}</td>
                    <td>{candidate.last_name}</td>
                    <td>
                        <input
                            className="form-control"
                            placeholder="0"
                            type="text"
                        />
                    </td>
                </tr>
            );
        });

        return (
            <div className="">
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
                        <tr>
                            <th>Suskaičiuota vienmandatės biuletenių:</th>
                            <th>
                                <input
                                    id="DistrictVotedSingle"
                                    className="form-control"
                                    placeholder="0"
                                    type="text"
                                />
                            </th>
                        </tr>
                        <tr>
                            <th>Sugadinta vienmandatės biuletenių:</th>
                            <th>
                                <input
                                    className="form-control"
                                    placeholder="0"
                                    type="text"
                                />
                            </th>
                        </tr>
                        </thead>
                    </table>
                    <button className="btn btn-block btn-success" type="submit">
                        Patvirtinti kandidatų surinktus balsus ir biuletenių skaičių
                    </button>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        )
    }
});

window.SingleVotesComponent = SingleVotesComponent;