var styles = {
    marginTop: {
        marginTop: '20px'
    },
    cursor: {
        cursor: 'pointer'
    },
};

var PartiesComponent = React.createClass( {
    render: function() {
        var partiesList = this.props.parties.map( function( party, index ) {
            return (
                <SinglePartyContainer party={party}
                    key={index}
                    onDeleteParty={this.props.onDeleteParty}
                    onCandidates={this.props.onCandidates}
                    />
            );
        }.bind( this ) );

        return (
            <div>
                <div className="panel panel-default" style={styles.marginTop}>
                    <div id="successAddPartyValidation" className="alert alert-success" role="alert"><span>Partija pridėta sėkmingai.</span></div>
                    <table id="Parties_Table" className="table table-striped">
                        <thead>
                            <tr style={styles.cursor} onClick={( event ) => {
                                $( "#Parties_Table" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
                            } }>
                                <th className="col-md-1">Partijos numeris</th>
                                <th className="col-md-1">Partijos trumpinys</th>
                                <th className="col-md-5">Partijos pavadinimas</th>
                                <th className="col-md-2">Kandidatai</th>
                                <th className="col-md-2">Redaguoti</th>
                                <th className="col-md-1">Trinti</th>
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


window.PartiesComponent = PartiesComponent;