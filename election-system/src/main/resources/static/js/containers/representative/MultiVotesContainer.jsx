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
                tempVotes[partyId] = {
                    districts_id: this.props.district.id,
                    party_id: partyId,
                    id: Number(this.props.district.id.toString() + partyId.toString()),
                    m_votes: votesCount
                };

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

            votesEntered += Number(this.props.district.votedMultiCorrupt);

            if (this.props.district.votedMulti == votesEntered) {

                this.state.district.multiVoteActive = true;
                this.state.district.votedMultiTime = Date.now();
                this.props.onSaveVotes(this.state.district, this.state.votes);
            } else {
                console.log("klaida! klaida! klaida! ne tiek balsu!")
            }
        }.bind(this)
  },


  loadVotesData: function (parties) {
      var tempVotes = this.state.votes;


      parties.map(function (party, index) {
          tempVotes[party.id] = {
              districts_id: this.props.district.id,
              party_id: party.id,
              id: Number(this.props.district.id.toString() + party.id.toString()),
              m_votes: ""
          }
      }.bind(this));

          if(this.props.district.multiVoteActive == false){
              this.props.district.multi_results.map(function (result, index) {
                tempVotes[result.party_id].m_votes = result.m_votes;
                console.log(tempVotes)

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