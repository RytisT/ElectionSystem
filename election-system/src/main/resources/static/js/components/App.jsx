var styles = {
    white: {
        color: '#fff'
    },
    padding: {
        padding: '10 20 10 20'
    },
    logOut: {
        padding: '0',
        fontSize: '14px'
    },
};

var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var App = React.createClass( {
    render: function() {
        return (
            <div>
                <ul className="header2">
                    <li id="home"><IndexLink to="/" className="glyphicon glyphicon-home" style={styles.white}></IndexLink></li>

                    <div id="loginMenu" className="btn-group" role="group" aria-label="..." >
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Prisijungti <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li id="login"><Link to="/login" style={styles.padding}>Administratorius</Link></li>
                                <li id="login2"><Link to="/replogin" style={styles.padding}>Apylinkės atstovas</Link></li>
                            </ul>
                        </div>
                    </div>
                    <li id="logOut" style={styles.logOut}><Link to="/main" style={styles.white} onClick={( event ) => {
                                    
                                    $( '#logOut' ).hide( "slow" )
                                    $( '#loginMenu' ).show( "slow" );
                                   

                                }}>Atsijungti</Link></li>

                    <div className='clear'></div>
                </ul>

                <div className="content">
                    {this.props.children}
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="copyright">© 2017 CodeCamp MPTSP</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
});

window.App = App;
