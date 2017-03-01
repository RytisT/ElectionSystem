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

            if(fullName.includes(self.props.searchQuery)) {


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
                        <td>{candidate.constituency_id}</td>
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
                <h2 style={styles.blue}> Kandidatai </h2>
                <div style={styles.line}></div>
                <div> </div>

                <div className="panel panel-default">
                    <div className="panel-heading"><label htmlFor="basic-url">Ieškoti kandidato: </label></div>
                    <div className=" panel-body input-group">
                        <span className="input-group-addon" id="basic-addon3">Kandidato vardas ar pavardė: </span>
                        <input type="text" className="form-control" id="SearchCandidate" onChange={this.props.onSearchQueryChange(this.props.searchQuery)}/>
                    </div>
                            <div id="CandidateSearchValidation"><span>Dėmesio! naudojami netinkami simboliai.</span></div>
                </div>


                <div className="panel panel-default" style={styles.marginTop} id="Table">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th id="RowNumber">Eil.Nr.</th>
                            <th>VARDAS</th>
                            <th>PAVARDĖ</th>
                            <th>GIMIMO DATA</th>
                            <th>APYGARDA</th>
                            <th>PARTIJOS<br/>NUMERIS</th>                            
                            <th>VIETA<br/>SĄRAŠE</th>
                            <th></th>

                        </tr>
                        </thead>
                        <tbody id="FullList">
                        {candidatesList}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button id="CandidateReturn" className="btn btn-success" style={{ marginRight: '20px' }}
                            onClick={this.props.onCancelClick}>Grįžti
                    </button>
                </div>
            </div>

        )
    }
});

/* papildomas add mygtukas i tuscia div 
 * 
 * <button id="CandidateAdd" className="btn btn-block btn-success" type="submit"
 onClick={this.props.onAddClick} >Prideti kandidatą</button>
 * 
 */


CandidatesComponent.propTypes = {
    onDescriptionItemClick: React.PropTypes.func.isRequired
};

window.CandidatesComponent = CandidatesComponent;