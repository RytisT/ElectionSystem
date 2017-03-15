
var WelcomeComponent = React.createClass( {
    render: function() {

        return (
            <div id="main">
                <div className="jumbotron">
                    
                        <p id="leftVytis"><a href="/#/main">
                            <img id="vytis" src="../images/vytis.png" alt="Vytis" height="300px" />
                        </a></p>
                        <h1 id="welcomeText">Hello, world!</h1>
                        <div className="clear"></div>
                    
                </div>
            </div>
        )
    }
});

//  <p><a className="btn btn-primary btn-lg" href="/#/main" role="button">Tęsti</a></p>


window.WelcomeComponent = WelcomeComponent;