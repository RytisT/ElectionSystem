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
  }
};

var CandidatesComponent = React.createClass( {
    render: function() {

        return (
            <div className="container">
                <h1> Candidates </h1>
                <button className="btn btn-success" style={styles.space} onClick={this.props.onFindClick}  >Find Candidate</button>
                <button className="btn btn-success" onClick={this.props.onMainPageClick}  >Main page</button>               
            </div>
        )
    }
});

CandidatesComponent.propTypes = {
    onFindClick: React.PropTypes.func.isRequired,
    onMainPageClick: React.PropTypes.func.isRequired
};

window.CandidatesComponent = CandidatesComponent;