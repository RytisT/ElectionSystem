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

var CandidatesComponent = React.createClass( {
    render: function() {
        var self = this;
        var candidatesList = this.props.candidates.map( function( candidate, index ) {

            // date
            var d = new Date( candidate.date_of_birth );
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var date = d.getDate();
            // jei menuo vienzenklis sk tai prieki bus 0 pvz: 03
            if ( month < 10 ) {
                month = '0' + month;
            }
            if ( date < 10 ) {
                date = '0' + date;
            }
            var fullDate = year + '-' + month + '-' + date;

            return (
                <tr id="candidatesList" key={index}>
                    <td>{candidate.id}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.last_name}</td>
                    <td>{fullDate}</td>
                    <td style={styles.width}>
                        <button id="CandidateInfo" type="button" className="btn btn-default" onClick={self.props.onDescriptionItemClick( candidate )}
                            data-toggle="tooltip" data-placement="top" title="Kandidato informacija"
                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span className="glyphicon glyphicon-info-sign"></span></button>
                    </td>
                    <td style={styles.width}>
                        <button id="CandidateEdit" type="button" className="btn btn-default" onClick={self.props.onEditItem( candidate )}
                            data-toggle="tooltip" data-placement="top" title="Redaguoti kandidatą">
                            <span className="glyphicon glyphicon-pencil"></span></button>
                    </td>
                    <td style={styles.width}>
                        <button id="CandidateDelete" type="button" className="btn btn-default" onClick={self.props.onRemoveItem( candidate )}
                            data-toggle="tooltip" data-placement="top" title="Trinti kandidatą">
                            <span className="glyphicon glyphicon-remove"></span></button>
                    </td>
                </tr>
            );
        });
        return (
            <div className="">
                <h2 style={styles.blue}> Kandidatai </h2>
                <div style={styles.line} ></div>
                <div>
                    <button id="CandidateAdd" className="btn btn-block btn-success" type="submit"
                        onClick={this.props.onAddClick} >Prideti kandidatą</button>
                </div>
                <div className="panel panel-default" style={styles.marginTop}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>VARDAS</th>
                                <th>PAVARDĖ</th>
                                <th>GIMIMO DATA</th>
                                <th> </th>
                                <th> </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidatesList}
                        </tbody>
                    </table>
                </div>
                <div>
                <button id="CandidateReturn" className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onCancelClick}  >Grįžti</button>
                </div>
            </div>

        )
    }
});

CandidatesComponent.propTypes = {
    onAddClick: React.PropTypes.func.isRequired,
    onMainPageClick: React.PropTypes.func.isRequired,
    onDescriptionItemClick: React.PropTypes.func.isRequired
};

window.CandidatesComponent = CandidatesComponent;