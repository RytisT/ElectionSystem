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

var PartyDescriptionComponent = React.createClass({
    render: function () {
        var self = this;
        var membersList = this.props.candidates.map(function (candidate, index) {


            // date
            var d = new Date(candidate.date_of_birth);
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var date = d.getDate();
            // jei menuo vienzenklis sk tai prieki bus 0 pvz: 03
            if (month < 10) {
                month = '0' + month;
            }
            if (date < 10) {
                date = '0' + date;
            }
            var fullDate = year + '-' + month + '-' + date;

            return (
                <tr id="candidatesList" key={index}>
                    <td></td>
                    <td>{candidate.name}</td>
                    <td>{candidate.last_name}</td>
                    <td>{fullDate}</td>
                </tr>
            );
        });


        return (
            <div className="">
                <h2 style={styles.blue}> Partijos nariai </h2>
                <div style={styles.line}></div>
                <div></div>


                <div className="panel panel-default" style={styles.marginTop} id="Table">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th id="RowNumber">Eil.Nr.</th>
                            <th>VARDAS</th>
                            <th>PAVARDĖ</th>
                            <th>GIMIMO DATA</th>
                            <th></th>

                        </tr>
                        </thead>
                        <tbody id="FullList">
                        {membersList}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button id="PartyInfoReturn" className="btn btn-success" style={{marginRight: '20px'}}
                            onClick={this.props.onCancelClick}>Grįžti
                    </button>
                </div>
            </div>

        )
    }
});

PartyDescriptionComponent.propTypes = {};

window.PartyDescriptionComponent = PartyDescriptionComponent;