var styles = {
    line: {
        borderBottom: '1px solid #888',
        margin: '20 0 20 0'
    },
    blue: {
        color: '#0080ff'
    }
};



var ResultsConstituenciesInfoComponent = React.createClass({
    render: function () {

        var votesCounter = function(){
            var totalVotes = 0;
            var singleVotes = 0;
            var singleCorrupt = 0;
            var multiVotes = 0;
            var multiCorrupt = 0;
            this.props.constituency.districts.map(function(district){
                totalVotes += district.number_of_voters;
                singleVotes += district.votedSingle;
                singleCorrupt += district.votedSingleCorrupt;
                multiVotes += district.votedMulti;
                multiCorrupt += district.votedMultiCorrupt;
            }.bind(this));
            return {"totalVotes": totalVotes, "singleVotes": singleVotes, "singleCorrupt": singleCorrupt, "multiVotes": multiVotes, "multiCorrupt": multiCorrupt};
        }.bind(this);
        console.log(this.props.constituency)
        var votesCount = votesCounter();
        console.log(votesCount);


        var progress = function() {
            var submittedDistricts = 0;
            var totalDistricts = 0;

                this.props.constituency.districts.map( function( district, index ) {
                    if ( district.multiVoteActive && district.singleVoteActive ) {
                        submittedDistricts += 1;
                    }
                }.bind( this ) )
                totalDistricts += this.props.constituency.districts.length;
            return { "submittedDistricts": submittedDistricts, "totalDistricts": totalDistricts };
        }.bind( this );

        var districtSubmitted = progress();
        var submittedPercentage = Math.floor( districtSubmitted["submittedDistricts"] / districtSubmitted["totalDistricts"] * 100 ) + "%";

        return (
            <div id="resultsConstituency">
                <h2 style={styles.blue}>{this.props.constituency.title} apygardos balsavimo informacija</h2>
                <div style={styles.line}></div>
                <div className="panel panel-default">
                    <div className="panel-heading"> <h4>Apygardų, užregistravusių balsus, skaičius: {districtSubmitted["submittedDistricts"]} / {districtSubmitted["totalDistricts"]}</h4></div>
                    <div className="panel-body ">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" role="progressbar"
                                 aria-valuenow={districtSubmitted} aria-valuemin="0" aria-valuemax="100" style={{ width: submittedPercentage }}>
                                {submittedPercentage}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.line}></div>
                <span id="resultsConstituencyInfo">Apygarda: </span><span>{this.props.constituency.title}</span>
                <br/>
                <br/>
                <span id="resultsConstituencyInfo">Rinkėjų skaičius apygardoje: </span><span>{votesCount.totalVotes}</span>
                <br/>
                <br/>
                <br/>
                <span id="resultsConstituencyInfo">Rinkėjų aktyvumas vienmandatėje: </span><span>{votesCount.singleVotes + ' (' + Math.round(votesCount.singleVotes / votesCount.totalVotes * 10000) / 100 + '%)'}</span>
                <br/>
                <span id="resultsConstituencyInfo">Sugadinti vienmandatės biuleteniai: </span><span>{votesCount.singleCorrupt}</span>
                <br/>
                <br/>
                <br/>
                <span id="resultsConstituencyInfo">Rinkėjų aktyvumas daugiamandatėje: </span><span>{votesCount.multiVotes + ' (' + Math.round(votesCount.multiVotes / votesCount.totalVotes * 10000) / 100 + '%)'}</span>
                <br/>
                <span id="resultsConstituencyInfo">Sugadinti daugiamandatės biuleteniai: </span><span>{votesCount.multiCorrupt}</span>
                <br/>
                <br/>
                <br/>
                <button id="ResultsConstituenciesInfoReturn"
                        className="btn btn-success"
                        style={{marginRight: '20px'}}
                        onClick={this.props.onReturnConstituenciesClick}
                >
                    Grįžti
                </button>
            </div>
        )
    }
});


ResultsConstituenciesInfoComponent.propTypes = {
    constituency: React.PropTypes.object.isRequired
};

window.ResultsConstituenciesInfoComponent = ResultsConstituenciesInfoComponent;
