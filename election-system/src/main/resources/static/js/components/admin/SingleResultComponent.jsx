var styles = {
    hidden: {
        display: 'none',
        float: 'right'
    },
};

var SingleResultComponent = React.createClass( {

    getInitialState: function() {
        return {
            district: this.props.district
        }
    },

    dateCounter: function( date ) {
        var votedDate = new Date( date );
        var year = votedDate.getFullYear();
        var month = votedDate.getMonth() + 1;
        var date = votedDate.getDate();
        if ( votedDate.getHours() < 10 ) {
            var hour = "0" + votedDate.getHours();
        } else {
            var hour = votedDate.getHours();
        }
        var minutes = "0" + votedDate.getMinutes();
        var seconds = "0" + votedDate.getSeconds();

        if ( month < 10 ) { month = '0' + month; }
        if ( date < 10 ) { date = '0' + date; }
        var finalDate = year + '-' + month + '-' + date + "    " + hour + ':' + minutes.substr( -2 ) + ':' + seconds.substr( -2 );

        return finalDate
    },
    cancelSingleVotes: function( district ) {
        return function() {
            district.singleVoteActive = false;
            district.votedSingleTime = null;
            axios.post( '/api/districts/', district )
                .then( resp => {
                    axios.get( '/api/districts/' + district.id )
                        .then( function( response ) {
                            this.setState( {
                                district: response.data,
                            });
                        }.bind( this ) )
                })
        }.bind( this )
    },

    cancelMultiVotes: function( district ) {
        return function() {
            district.multiVoteActive = false;
            district.votedMultiTime = null;
            axios.post( '/api/districts/', district )
                .then( resp => {
                    axios.get( '/api/districts/' + district.id )
                        .then( function( response ) {
                            this.setState( {
                                district: response.data,
                            });
                        }.bind( this ) )
                })
        }.bind( this )

    },

    singleVotes: function( district ) {
        if ( district.singleVoteActive ) {
            return <div>
                {this.dateCounter( district.votedSingleTime )}
                &nbsp; &nbsp; &nbsp;
                <button id={"x_singleVote" + this.props.district.id} type="button" className="btn btn-danger"
                    onClick={( event ) => {
                        var x = this.props.district.id;
                        var y = "#CancelSingleVote" + x;
                        var z = "#x_singleVote" + x
                        if ( $( y ).is( ":hidden" ) ) { $( y ).show(); $( z ).html( "Atšaukti" ) }
                        else { $( y ).hide(); $( z ).html( "Atmesti" ); }
                    } }>Atmesti
                </button>
                <button id={"CancelSingleVote" + this.props.district.id} style={styles.hidden} type="button" className="btn btn-danger"
                    onClick={this.cancelSingleVotes( district )}>
                    Patvirtinti
                </button>
            </div>
        } else {
            return <div>
                Rezultatai nepateikti
                </div>
        }

    },

    multiVotes: function( district ) {
        return district.multiVoteActive
            ? <div>
                {this.dateCounter( district.votedMultiTime )}
                &nbsp; &nbsp; &nbsp;
                <button id={"x_multiVote" + this.props.district.id} type="button" className="btn btn-danger"
                    onClick={( event ) => {
                        var x = this.props.district.id;
                        var y = "#CancelMultiVote" + x;
                        var z = "#x_multiVote" + x
                        if ( $( y ).is( ":hidden" ) ) { $( y ).show(); $( z ).html( "Atšaukti" ) }
                        else { $( y ).hide(); $( z ).html( "Atmesti" ); }
                    } }>Atmesti
                </button>
                <button id={"CancelMultiVote" + this.props.district.id} style={styles.hidden} type="button" className="btn btn-danger"
                    onClick={this.cancelMultiVotes( district )}>
                    Patvirtinti
                </button>
            </div>
            : <div>
                Laukiama rezultatų
            </div>
    },

    render: function() {
        return (
            <tr>
                {console.log()}
                <td className="col-md-2">{this.state.district.title}</td>
                <td className="col-md-2">{this.state.district.district_representatives.name + " " + this.props.district.district_representatives.last_name}</td>
                <td className="col-md-4">{this.singleVotes( this.state.district )}</td>
                <td className="col-md-4">{this.multiVotes( this.state.district )}</td>
            </tr>
        )
    }

});

window.SingleResultComponent = SingleResultComponent;
