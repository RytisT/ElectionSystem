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
        marginTop: '10px'
    }
};

var CandidatesComponent = React.createClass( {
    render: function() {
        var self = this;
        var candidatesList = this.props.candidates.map( function( candidate, index ) {

            return (
                <tr key={index}>
                    <td>{candidate.id}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.last_name}</td>
                    <td>{candidate.date_of_birth}</td>
                    <td>{candidate.description}</td>
                    <td>
                        <button type="button" className="btn btn-default" onClick={self.props.onEditItem( candidate )}>
                            <span className="glyphicon glyphicon-pencil"></span></button>
                    </td>
                </tr>
            );
        });
        return (
            <div className="container">
                <h1> Candidates </h1>
                <button className="btn btn-success" style={styles.space} onClick={this.props.onAddClick}  >Add Candidate</button>
                <button className="btn btn-success" onClick={this.props.onMainPageClick}  >Main page</button>
                <div style={styles.line} ></div>
                <div className="panel panel-default" style={styles.marginTop}>

                    <div className="panel-heading">THE LIST OF CANDIDATES</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>LAST NAME</th>
                                <th>DATE OF BIRTH</th>
                                <th>DESCRIPTION</th>

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