var styles = {
  menu: {
    margin: '20 0 0 5',
    fontSize: '20px'
  },
  space: {
      margin: '0 20 0 0'
  },
  cursor: {
      cursor: 'pointer'
  },
  line: {
      borderBottom: '1px solid #888',
      marginTop: '10px'
  }
};

var MainPageComponent = React.createClass( {
    render: function() {

        return (
            <div className="container">
                <h1> Election system </h1>
                <button className="btn btn-primary btn-lg" style={styles.space} onClick={this.props.onAdminClick}  >Admin</button>
                <button className="btn btn-primary btn-lg" onClick={this.props.onRepresentativesClick}  >Representatives</button>
                <div style={styles.line} ></div>
                <div> <p style={styles.menu}> Sąrašai </p> </div>
                <div>
                    <ul>
                        <li><a style={styles.cursor}>Rinkimų apylinkių rezultatai</a></li>
                        <li><a style={styles.cursor}>Rinkimų apygardų rezultatai</a></li>
                        <li><a style={styles.cursor}>Vienmandatės rinkimų apygardos rezultatai</a></li>
                        <li><a style={styles.cursor}>Daugiamandatės rinkimų apygardos rezultatai</a></li>
                        <li><a style={styles.cursor}>Konsoliduoti rinkimų apygardos rezultatai</a></li>
                        <li><a onClick={this.props.onCandidatesClick} style={styles.cursor}>Kandidatai</a></li>
                        <li><a style={styles.cursor}>Partijos</a></li>
                    </ul>
                </div>
            </div>
        )
    }
});

MainPageComponent.propTypes = {
    onAdminClick: React.PropTypes.func.isRequired,
    onRepresentativesClick: React.PropTypes.func.isRequired,
    onCandidatesClick: React.PropTypes.func.isRequired
};

window.MainPageComponent = MainPageComponent;