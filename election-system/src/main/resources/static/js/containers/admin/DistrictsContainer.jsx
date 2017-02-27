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

    componentWillMount: function () {
        var distId = this.props.routeParams.distId;
        axios.get('/api/constituencies/' + distId)
            .then(function (response) {
                this.setState({
                    districts: response.data.districts
                });
            }.bind(this))

    },

    handleDeleteDist: function (district) {
        return function () {
            var constId = district.constituency_id;
            axios.delete('/api/districts/' + district.id).then(function (response) {
                axios.get('/api/constituencies/' + constId)
                    .then(function (response) {
                            this.setState({districts: response.data.districts});

                        }.bind(this))
            }.bind(this));
        }.bind(this);
    },


    handleSubmitDist: function (district) {
        district.constituency_id = this.props.routeParams.distId;
        axios.post('/api/districts', district).then(function () {
            this.componentWillMount();
        }.bind(this));
    },

    handleFieldChange: function (fieldName) {
        return function (district) {
            var tempDistrict = this.state.district;
            tempDistrict[fieldName] = district.target.value;
            this.setState({district: tempDistrict});

        }.bind(this);
    },

    render: function () {
        return (
            <div>
                <AddDistrictComponent district={this.state.district}
                                      onFieldChange={this.handleFieldChange}
                                      onSubmitDist={this.handleSubmitDist}
                />
                <DistrictsComponent districts={this.state.districts}
                                    onDelete={this.handleDeleteDist}/>
            </div>
        )
    }
});

window.DistrictContainer = DistrictContainer;