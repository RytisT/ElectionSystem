var styles = {
    marginTop: {
        marginTop: '20px'
    },
    cursor: {
        cursor: 'pointer'
    },
};

var PartyCandidatesComponent = React.createClass( {

    handleFileChange: function() {
        return function() {
            this.props.onFileChange( this.refs.file.files[0] );
        }.bind( this )
    },


    candidateList: function() {
        return this.props.candidates.map( function( candidate, index ) {
            // date
            var d = new Date( candidate.date_of_birth );
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var date = d.getDate();
            if ( month < 10 ) { month = '0' + month; }
            if ( date < 10 ) { date = '0' + date; }
            var fullDate = year + '-' + month + '-' + date;

            return (
                <tr key={index}>
                    <td className="col-md-1">{candidate.name}</td>
                    <td className="col-md-2">{candidate.last_name}</td>
                    <td className="col-md-2">{fullDate}</td>
                    <td className="col-md-2">{candidate.personal_id}</td>
                    <td className="col-md-4">{candidate.description}</td>
                    <td className="col-md-1">{candidate.party_list_seat}</td>

                </tr>
            )
        }.bind( this ) )
    },

    handleFile: function() {
        return ( this.props.csvFile === null )
            ? <input className="btn btn-block btn-primary btn-outline" onChange={this.handleFileChange()} ref="file" type="file"
                name="file" id="file-select" />
            : <button className="btn btn-danger btn-outline" onClick={this.props.onFileDelete( this.props.csvFile )} type="button"
                name="file" id="file-uploaded">Trinti sąrašą</button>
    },

    //    Pridėtas failas: {this.props.csvFile}

    render: function() {
        return <div>
            {this.handleFile()}
            <div className="">
                <div className="panel panel-default" style={styles.marginTop}>
                    <table id="Party_Candidates_Table" className="table table-striped">
                        <thead>
                            <tr style={styles.cursor} onClick={( event ) => {
                                $( "#Party_Candidates_Table" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
                            } }>
                                <th>Vardas</th>
                                <th>Pavardė</th>
                                <th>Gimimo data</th>
                                <th>Asmens kodas</th>
                                <th>Aprašymas</th>
                                <th>Vieta sąraše</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.candidateList()}

                        </tbody>

                    </table>
                </div>
                <button id="Return" className="btn btn-success" style={{ marginRight: '20px' }}
                    onClick={this.props.onReturn}>Grįžti
            </button>
            </div>
        </div>
    }
});

window.PartyCandidatesComponent = PartyCandidatesComponent;