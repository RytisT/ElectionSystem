var ConstituenciesContainer = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            constituencies: []
        };
    },

    componentWillMount: function() {
        var _this = this;
        axios.get('/api/constituencies')
            .then(function (response) {
                _this.setState({
                    constituencies: response.data
                });

            })
    },


    handleDeleteConst: function(constituency) {
        var _this = this;
        return function() {
            axios.delete('/api/constituencies/'+ constituency.id).then(function(response) {
                _this.componentWillMount();
            });
        };
    },

    handleEditDistricts: function (constituency) {
        var _this = this;
        return function(){
           _this.context.router.push("/district/" + constituency.id);
       }
    },

    handleSubmitConst: function (constituency) {
        e.preventDefault();
        this.setState
        var _this = this;
        return function() {
            axios.post('/api/constituencies/', this.state.const).then(function(response) {
                _this.componentWillMount();
            });
        };
    },


    render: function() {
        return(
            <Constituencies constituencies={this.state.constituencies}
                      onEditDistrict={this.handleEditDistricts}
                            onDeleteConst ={this.handleDeleteConst}
                            onSubmitConst ={this.handleSubmitConst}
            />
        )
    }
});


window.ConstituenciesContainer = ConstituenciesContainer;