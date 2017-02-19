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

var UserPartiesComponent = React.createClass( {
    render: function() {
        var self = this;
        var partiesList = this.props.parties.map( function( party, index ) {
            return (
                <tr id="partiesList" key={index} >
                    <td></td>
                    <td>{party.title}</td>
                    <td>{party.party_Code}</td>
                </tr>
            );
        });

        return (
            <div className="">
                <h2 style={styles.blue}> Partijos </h2>
                <div style={styles.line} ></div>
                <div>

                </div>
                <div className="panel panel-default" style={styles.marginTop} id="Table">
                    <table className="table table-striped" >
                        <thead>
                            <tr>
                                <th id="RowNumber">Eil.Nr.</th>
                                <th>Partijos pavadinimas</th>
                                <th>Partijos kodas</th>
                                <th> </th>

                            </tr>
                        </thead>
                        <tbody>
                            {partiesList}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button id="PartiesReturn" className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onCancelClick}  >Grįžti</button>
                </div>
            </div>

        )
    }
});


UserPartiesComponent.propTypes = {
};

window.UserPartiesComponent = UserPartiesComponent;