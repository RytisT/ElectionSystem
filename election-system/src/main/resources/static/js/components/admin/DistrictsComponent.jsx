/**
 * Created by rytis on 17.2.10.
 */
var DistrictsComponent = React.createClass({


    districtList: function () {
        return this.props.districts.map(function (district, index) {
            if(district.title.includes(this.props.searchQuery)) {
                return (
                    <SingleDistrictContainer key={index} district={district} onDelete={this.props.onDelete}/>
                )
            }
        }.bind(this))
    },


    render: function () {
        return (
            <div className="">
                <div className="panel panel-default">
                <div className="panel-heading"><label htmlFor="basic-url">Ieškoti apylinkės: </label></div>
                <div className=" panel-body input-group">
                    <span className="input-group-addon" id="basic-addon3">Apylinkės pavadinimas: </span>
                    <input type="text" className="form-control" id="SearchByTitle" onChange={this.props.onSearchQueryChange(this.props.searchQuery)}/>
                </div>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
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


window.DistrictsComponent = DistrictsComponent;