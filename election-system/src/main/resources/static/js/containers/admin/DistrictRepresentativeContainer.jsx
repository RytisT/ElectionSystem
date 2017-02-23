var DistrictRepresentativeContainer = React.createClass({
    getInitialState: function () {
        return {
            existing: false,
            editing: false,
            representative: {
                district_id: "",
                name: "",
                last_name: "",
                login: "",
                password: ""
            }
        }
    },

    handleFieldChange: function (fieldName) {
        return function (representative) {
            var tempRepresentative = this.state.representative;
            tempRepresentative[fieldName] = representative.target.value;
            this.setState({representative: tempRepresentative});

        }.bind(this);
    },

    handleSubmit: function (representative) {
        (representative.district_id === "") && (representative.district_id = this.props.distId);
        console.log("adding:", representative)
        axios.post('/api/representatives/', representative).then(function () {
            this.setState({editing: false, existing: true});
        }.bind(this));
    },

    handleDelete: function (representative) {

    },

    changeExistingState: function () {
        if (this.state.existing) {
            this.setState({existing: false});
        } else {
            this.setState({existing: true});
        }
    },

    handleEditRep: function () {
        this.setState({editing: true})
    },


    componentWillMount: function () {
        if (this.props.distRep[0] != null) {
            this.setState({existing: true, representative: this.props.distRep[0]});

        }
    },

    render: function () {
        return <DistrictRepresentativeComponent distRep={this.state.representative}
                                                existing={this.state.existing}
                                                editing={this.state.editing}
                                                onEdit={this.handleEditRep}
                                                onFieldChange={this.handleFieldChange}
                                                onSubmit={this.handleSubmit}
                                                onDelete={this.handleDelete}/>
    }
});

window.DistrictRepresentativeContainer = DistrictRepresentativeContainer;