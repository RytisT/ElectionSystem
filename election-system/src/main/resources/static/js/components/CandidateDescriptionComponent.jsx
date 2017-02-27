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
        
        var d = new Date( this.props.candidate.date_of_birth );
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        if ( month < 10 ) { month = '0' + month; }
        if ( date < 10 ) { date = '0' + date; }
        var fullDate = year + '-' + month + '-' + date;

        return (
            <div id="description">
                <h2 style={styles.blue}>Informacija apie kandidatą</h2>
                <div style={styles.line}></div>

                <span id="cdtitle">Vardas/Pavardė:  </span><span>{this.props.candidate.name} {this.props.candidate.last_name}</span><br />
                <span id="cdtitle">Gimimo data: </span><span>{fullDate}</span><br />
                <span id="cdtitle">Partinė priklausomybė (partijos Nr.): </span><span>{this.props.candidate.party_id}</span><br />
                <span id="cdtitle">Vieta partijos sąraše: </span><span>{this.props.candidate.party_list_seat}</span><br />
                <br />
                <span>{this.props.candidate.description}</span><br /><br />
                <button id="CandidateDescriptionCancel" className="btn btn-success" style={{marginRight: '20px'}}
                        onClick={this.props.onCancelClick}>Grįžti
                </button>
            </div>
        )
    }
});


CandidateDescriptionComponent.propTypes = {
    candidate: React.PropTypes.object.isRequired
};

window.CandidateDescriptionComponent = CandidateDescriptionComponent;