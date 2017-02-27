/**
 * Created by rytis on 17.2.10.
 */
var DistrictsComponent = React.createClass({


    districtList: function () {
        return this.props.districts.map(function (district, index) {
            return (
                <SingleDistrictContainer key={index} district={district} onDelete={this.props.onDelete}/>
            )
        }.bind(this))
    },


    render: function () {
        return (
            <div className="">
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
            </div>
        )
    }
});

window.DistrictsComponent = DistrictsComponent;