var styles = {
    line: {
        borderBottom: '1px solid #888',
        margin: '20 0 20 0'
    },
    blue: {
        color: '#0080ff'
    }
};


var CandidateDescriptionComponent = React.createClass({
    render: function () {

        return (
            <div id="description">
                <h2 style={styles.blue}>Informacija apie kandidatą</h2>
                <div style={styles.line}></div>

                <span id="cdtitle">Vardas:  </span><span>{this.props.candidate.name}</span><br />
                <span id="cdtitle">Pavardė: </span><span>{this.props.candidate.last_name}</span><br />
                <span id="cdtitle">Partinė priklausomybė: </span><span>{this.props.party.title}</span><br />
                <br />
                <span>{this.props.candidate.description}</span><br /><br />
                <button id="CandidateDescriptionCancel" className="btn btn-success" style={{marginRight: '20px'}}
                        onClick={this.props.onCancelClick}>Grįžti
                </button>
            </div>
        )
    }
});

//<span id="cdtitle">Partinė priklausomybė: </span><span>{this.props.party.title}</span><br />

CandidateDescriptionComponent.propTypes = {
    candidate: React.PropTypes.object.isRequired,
    party: React.PropTypes.object.isRequired
};

window.CandidateDescriptionComponent = CandidateDescriptionComponent;