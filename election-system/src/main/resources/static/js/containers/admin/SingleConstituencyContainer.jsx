var SingleConstituencyContainer = React.createClass({

    getInitialState: function () {
        return {
            isEditing: false,
            constituency: this.props.constituency,
            isChanged: false,
            fieldContainer: ""
        };
    },


    handleFieldChange: function (fieldName) {
        return function (constituency) {
            var tempConstituency = this.state.constituency;
            tempConstituency[fieldName] = constituency.target.value;
            if (!this.state.isChanged) {
                this.setState({fieldContainer: constituency.target.value})
            }
            this.setState({constituency: tempConstituency, isChanged: true});
        }.bind(this);
    },

    handleEditConst: function (constitut) {

        if (this.state.isEditing) {
            this.setState({isEditing: false})
            this.state.constituency.title = this.state.fieldContainer;
            this.forceUpdate()
        } else {
            this.setState({isEditing: true})
        }

    },

    handleSaveConst: function () {
        axios.post('/api/constituencies', this.state.constituency)
            .then(this.setState({isEditing: false}))
    },

    render: function () {
        return (
            <SingleConstituencyComponent constituency={this.props.constituency}
                                         onEditDistrict={this.props.onEditDistrict}
                                         onEditConst={this.handleEditConst}
                                         onDeleteConst={this.props.onDeleteConst}
                                         onSaveConst={this.handleSaveConst}
                                         isEditing={this.state.isEditing}
                                         onFieldChange={this.handleFieldChange}/>
        );


    }
});


window.SingleConstituencyContainer = SingleConstituencyContainer;