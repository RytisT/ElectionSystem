/**
 * Created by rytis on 17.2.10.
 */
var DistrictContainer = React.createClass({

    getInitialState: function () {
      return {
          districts: []
      }
    },

    componentWillMount: function() {
        var _this = this;
        var distId = this.props.routeParams.distId;
        axios.get('/api/districts')
            .then(function (response) {
                _this.setState({
                    districts: response.data
                });
                console.log(_this.state.districts);
            })
    },

    render: function () {
        return(
            <DistrictsComponent />
        )
    }
});

window.DistrictContainer = DistrictContainer;