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
    }
};

var CandidatesComponent = React.createClass( {
    render: function() {
        var self = this;
        var candidatesList = this.props.candidates.map( function( candidate, index ) {

            // published date
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
                <tr key={index}>
                    <td>{candidate.id}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.last_name}</td>
                    <td>{fullDate}</td>
                    <td>{candidate.description}</td>
                    <td>
                        <button type="button" className="btn btn-default" onClick={self.props.onEditItem( candidate )}>
                            <span className="glyphicon glyphicon-pencil"></span></button>
                    </td>
                    <td>
                        <button type="button" className="btn btn-default" onClick={self.props.onRemoveItem( candidate )}>
                            <span className="glyphicon glyphicon-remove"></span></button>
                    </td>
                </tr>
            );
        });
        return (
            <div className="">
                <h2 style={styles.blue}> Kandidatai </h2>
                <button className="btn btn-primary btn-lg" style={styles.space} onClick={this.props.onAddClick}  >Pridėti kandidatą (laikinai)</button>
                <button className="btn btn-primary btn-lg" onClick={this.props.onMainPageClick}  >Namai (laikinai)</button>
                <div style={styles.line} ></div>
                <div className="panel panel-default" style={styles.marginTop}>

                    <div className="panel-heading">Kandidatų sąrašas</div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>VARDAS</th>
                                <th>PAVARDĖ</th>
                                <th>GIMIMO DATA</th>
                                <th>APRAŠYMAS</th>
                                <th>KEISTI</th>
                                <th>TRINTI</th>
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

CandidatesComponent.propTypes = {
    onAddClick: React.PropTypes.func.isRequired,
    onMainPageClick: React.PropTypes.func.isRequired
};

window.CandidatesComponent = CandidatesComponent;