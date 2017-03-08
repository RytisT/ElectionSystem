var ResultsContainer = React.createClass( {


    getInitialState: function() {
        return {
            searchQuery: "",
            districts: []
        }
    },

    componentWillMount: function() {
        axios.get( '/api/districts/')
            .then( function( response ) {
                this.setState( {
                    districts: response.data,
                });
            }.bind( this ) )

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

    render: function() {
        return(
        <ResultsComponent districts = {this.state.districts}
                          searchQuery={this.state.searchQuery}
                          onSearchQueryChange={this.handleSearchQueryChange}
        />
        )
    }
});

window.ResultsContainer = ResultsContainer;