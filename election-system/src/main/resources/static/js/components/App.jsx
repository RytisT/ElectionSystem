var styles = {};

var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;


var App = React.createClass( {
    render: function() {
        return (
            <div>
                <ul className="header">
                    <div id='left'>
                        <li id="home"><IndexLink to="/" className="glyphicon glyphicon-home"></IndexLink></li>
                    </div>
                    <div id='right'>
                        <li id="login"><Link to="/login" activeClassName="active">Administratorius</Link></li>
                        <li id="login2"><Link to="/replogin" activeClassName="active">Apylinkės atstovas</Link></li>
                    </div>
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
            </div>
        );
    }
});

window.App = App;
