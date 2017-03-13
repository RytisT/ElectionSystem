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
        var singleActive = this.props.constituency.votedSingle + this.props.constituency.votedSingleCorrupt + ' (' + Math.round((this.props.constituency.votedSingle + this.props.constituency.votedSingleCorrupt) / this.props.constituency.number_of_voters * 10000) / 100 + '%)';
        var singleCorrupt = this.props.constituency.votedSingleCorrupt;

        var multiActive = this.props.constituency.votedMulti + this.props.constituency.votedMultiCorrupt + ' (' + Math.round((this.props.constituency.votedMulti + this.props.constituency.votedMultiCorrupt) / this.props.constituency.number_of_voters * 10000) / 100 + '%)';
        var multiCorrupt = this.props.constituency.votedMultiCorrupt;

        return (
            <div id="resultsConstituency">
                <h2 style={styles.blue}>Apygardos balsavimo informacija</h2>
                <div style={styles.line}></div>
                <span id="resultsConstituencyInfo">Apygarda: </span><span>{this.props.constituency.title}</span>
                <br/>
                <br/>
                <span id="resultsConstituencyInfo">Rinkėjų skaičius apygardoje: </span><span>{this.props.constituency.number_of_voters}</span>
                <br/>
                <br/>
                <br/>
                <span id="resultsConstituencyInfo">Rinkėjų aktyvumas vienmandatėje: </span><span>{singleActive}</span>
                <br/>
                <span id="resultsConstituencyInfo">Sugadinti vienmandatės biuleteniai: </span><span>{singleCorrupt}</span>
                <br/>
                <br/>
                <br/>
                <span id="resultsConstituencyInfo">Rinkėjų aktyvumas daugiamandatėje: </span><span>{multiActive}</span>
                <br/>
                <span id="resultsConstituencyInfo">Sugadinti daugiamandatės biuleteniai: </span><span>{multiCorrupt}</span>
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