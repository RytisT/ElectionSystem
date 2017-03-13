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
        if (this.props.district.singleVoteActive == true) {
            var votedSingleDate = new Date(this.props.district.votedSingleTime);
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
            if (month < 10) {
                month = '0' + month;
            }
            if (date < 10) {
                date = '0' + date;
            }
            var singleDate = year + '-' + month + '-' + date + "    " + hour + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

            var singleActive = this.props.district.votedSingle  + ' (' + Math.round(this.props.district.votedSingle / this.props.district.number_of_voters * 10000) / 100 + '%)';
            var singleCorrupt = this.props.district.votedSingleCorrupt;
        } else {
            var singleDate = 'Duomenys nepateikti';
            var singleActive = 'Duomenys nepateikti';
            var singleCorrupt = 'Duomenys nepateikti';
        }

        if (this.props.district.multiVoteActive == true) {
            var votedMultiDate = new Date(this.props.district.votedMultiTime);
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
            if (month < 10) {
                month = '0' + month;
            }
            if (date < 10) {
                date = '0' + date;
            }
            var multiDate = year + '-' + month + '-' + date + " " + hour + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

            var multiActive = this.props.district.votedMulti  + ' (' + Math.round(this.props.district.votedMulti / this.props.district.number_of_voters * 10000) / 100 + '%)';
            var multiCorrupt = this.props.district.votedMultiCorrupt;
        } else {
            var multiDate = 'Duomenys nepateikti';
            var multiActive = 'Duomenys nepateikti';
            var multiCorrupt = 'Duomenys nepateikti';
        }

        return (
            <div id="resultsDistrict">
                <h2 style={styles.blue}>Apylinkės balsavimo informacija</h2>
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
                <span id="resultsDistrictInfo">Rinkėjų aktyvumas vienmandatėje: </span><span>{singleActive}</span>
                <br/>
                <span id="resultsDistrictInfo">Sugadinti vienmandatės biuleteniai: </span><span>{singleCorrupt}</span>
                <br/>
                <span id="resultsDistrictInfo">Vienmandatės apylinkės balsų suvedimo laikas: </span><span>{singleDate}</span>
                <br/>
                <br/>
                <br/>
                <span id="resultsDistrictInfo">Rinkėjų aktyvumas daugiamandatėje: </span><span>{multiActive}</span>
                <br/>
                <span id="resultsDistrictInfo">Sugadinti daugiamandatės biuleteniai: </span><span>{multiCorrupt}</span>
                <br/>
                <span id="resultsDistrictInfo">Daugiamandatės apylinkės balsų suvedimo laikas: </span><span>{multiDate}</span>
                <br/>
                <br/>
                <br/>
                <button id="ResultsDistrictReturn"
                        className="btn btn-success"
                        style={{marginRight: '20px'}}
                        onClick={this.props.onReturnDistrictsClick}
                >
                    Grįžti
                </button>
            </div>
        )
    }
});


ResultsDistrictsInfoComponent.propTypes = {
    district: React.PropTypes.object.isRequired
};

window.ResultsDistrictsInfoComponent = ResultsDistrictsInfoComponent;