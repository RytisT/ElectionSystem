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

        return (
            <div id="info">
                <h2 style={styles.blue}>Informacija apie apylinkę</h2>
                <div style={styles.line}></div>
                <span id="cdtitle">Apylinkė:</span><span>{district.title}</span>
                <br/>
                <span id="cdtitle">Rinkėjų skaičius apylinkėje: </span><span>{district.number_of_voters}</span>
                <br/>
            </div>
        )
    }
});


ResultsDistrictsInfoComponent.propTypes = {
    district: React.PropTypes.object.isRequired
};

window.ResultsDistrictsInfoComponent = ResultsDistrictsInfoComponent;