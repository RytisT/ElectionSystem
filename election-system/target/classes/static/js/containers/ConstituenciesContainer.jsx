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


    handleDeleteEntry: function(constituency) {
        var _this = this;
        return function() {
            axios.put('/api/constituencies/'+ constituency.id).then(function(response) {
                axios.get('/api/constituencies')
                    .then(function (response) {
                        self.setState({
                            constituencies: response.data
                        });
                    });
            });
        };
    },

    handleEditDistricts: function (constituency) {
        var _this = this;
        return function(){
           _this.context.router.push("/district/" + constituency.id);
       }
    },


    render: function() {
        return(
            <Constituencies constituencies={this.state.constituencies}
                      onEditDistrict={this.handleEditDistricts}
            />
        )
    }
});


window.ConstituenciesContainer = ConstituenciesContainer;