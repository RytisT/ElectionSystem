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
                <tr id="partiesList" key={index}>
                    <td>{party.id}</td>
                    <td>{party.title}</td>
                    <td>{party.party_Code}</td>
                    <td style={styles.width}>
                        <button id={"PartyInfo" + party.id} type="button" className="btn btn-default"
                            onClick={self.props.onDescriptionItemClick( party )}
                            data-toggle="tooltip" data-placement="top" title="Partijos narių sąrašas"
                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            <span className="glyphicon glyphicon-info-sign"></span></button>
                    </td>
                </tr>
            );
        });

        return (
            <div className="">
                <button id="export_parties" className="btn btn-info" data-export="export" onClick={( event ) => {
                    $( "#Parties_Lits" ).tableToCSV();
                } }>Atsisiųsti CSV failą</button>

                <div className="panel panel-default" style={styles.marginTop}>
                    <table id="Parties_Lits" className="table table-striped">
                        <thead>
                            <tr style={styles.cursor} onClick={( event ) => {
                                $( "#Parties_Lits" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
                            } }>
                                <th>Partijos Nr.</th>
                                <th>Partijos Pavadinimas</th>
                                <th>Trumpinys</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {partiesList}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
});

//<div>
//    <button id="PartiesReturn" className="btn btn-success" style={{ marginRight: '20px' }}
//        onClick={this.props.onCancelClick}>Grįžti
//                    </button>
//</div>


UserPartiesComponent.propTypes = { onDescriptionItemClick: React.PropTypes.func.isRequired };

window.UserPartiesComponent = UserPartiesComponent;