var SingleDistrictContainer = React.createClass({

    getInitialState: function () {
        return {
            isEditing: false,
            district: this.props.district,
            isChanged: false,
            fieldContainer: []
        };
    },


    handleFieldChange: function (fieldName) {
        return function (district) {
            var tempConstituency = this.state.district;
            tempConstituency[fieldName] = district.target.value;
            if (!this.state.isChanged) {
                this.setState({fieldContainer: district.target.value})
            }
            this.setState({district: tempConstituency, isChanged: true});
        }.bind(this);
    },

    handleEditDist: function () {

        if (this.state.isEditing) {
            this.setState({isEditing: false})
            this.state.district.title = this.state.fieldContainer;
            this.forceUpdate()
        } else {
            this.setState({isEditing: true})
        }

    },

    handleSaveDist: function () {
        axios.post('/api/districts', this.state.district)
            .then(this.setState({isEditing: false}))
    },

    render: function () {
        return (
            <SingleDistrictComponent district={this.props.district}
                                     onDelete={this.props.onDelete}
                                     onEditDist={this.handleEditDist}
                                     onSaveDist={this.handleSaveDist}
                                     isEditing={this.state.isEditing}
                                     onFieldChange={this.handleFieldChange}/>
        )
    }
});

window.SingleDistrictContainer = SingleDistrictContainer;