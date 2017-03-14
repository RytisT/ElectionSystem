var MultiVotesContainer = React.createClass({

    getInitialState: function () {
        return {
            active: "",
            district: {
                votedMulti : ""
            },
            parties: [],
            votes: []

        };
    },


    handleVotesChange: function(partyId) {
        return function(votes) {
            var votesCount = votes.target.value;
            var tempVotes = this.state.votes;

            if(votesCount <= this.props.district.number_of_voters) {
                tempVotes[partyId].m_votes = votesCount
                this.setState({votes: tempVotes})
            } else {
                console.log("klaida! klaida! klaida! per daug vedi!")                
            }

        }.bind( this );
    },

    handleTotalVotesChange: function(fieldName) {
        return function (votes) {
            if(votes.target.value <= this.props.district.number_of_voters) {
                var tempDist = this.state.district;
                tempDist[fieldName] = votes.target.value;
                this.setState({district: tempDist});
            } else {
                console.log("klaida! klaida! klaida! per daug vedi!")
            }
        }.bind(this)
    },







  handleSubmit: function (event) {
        return function () {
            event.preventDefault();
            var votesEntered = 0;
            this.state.votes.map(function (vote, index) {
                votesEntered += Number(vote.m_votes);
            }.bind(this))

            votesEntered += Number(this.state.district.votedMultiCorrupt);
            if (this.state.district.votedMulti == votesEntered) {
                $( '#SinglResultValidation' ).hide( "slow" );

                this.state.votes.map(function (vote, index) {
                    axios.post("api/multi_results", vote)
                });

                axios.get("api/districts/" + this.props.district.id)
                    .then(function(response){
                        var thisDistrict = response.data;
                        thisDistrict.multiVoteActive = true;
                        thisDistrict.votedMultiTime = Date.now();
                        thisDistrict.votedMulti = this.state.district.votedMulti;
                        thisDistrict.votedMultiCorrupt = this.state.district.votedMultiCorrupt;

                        this.props.onSaveVotes(thisDistrict);
                        this.setState({district: thisDistrict})
                    }.bind(this))
            } else {
                console.log("klaida! klaida! klaida! ne tiek balsu!")
                $( '#MultiResultValidation' ).hide( "slow" );
                $( '#MultiResultValidation' ).show( "slow" );
            }
        }.bind(this)
  },


  loadVotesData: function (parties) {
      var tempVotes = this.state.votes;
      parties.map(function (party, index) {
          tempVotes[party.id] = {
              districts_id: this.props.district.id,
              party_id: party.id,
              m_votes: ""
          }
      }.bind(this));

          if(this.props.district.multiVoteActive == false){
              this.props.district.multi_results.map(function (result, index) {
                tempVotes[result.party_id].m_votes = result.m_votes;
                tempVotes[result.party_id].id = result.id;
              }.bind(this))
          }
      return tempVotes;
  },

    componentWillMount: function() {
        axios.get('/api/parties')
            .then(res => {
                var tempVotes = this.loadVotesData(res.data);
                this.setState({parties: res.data, votes: tempVotes, district: this.props.district, active: this.props.district.multiVoteActive});
            });
    },

    render: function () {
        return (
                <MultiVotesComponent parties={this.state.parties}
                                     onVotesChange={this.handleVotesChange}
                                     onTotalVotesChange = {this.handleTotalVotesChange}
                                     district = {this.state.district}
                                     votes={this.state.votes}
                                     activeState={this.state.active}
                                     onSubmit={this.handleSubmit}

                />
        )
    }
});


window.MultiVotesContainer = MultiVotesContainer;