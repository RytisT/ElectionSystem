var ResultsContainer = React.createClass( {


    getInitialState: function() {
        return {
            searchQuery: "",
            districts: []
        }
    },

    cancelSingleVotes: function (distID) {
        return function () {
            console.log(this.state.districts[distID])
            var tempDist = this.state.districts[distID]
            tempDist.singleVoteActive = false;
            tempDist.votedSingleTime = null;
            axios.post('/api/districts/', tempDist)
                .then(  axios.get( '/api/districts/')
                    .then( function( response ) {
                        this.setState( {
                            districts: response.data,
                        });
                    }.bind( this ) ))
        }.bind(this)
    },

    cancelMultiVotes: function (distID) {
        return function () {
            console.log(this.state.districts[distID])
            var tempDist = this.state.districts[distID]
            tempDist.multiVoteActive = false;
            tempDist.votedMultiTime = null;
            axios.post('/api/districts/', tempDist)
                .then(axios.get('/api/districts/')
                    .then(function (response) {
                        this.setState({
                            districts: response.data,
                        });
                    }.bind(this)))
        }.bind(this)
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
                          candelSingleVotes = {this.cancelSingleVotes}
                          cancelMultiVotes = {this.cancelMultiVotes}
        />
        )
    }
});

window.ResultsContainer = ResultsContainer;