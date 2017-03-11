var styles = {
    line: {
        borderBottom: '1px solid #888',
        margin: '20 0 20 0'
    },
    blue: {
        color: '#0080ff'
    }
};


var ResultsDistrictsInfoComponent = React.createClass({
    render: function () {
        var votedSingleDate = new Date( this.props.district.votedSingleTime );
        var year = votedSingleDate.getFullYear();
        var month = votedSingleDate.getMonth() + 1;
        var date = votedSingleDate.getDate();
        if (votedSingleDate.getHours() < 10) {
            var hour = "0" + votedSingleDate.getHours();
        } else {
            var hour = votedSingleDate.getHours();
        }
        var minutes = "0" + votedSingleDate.getMinutes();
        var seconds = "0" + votedSingleDate.getSeconds();

        if ( month < 10 ) { month = '0' + month; }
        if ( date < 10 ) { date = '0' + date; }
        var singleDate = year + '-' + month + '-' + date +"    "+ hour + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        var votedMultiDate = new Date( this.props.district.votedMultiTime );
        var year = votedMultiDate.getFullYear();
        var month = votedMultiDate.getMonth() + 1;
        var date = votedMultiDate.getDate();
        if (votedMultiDate.getHours() < 10) {
            var hour = "0" + votedMultiDate.getHours();
        } else {
            var hour = votedMultiDate.getHours();
        }
        var minutes = "0" + votedMultiDate.getMinutes();
        var seconds = "0" + votedMultiDate.getSeconds();
        if ( month < 10 ) { month = '0' + month; }
        if ( date < 10 ) { date = '0' + date; }
        var multiDate = year + '-' + month + '-' + date + " " + hour + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        var singlePercent = this.props.district.votedSingle / this.props.district.number_of_voters * 100;
        var singlePercentRounded = Math.round(singlePercent*100)/100;
        var singlePercentCorrupt = this.props.district.votedSingleCorrupt / (this.props.district.votedSingle + this.props.district.votedSingleCorrupt) * 100;
        var singlePercentCorruptRounded = Math.round(singlePercentCorrupt*100)/100;
        var multiPercent = this.props.district.votedMulti / this.props.district.number_of_voters * 100;
        var multiPercentRounded = Math.round(multiPercent*100)/100;
        var multiPercentCorrupt = this.props.district.votedMultiCorrupt / (this.props.district.votedMulti + this.props.district.votedMultiCorrupt) * 100;
        var multiPercentCorruptRounded = Math.round(multiPercentCorrupt*100)/100;

        return (
            <div id="resultsDistrict">
                <h2 style={styles.blue}>Apylinkė balsavimo informacija</h2>
                <div style={styles.line}></div>
                <span id="resultsDistrictInfo">Apylinkė: </span><span>{this.props.district.title}</span>
                <br/>
                <span id="resultsDistrictInfo">Apylinkės adresas: </span><span>{this.props.district.address}</span>
                <br/>
                <span id="resultsDistrictInfo">Apylinkės atstovas: </span><span>{this.props.district.district_representatives.name} {this.props.district.district_representatives.last_name}</span>
                <br/>
                <br/>
                <br/>
                <span id="resultsDistrictInfo">Rinkėjų skaičius apylinkėje: </span><span>{this.props.district.number_of_voters}</span>
                <br/>
                <br/>
                <br/>
                <span id="resultsDistrictInfo">Vienmandatės apylinkės balsų suvedimo laikas: </span><span>{singleDate}</span>
                <br/>
                <br/>
                <span id="resultsDistrictInfo">Suskaičiuota galiojančių vienmandatės apylinkės biuletenių: </span><span>{this.props.district.votedSingle}</span>
                <br/>
                <span id="resultsDistrictInfo">Galiojančių vienmandatės apylinkės biuletenių dalis nuo visų apylinkės rinkėjų: </span><span>{singlePercentRounded}%</span>
                <br/>
                <br/>
                <span id="resultsDistrictInfo">Suskaičiuota sugadintų vienmandatės apylinkės biuletenių: </span><span>{this.props.district.votedSingleCorrupt}</span>
                <br/>
                <span id="resultsDistrictInfo">Sugadintų vienmandatės apylinkės biuletenių dalis nuo suskaičiuotų biuletenių: </span><span>{singlePercentCorruptRounded}%</span>
                <br/>
                <br/>
                <br/>
                <span id="resultsDistrictInfo">Daugiamandatės apylinkės balsų suvedimo laikas: </span><span>{multiDate}</span>
                <br/>
                <br/>
                <span id="resultsDistrictInfo">Suskaičiuota galiojančių daugiamandatės apylinkės biuletenių: </span><span>{this.props.district.votedMulti}</span>
                <br/>
                <span id="resultsDistrictInfo">Galiojančių daugiamandatės apylinkės biuletenių dalis nuo visų apylinkės rinkėjų: </span><span>{multiPercentRounded}%</span>
                <br/>
                <br/>
                <span id="resultsDistrictInfo">Suskaičiuota sugadintų daugiamandatės apylinkės biuletenių: </span><span>{this.props.district.votedMultiCorrupt}</span>
                <br/>
                <span id="resultsDistrictInfo">Sugadintų daugiamandatės apylinkės biuletenių dalis nuo suskaičiuotų biuletenių: </span><span>{multiPercentCorruptRounded}%</span>
                <br/>
            </div>
        )
    }
});


ResultsDistrictsInfoComponent.propTypes = {
    district: React.PropTypes.object.isRequired
};

window.ResultsDistrictsInfoComponent = ResultsDistrictsInfoComponent;