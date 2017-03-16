var styles = {
    marginTop: {
        marginTop: '20px'
    },
    cursor: {
        cursor: 'pointer'
    },
};

var ResultsComponent = React.createClass( {


    resultsList: function() {
        return this.props.districts.map( function( district, index ) {
            if ( district.title.toLowerCase().includes( this.props.searchQuery.toLowerCase() )
                || district.district_representatives.name.toLowerCase().includes( this.props.searchQuery.toLowerCase() )
                || district.district_representatives.last_name.toLowerCase().includes( this.props.searchQuery.toLowerCase() ) )
                return (
                    <SingleResultComponent district={district}
                        key={index}
                        />
                )
        }.bind( this ) )
    },

    submitButton: function () {
       return this.props.submitted
           ? <div className="alert alert-success"><strong>Balsai patvirtinti!</strong></div>
           :<button type="button" className="btn btn-success btn-lg btn-block" onClick={() => this.props.onSubmit(event, this.props.districts)}>Skelbti rinkimų rezultatus!</button>
    },

    render: function() {
        return (
            <div className="">
                {this.submitButton()}
                <div className="panel panel-default">
                    <div className=" panel-body input-group">
                        <span className="input-group-addon" id="basic-addon3">Apylinkės paieška: </span>
                        <input type="text" className="form-control" id="Search_District"
                            placeholder="Įveskite apylinkės pavadinimą arba atstovo vardą / pavardę"
                            onChange={this.props.onSearchQueryChange( this.props.searchQuery )} />
                    </div>
                    <div id="ResultsSearchValidation" className="validationForm"><span>Naudojami netinkami simboliai.</span></div>
                </div>
                <div className="panel panel-default" style={styles.marginTop}>
                    <table id="Rasults_Administration_Table" className="table table-striped">
                        <thead>
                            <tr style={styles.cursor} onClick={( event ) => {
                                $( "#Rasults_Administration_Table" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
                            } }>
                                <th>Apylinkė</th>
                                <th>Apylinkės atstovas</th>
                                <th>Vienmandatės apygardos rezultatų registravimo laikas</th>
                                <th>Daugiamandate apygardos rezultatų registravimo laikas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.resultsList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});

window.ResultsComponent = ResultsComponent;