var styles = {};

var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;


var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="text-center" id="headerLogo">Seimo Rinkimai</h1>
                <ul className="header">
                    <li id="home"><IndexLink to="/" className="glyphicon glyphicon-home"></IndexLink></li>
                    <li id="login"><Link to="/login" activeClassName="active">Administratorius</Link></li>
                    <li id="login2"><Link to="/replogin" activeClassName="active">Apylinkės atstovas</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
                <div className="footer-bottom">
                	<div className="container">
                		<div className="row">
                			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                				<div className="copyright">
                					© 2017, CodeCamp
                				</div>
                			</div>
                		</div>
                	</div>
                </div>
            </div>
        );
    }
});

window.App = App;
