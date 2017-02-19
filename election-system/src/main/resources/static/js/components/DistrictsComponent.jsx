/**
 * Created by rytis on 17.2.10.
 */
var DistrictsComponent = React.createClass({


    districtList: function () {
        var _this = this;
        return _this.props.districts.map(function (district, index) {
            return(
                    <SingleDistrictComponent key={index} district = {district} onDelete={_this.props.onDelete}/>
            )
        })
    },


    render: function() {
        return(
            <div className="">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Apylinke</th>
                        <th>Rinkeju skaicius</th>
                        <th>Adresas</th>
                        <th>Apylinkes atstovas</th>
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