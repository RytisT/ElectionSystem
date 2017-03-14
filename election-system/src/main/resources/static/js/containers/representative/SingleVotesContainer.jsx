var SingleVotesContainer = React.createClass({

    getInitialState: function () {
        return {
            district: {
                votedMulti : ""
            },
            SingleCandidates: [],
            votes: []
        };
    },


    handleVotesChange: function(candidateId) {
        return function(votes) {
            var votesCount = votes.target.value;
            var tempVotes = this.state.votes;

            if(votesCount <= this.props.district.number_of_voters) {
                tempVotes[candidateId].vote = votesCount

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
                votesEntered += Number(vote.vote);
            }.bind(this))

            votesEntered += Number(this.state.district.votedSingleCorrupt);
            if (this.state.district.votedSingle == votesEntered) {
                $( '#SinglResultValidation' ).hide( "slow" );

                this.state.votes.map(function (vote, index) {
                        axios.post("api/single_results", vote)
                });

                axios.get("api/districts/" + this.props.district.id)
                    .then(function(response){
                        var thisDistrict = response.data;
                        thisDistrict.singleVoteActive = true;
                        thisDistrict.votedSingleTime = Date.now();
                        thisDistrict.votedSingle = this.state.district.votedSingle;
                        thisDistrict.votedSingleCorrupt = this.state.district.votedSingleCorrupt;

                        this.props.onSaveVotes(thisDistrict);
                        this.setState({district: thisDistrict})

                    }.bind(this))
            } else {
                console.log("klaida! klaida! klaida! ne tiek balsu!")
                $( '#SinglResultValidation' ).hide( "slow" );
                $( '#SinglResultValidation' ).show( "slow" );
            }
        }.bind(this)
    },


    loadVotesData: function (candidates) {
        var tempVotes = this.state.votes;

        candidates.map(function (candidate, index) {
            tempVotes[candidate.id] = {
                districts_id: this.props.district.id,
                candidates_id: candidate.id,
                vote: ""
            }
        }.bind(this));

        if(this.props.district.singleVoteActive == false){
            this.props.district.single_results.map(function (result, index) {
                tempVotes[result.candidates_id].vote = result.vote;
                tempVotes[result.candidates_id].id = result.id;
            }.bind(this))
        }
        return tempVotes;
    },



    componentWillMount: function() {
        axios.get(`api/candidates/search?constituency_id=` + this.props.constId)
            .then(res => {
                var tempVotes = this.loadVotesData(res.data);
                this.setState({
                    SingleCandidates: res.data,
                    votes: tempVotes,
                    district: this.props.district,
                });

            })
    },

    render: function () {
        return (
            <SingleVotesComponent SingleCandidates={this.state.SingleCandidates}
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


window.SingleVotesContainer = SingleVotesContainer;