var styles = {
    cursor: {
        cursor: 'pointer'
    },
};

var DistrictsComponent = React.createClass( {


    districtList: function() {
        return this.props.districts.map( function( district, index ) {
            if ( district.title.toLowerCase().includes( this.props.searchQuery.toLowerCase() ) || district.address.toLowerCase().includes( this.props.searchQuery.toLowerCase() ) ) {
                return (
                    <SingleDistrictContainer key={index} district={district} onDelete={this.props.onDelete} />
                )
            }
        }.bind( this ) )
    },


    render: function() {
        return (
            <div className="">
                <div className="panel panel-default">

                    <div className=" panel-body input-group">
                        <span className="input-group-addon" id="basic-addon3">Apylinkės paieška: </span>
                        <input type="text" className="form-control" id="SearchByTitle" placeholder="Įveskite apylinkės pavadinimą / adresą" maxLength="35"
                            onChange={this.props.onSearchQueryChange( this.props.searchQuery )} />
                    </div>
                    <div id="DistrictSearchValidation" className="validationForm"><span>Naudojami netinkami simboliai.</span></div>
                </div>

                <div id="successAddDistrictValidation" className="alert alert-success" role="alert"><span>Aplinkė pridėta sėkmingai.</span></div>

                <table id="Districts_Table" className="table table-striped">
                    <thead>
                        <tr style={styles.cursor} onClick={( event ) => {
                            $( "#Districts_Table" ).tablesorter( { sortList: [[0, 0], [1, 0]] });
                        } }>
                            <th>Apylinkė</th>
                            <th>Rinkejų skaičius</th>
                            <th>Adresas</th>
                            <th>Apylinkės atstovas</th>
                            <th>Redaguoti</th>
                            <th>Trinti</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.districtList()}

                    </tbody>

                </table>
                <button id="Return" className="btn btn-success" style={{ marginRight: '20px' }}
                    onClick={this.props.onReturn}>Grįžti
                </button>
            </div>
        )
    }
});

// <div className="panel-heading"><label htmlFor="basic-url">Ieškoti apylinkės: </label></div>

window.DistrictsComponent = DistrictsComponent;