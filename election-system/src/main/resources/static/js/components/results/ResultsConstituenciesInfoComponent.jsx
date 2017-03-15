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

        console.log(votesCounter);
        var votesCount = votesCounter;
        console.log(votesCounter);
        return (
            <div id="resultsConstituency">
                <h2 style={styles.blue}>Apygardos balsavimo informacija</h2>
                <div style={styles.line}></div>
                <span id="resultsConstituencyInfo">Apygarda: </span><span>{this.props.constituency.title}</span>
                <br/>
                <br/>
                <span id="resultsConstituencyInfo">Rinkėjų skaičius apygardoje: </span><span>{votesCounter.totalVotes}</span>
                <br/>
                <br/>
                <br/>
                <span id="resultsConstituencyInfo">Rinkėjų aktyvumas vienmandatėje: </span><span>{votesCounter.singleVotes + ' (' + Math.round(votesCounter.singleVotes / votesCounter.totalVotes * 10000) / 100 + '%)'}</span>
                <br/>
                <span id="resultsConstituencyInfo">Sugadinti vienmandatės biuleteniai: </span><span>{votesCounter.singleCorrupt}</span>
                <br/>
                <br/>
                <br/>
                <span id="resultsConstituencyInfo">Rinkėjų aktyvumas daugiamandatėje: </span><span>{votesCounter.multiVotes + ' (' + Math.round(votesCounter.multiVotes / votesCounter.totalVotes * 10000) / 100 + '%)'}</span>
                <br/>
                <span id="resultsConstituencyInfo">Sugadinti daugiamandatės biuleteniai: </span><span>{votesCounter.multiCorrupt}</span>
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
