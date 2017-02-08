var MainPageComponent = React.createClass( {
    render: function() {

        return (
            <div className="container">
                <h1> Election system </h1>
                <button className="btn btn-success" onClick={this.props.onAdminClick}  >Admin</button>
                <button className="btn btn-success" onClick={this.props.onRepresentativesClick}  >Representatives</button>
            </div>
        )
    }
});

MainPageComponent.propTypes = {
    onAdminClick: React.PropTypes.func.isRequired,
    onRepresentativesClick: React.PropTypes.func.isRequired
};

window.MainPageComponent = MainPageComponent;