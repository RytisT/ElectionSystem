var ConstituenciesContainer = React.createClass( {

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            searchQuery: "",
            constituency: {
                title: ''
            },
            constituencies: []
        };
    },

    handleSearchQueryChange: function() {
        return function( newQuery ) {
            //validation
            var val = $( "#SearchByTitle" ).val();
            var matches = val.match( ".*([a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
            if ( matches != null ) { $( "#DistrictSearchValidation" ).hide( "slow" ); }
            else { $( "#DistrictSearchValidation" ).show( "slow" ); }

            this.setState( { searchQuery: newQuery.target.value })
        }.bind( this )
    },

    componentWillMount: function() {
        axios.get( '/api/constituencies' )
            .then( function( response ) {
                this.setState( {
                    constituencies: response.data
                });

            }.bind( this ) )
    },


    handleDeleteConst: function( constituency ) {
        return function() {
            console.log( "Trinu" )
            axios.delete( '/api/constituencies/' + constituency.id )
                .then( function( response ) {
                    axios.get( '/api/constituencies' )
                        .then( function( response ) {
                            var tempConstituency = this.state.constituency;
                            tempConstituency.title = "";
                            var x = constituency.id;
                            var y = "#Delete_constituency" + x;
                            var z = "#x_constituency" + x;
                            $( y ).hide(); $( z ).html( "Trinti" );
                            this.setState( {
                                constituencies: response.data,
                                constituency: tempConstituency
                            });
                        }.bind( this )
                        )
                }.bind( this ) );
        }.bind( this )
    },

    handleEditDistricts: function( constituency ) {
        return function() {
            this.context.router.push( "/admin/district/" + constituency.id );
        }.bind( this )
    },

    handleSubmitConst: function( constituency ) {
        axios.post( '/api/constituencies', constituency )
            .then( function() {
                axios.get( '/api/constituencies' )
                    .then( function( response ) {
                        var tempConstituency = this.state.constituency;
                        tempConstituency.title = "";
                        this.setState( {
                            constituencies: response.data,
                            constituency: tempConstituency
                        });

                    }.bind( this )
                    )
            }.bind( this ) );
    },

    handleFieldChange: function( fieldName ) {
        return function( constituency ) {
            var tempConstituency = this.state.constituency;
            tempConstituency[fieldName] = constituency.target.value;
            this.setState( { constituency: tempConstituency });

        }.bind( this );
    },

    handleCandidates: function( constituency ) {
        return function() {
            this.context.router.push( {
                pathname: "/admin/const-candidates/" + constituency.id
            });
        }.bind( this )
    },

    render: function() {
        return (
            <div>
                <AddConstituencyComponent constituency={this.state.constituency}
                    onFieldChange={this.handleFieldChange}
                    onSubmitConst={this.handleSubmitConst}
                    />
                <ConstituenciesComponent constituencies={this.state.constituencies}
                    onEditDistrict={this.handleEditDistricts}
                    onDeleteConst={this.handleDeleteConst}
                    onCandidates={this.handleCandidates}
                    onSearchQueryChange={this.handleSearchQueryChange}
                    searchQuery={this.state.searchQuery}
                    />
            </div>
        )
    }
});

ConstituenciesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ConstituenciesContainer = ConstituenciesContainer;