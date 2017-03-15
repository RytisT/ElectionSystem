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

var PartyDescriptionComponent = React.createClass( {
    render: function() {
        var self = this;
        var membersList = this.props.candidates.map( function( candidate, index ) {

            // date
            var d = new Date( candidate.date_of_birth );
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var date = d.getDate();
            if ( month < 10 ) { month = '0' + month; }
            if ( date < 10 ) { date = '0' + date; }
            var fullDate = year + '-' + month + '-' + date;

            return (
                <tr id="candidatesList" key={index}>
                    <td>{candidate.party_list_seat}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.last_name}</td>
                    <td>{fullDate}</td>
                    <td style={styles.width}>
                        <button id={"MemberInfo" + candidate.id} type="button" className="btn btn-default"
                            onClick={self.props.onDescriptionItemClick( candidate )}
                            data-toggle="tooltip" data-placement="top" title="Kandidato informacija"
                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            <span className="glyphicon glyphicon-info-sign"></span></button>
                    </td>
                </tr>
            );
        });

        return (
            <div className="">
                <h2 style={styles.blue}> Partijos nariai </h2>
                <div style={styles.line}></div>
                <div></div>

                <button id="export_members" className="btn btn-info" data-export="export" onClick={( event ) => {
                    $( "#Members_Lits" ).tableToCSV();
                } }>Atsisiųsti kandidatų sąraša</button>

                <div className="panel panel-default" style={styles.marginTop}>
                    <table id="Members_Lits" className="table table-striped">
                        <thead>
                            <tr style={styles.cursor} onClick={( event ) => {
                                $( "#Members_Lits" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
                            } }>
                                <th>Vieta<br />Sąraše</th>
                                <th>Vardas</th>
                                <th>Pavardė</th>
                                <th>Gimimo data</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody id="FullList">
                            {membersList}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button id="PartyInfoReturn" className="btn btn-success" style={{ marginRight: '20px' }}
                        onClick={this.props.onCancelClick}>Grįžti
                    </button>
                </div>
            </div>

        )
    }
});

PartyDescriptionComponent.propTypes = {
    candidate: React.PropTypes.object.isRequired,
    onDescriptionItemClick: React.PropTypes.func.isRequired
}

window.PartyDescriptionComponent = PartyDescriptionComponent;