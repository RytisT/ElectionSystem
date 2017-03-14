var SingleVotesContainer = React.createClass({

    getInitialState: function () {
        return {
            active: "",
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
                tempVotes[candidateId].votes = votesCount

                this.setState({votes: tempVotes})
                console.log(this.state.votes)
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
                votesEntered += Number(vote.votes);
            }.bind(this))

            votesEntered += Number(this.props.district.votedSingleCorrupt);

            if (this.props.district.votedSingle == votesEntered) {
                console.log("postinu");
                $( '#SinglResultValidation' ).hide( "slow" );
                this.state.district.SingleVoteActive = true;
                this.state.district.votedSingleTime = Date.now();
                axios.post("api/districts", this.state.district);
                this.state.votes.map(function (vote, index) {
                    axios.post("api/single_results", vote)
                })
                this.setState({active: true})
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
                id: Number(this.props.district.id.toString() + candidate.id.toString()),
                votes: ""
            }
        }.bind(this));

        if(this.props.district.singleVoteActive == false){
            this.props.district.single_results.map(function (result, index) {
                tempVotes[result.candidates_id].votes = result.votes;
                console.log(tempVotes)
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
                    active: this.props.district.singleVoteActive
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