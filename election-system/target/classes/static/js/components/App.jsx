var styles = {
    padding5: {
        margin: '0 0 0 0'
    },
};

var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;



var App = React.createClass( {
    render: function() {
        return (
            <div>
                <h1 className="text-center">Seimo Rinkimai</h1>
                <ul className="header">
                    <li><IndexLink to="/"  className="glyphicon glyphicon-home" style={styles.padding5}></IndexLink></li>
                    <li><Link to="/admin" activeClassName="active">Prisijungti</Link></li>                    
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

window.App = App;


//<div>
//<h1 className="text-center">Administratoriaus puslapis</h1>
//<ul className="header">
//    <li><IndexLink to="/" activeClassName="active">Apygardos/Apylinkes</IndexLink></li>
//    <li><Link to="/stuff" activeClassName="active">Partijos</Link></li>
//    <li><Link to="/Contacts" activeClassName="active">Balsavimu duomenys</Link></li>
//</ul>
//<div className="content">
//    {this.props.children}
//</div>
//</div>