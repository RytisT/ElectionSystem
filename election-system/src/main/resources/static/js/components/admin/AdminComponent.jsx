var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var AdminComponent = React.createClass({
    render: function () {

        return (

            <div>
                <ul className="header">
                    <li><IndexLink to="/admin" activeClassName="active">Apygardos/Apylinkes</IndexLink></li>
                    <li><Link to="/admin/stuff" activeClassName="active">Partijos</Link></li>
                    <li><Link to="/admin/contacts" activeClassName="active">Balsavimu duomenys</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }

});

window.AdminComponent = AdminComponent;