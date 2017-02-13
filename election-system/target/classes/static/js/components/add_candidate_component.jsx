var AddCandidateComponent = React.createClass( {
    render: function() {
        return (
            <form>
                <h3>Add new candidate</h3>

                <label>Name:</label><br />
                <input className="form-control" type="text" value={this.props.candidate.name} onChange={this.props.onFieldChange( 'name' )} /><br />
                <label>Last Name</label><br />
                <input className="form-control" type="text" value={this.props.candidate.last_name} onChange={this.props.onFieldChange( 'last_name' )} /><br />
                <label>Date Of Birth:</label><br />
                <input className="form-control" type="text" value={this.props.candidate.date_of_birth} onChange={this.props.onFieldChange( 'date_of_birth' )} /><br />
                <label>Description:</label><br />
                <input className="form-control" type="text" value={this.props.candidate.description} onChange={this.props.onFieldChange( 'description' )} /><br />
                <button className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onSaveClick}  >Add</button>
                <button className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onCancelClick}  >Cancel</button>
            </form>
        )
    }
});

AddCandidateComponent.propTypes = {
    candidate: React.PropTypes.object.isRequired,
    onFieldChange: React.PropTypes.func.isRequired,
    onSaveClick: React.PropTypes.func.isRequired
};

window.AddCandidateComponent = AddCandidateComponent;