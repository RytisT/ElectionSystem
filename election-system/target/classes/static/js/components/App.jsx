var styles = {};

var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;


var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="text-center">Seimo Rinkimai</h1>
                <ul className="header">
                    <li id="home"><IndexLink to="/" className="glyphicon glyphicon-home"></IndexLink></li>
                    <li id="login"><Link to="/admin" activeClassName="active">Prisijungti</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

window.App = App;
