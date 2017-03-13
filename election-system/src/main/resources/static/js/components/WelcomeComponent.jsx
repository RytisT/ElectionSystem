
var WelcomeComponent = React.createClass( {
    render: function() {

        return (
            <div id="main">
                <div className="jumbotron">
                <h1>Hello, world!</h1>
                <p>...</p>
                <p><a className="btn btn-primary btn-lg" href="/#/main" role="button">Tęsti</a></p>                
              </div>
            </div>
        )
    }
});

window.WelcomeComponent = WelcomeComponent;