var ResultsContainer = React.createClass( {


    getInitialState: function() {
        return {
            submitted: false,
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
        axios.get('/api/candidates/elected')
            .then(resp =>{
                if (resp.data.length != 0){
                    this.setState({submitted: true})
                }
            })
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

    handleSubmit : function () {
        return function (event, districts) {
            event.preventDefault();
            var readyToSubmit = true;
            districts.map(function (district, index) {
                if(!district.multiVoteActive || !district.singleVoteActive){
                    readyToSubmit = false;
                }
            }.bind(this))
            if (readyToSubmit){
                axios.get('user/resultsmulti/mandates');
                axios.get('api/calculation1')
                    .then(resp => {
                        this.setState({submitted: true})
                    })
            } else {
                console.log("neužregistruotos visos apylinkės")
            }
        }.bind(this)
    },

    render: function() {
        return(
        <ResultsComponent districts = {this.state.districts}
                          searchQuery={this.state.searchQuery}
                          onSearchQueryChange={this.handleSearchQueryChange}
                          candelSingleVotes = {this.cancelSingleVotes}
                          onSubmit = {this.handleSubmit()}
                          submitted = {this.state.submitted}
                          cancelMultiVotes = {this.cancelMultiVotes}
        />
        )
    }
});

window.ResultsContainer = ResultsContainer;