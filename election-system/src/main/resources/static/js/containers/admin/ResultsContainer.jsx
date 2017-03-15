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
            var val = $( "#Search_District" ).val();
            var matches = val.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“\"!,.:;-? ()]$)" );
            if ( matches != null ) { $( "#ResultsSearchValidation" ).hide( "slow" ); }
            else { $( "#ResultsSearchValidation" ).show( "slow" ); }

            this.setState( { searchQuery: newQuery.target.value })
        }.bind( this )
    },

    render: function() {
        return(
        <ResultsComponent districts = {this.state.districts}
                          searchQuery={this.state.searchQuery}
                          onSearchQueryChange={this.handleSearchQueryChange}
                          candelSingleVotes = {this.cancelSingleVotes}
                          cancelMultiVotes = {this.cancelMultiVotes}
        />
        )
    }
});

window.ResultsContainer = ResultsContainer;