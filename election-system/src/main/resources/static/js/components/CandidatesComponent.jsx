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
            var fullName = candidate.name + " " + candidate.last_name;

            if ( fullName.toLowerCase().includes( self.props.searchQuery.toLowerCase() ) ) {

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
                        <td></td>
                        <td>{candidate.name}</td>
                        <td>{candidate.last_name}</td>
                        <td>{fullDate}</td>
                        <td>{candidate.party_id}</td>
                        <td>{candidate.party_list_seat}</td>
                        <td style={styles.width}>
                            <button id={"CandidateInfo" + candidate.id} type="button" className="btn btn-default"
                                onClick={self.props.onDescriptionItemClick( candidate )}
                                data-toggle="tooltip" data-placement="top" title="Kandidato informacija"
                                data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne">
                                <span className="glyphicon glyphicon-info-sign"></span></button>
                        </td>

                    </tr>
                );
            }
        });

        /* Papildomai mygtukai
         *
         *
         * <td style={styles.width}>
         <button id="CandidateEdit" type="button" className="btn btn-default" onClick={self.props.onEditItem( candidate )}
         data-toggle="tooltip" data-placement="top" title="Redaguoti kandidatą">
         <span className="glyphicon glyphicon-pencil"></span></button>
         </td>
         <td style={styles.width}>
         <button id="CandidateDelete" type="button" className="btn btn-default" onClick={self.props.onRemoveItem( candidate )}
         data-toggle="tooltip" data-placement="top" title="Trinti kandidatą">
         <span className="glyphicon glyphicon-remove"></span></button>
         </td>
         *
         */

        return (
            <div className="">
                <div className="panel panel-default">
                    <div className=" panel-body input-group">

                        <span className="input-group-addon" id="basic-addon3">Kandidato paieška: </span>
                        <input type="text" className="form-control" id="SearchCandidate" placeholder="Įveskite vardą / pavardę" maxLength="85"
                            onChange={this.props.onSearchQueryChange( this.props.searchQuery )} />
                    </div>
                    <div id="CandidateSearchValidation" className="validationForm"><span>Naudojami netinkami simboliai.</span></div>
                </div>

                <button id="export_candidates" className="btn btn-info" data-export="export" onClick={( event ) => {
                    $( "#Candidates_Lits" ).tableToCSV();
                } }>Atsisiųsti CSV failą</button>

                <div className="panel panel-default" style={styles.marginTop} id="Table">
                    <table id="Candidates_Lits" className="table table-striped">
                        <thead>
                            <tr style={styles.cursor} onClick={( event ) => {
                                $( "#Candidates_Lits" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
                            } }>

                                <th id="RowNumber" >Eil.Nr.</th>
                                <th >Vardas</th>
                                <th>Pavardė</th>
                                <th>Gimimo data</th>
                                <th>Partijos<br />numeris</th>
                                <th>Vieta<br />sąraše</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody id="FullList">
                            {candidatesList}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});



//<div>
//    <button id="CandidateReturn" className="btn btn-success" style={{ marginRight: '20px' }}
//        onClick={this.props.onCancelClick}>grižti
//                    </button>
//</div>

/* papildomas add mygtukas
 * 
 * <button id="CandidateAdd" className="btn btn-block btn-success" type="submit"
 onClick={this.props.onAddClick} >Prideti kandidatą</button>
 * 
 */


CandidatesComponent.propTypes = {
    onDescriptionItemClick: React.PropTypes.func.isRequired
};

window.CandidatesComponent = CandidatesComponent;