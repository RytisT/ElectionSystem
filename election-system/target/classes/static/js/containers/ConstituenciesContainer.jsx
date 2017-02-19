var ConstituenciesContainer = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            constituency: {
                title: ''
            },
            constituencies: []
        };
    },

    componentWillMount: function() {
        console.log(this.state.constituency);
        var _this = this;
        axios.get('/api/constituencies')
            .then(function (response) {
                _this.setState({
                    constituencies: response.data
                });

            })
    },


    handleDeleteConst: function(constituency) {
        return function() {
            console.log(constituency);
            axios.delete('/api/constituencies/'+ constituency.id).then(function(response) {
                this.componentWillMount();
            }.bind(this));
        };
    },

    handleEditDistricts: function (constituency) {
        var _this = this;
        return function(){
           _this.context.router.push("/admin/district/" + constituency.id);
       }
    },

    handleSubmitConst: function (constituency) {
        var _this = this;
            axios.post('/api/constituencies', constituency).then(function() {
                _this.componentWillMount();
            });
        },

    handleFieldChange: function( fieldName ) {
        var _this = this;
        return function(constituency) {
            var tempConstituency = _this.state.constituency;
            tempConstituency[fieldName] = constituency.target.value;
            _this.setState( { constituency: tempConstituency });

        };
    },


    render: function() {
        return(
            <div>
                <AddConstituencyComponent constituency={this.state.constituency}
                                          onFieldChange = {this.handleFieldChange}
                                          onSubmitConst ={this.handleSubmitConst}
                />
                <ConstituenciesComponent constituencies={this.state.constituencies}
                            onEditDistrict={this.handleEditDistricts}
                            onDeleteConst ={this.handleDeleteConst()}
                />
            </div>
        )
    }
});


window.ConstituenciesContainer = ConstituenciesContainer;