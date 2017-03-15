/**
 * Created by rytis on 17.2.10.
 */
var DistrictContainer = React.createClass( {

    getInitialState: function() {
        return {
            searchQuery: "",
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
        var distId = this.props.routeParams.distId;
        axios.get( '/api/constituencies/' + distId )
            .then( function( response ) {
                var temp = this.state.district;
                temp.title = "";
                temp.number_of_voters = "";
                temp.address = "";
                this.setState( {
                    districts: response.data.districts,
                    district: temp
                });
            }.bind( this ) )

    },

    handleDeleteDist: function( district ) {
        return function() {
            var constId = district.constituency_id;
            axios.delete( '/api/districts/' + district.id ).then( function( response ) {
                axios.get( '/api/constituencies/' + constId )
                    .then( function( response ) {
                        var x = district.id;
                        var y = "#Delete_district" + x;
                        var z = "#x_district" + x;
                        $( y ).hide(); $( z ).html( "Trinti" );
                        this.setState( { districts: response.data.districts });
                    }.bind( this ) )
            }.bind( this ) );
        }.bind( this );
    },


    handleSubmitDist: function( district ) {
        district.constituency_id = this.props.routeParams.distId;
        axios.post( '/api/districts', district ).then( function() {
            this.componentWillMount();
        }.bind( this ) );
    },

    handleSearchQueryChange: function() {
        return function( newQuery ) {
            //validation
            var val = $( "#SearchByTitle" ).val();
            var matches = val.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“\"!,.:;-? ()]$)" );
            if ( matches != null ) { $( "#DistrictSearchValidation" ).hide( "slow" ); }
            else { $( "#DistrictSearchValidation" ).show( "slow" ); }

            this.setState( { searchQuery: newQuery.target.value })
        }.bind( this )
    },

    handleReturn: function() {
        this.context.router.push( '/admin' );
    },

    handleFieldChange: function( fieldName ) {
        return function( district ) {
            var tempDistrict = this.state.district;
            tempDistrict[fieldName] = district.target.value;
            this.setState( { district: tempDistrict });

        }.bind( this );
    },

    render: function() {
        return (
            <div>
                <AddDistrictComponent district={this.state.district}
                    onFieldChange={this.handleFieldChange}
                    onSubmitDist={this.handleSubmitDist}
                    />
                <DistrictsComponent districts={this.state.districts}
                    onDelete={this.handleDeleteDist}
                    searchQuery={this.state.searchQuery}
                    onSearchQueryChange={this.handleSearchQueryChange}
                    onReturn={this.handleReturn} />
            </div>
        )
    }
});



DistrictContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.DistrictContainer = DistrictContainer;