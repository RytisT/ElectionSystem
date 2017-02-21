/**
 * Created by rytis on 17.2.10.
 */
var DistrictContainer = React.createClass({

    getInitialState: function () {
      return {
          district: {
        constituency_id: "",
        title: "",
        number_of_voters: "",
        address: ""
          },
          districts: []
      }
    },

    componentWillMount: function() {
        var _this = this;
        var distId = this.props.routeParams.distId;
        axios.get('/api/constituencies/' + distId)
            .then(function (response) {
                _this.setState({
                    districts: response.data.districts
                });
            })
    },

    handleDeleteDist: function(district) {
        var _this = this;
        return function() {
            axios.delete('/api/districts/'+ district.id).then(function(response) {
                _this.componentWillMount();
            });
        };
    },


    handleSubmitDist: function (district) {
        var _this = this;
        district.constituency_id = this.props.routeParams.distId;
        axios.post('/api/districts', district).then(function() {
            _this.componentWillMount();
        });
    },

    handleFieldChange: function( fieldName ) {
        var _this = this;
        return function(district) {
            var tempDistrict = _this.state.district;
            tempDistrict[fieldName] = district.target.value;
            _this.setState( { district: tempDistrict });

        };
    },

    render: function () {
        return(
            <div>
                <AddDistrictComponent district={this.state.district}
                                      onFieldChange = {this.handleFieldChange}
                                      onSubmitDist ={this.handleSubmitDist}
                />
                <DistrictsComponent districts={this.state.districts}
                                onDelete ={this.handleDeleteDist} />
            </div>
        )
    }
});

window.DistrictContainer = DistrictContainer;