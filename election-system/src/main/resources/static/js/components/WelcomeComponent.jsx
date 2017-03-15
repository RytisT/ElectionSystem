
var WelcomeComponent = React.createClass( {
    render: function() {

        return (
            <div id="main">
                <a id="link" href="/#/main"><div className="jumbotron">
                    
                        <p id="leftVytis">
                            <img id="vytis" src="../images/vytis.png" alt="Vytis" height="300px" />
                        </p>
                        <h1 id="welcomeText">Hello, world!</h1>
                        <div className="clear"></div>
                    
                </div></a>
            </div>
        )
    }
});

//  <p><a className="btn btn-primary btn-lg" href="/#/main" role="button">Tęsti</a></p>


window.WelcomeComponent = WelcomeComponent;