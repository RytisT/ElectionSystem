var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var AdminComponent = React.createClass({
    render: function () {

        return (

            <div>
                <ul className="header">
                    <li><IndexLink to="/admin" activeClassName="active">Apygardos/Apylinkės</IndexLink></li>
                    <li><Link to="/admin/parties" activeClassName="active">Partijos</Link></li>
                    <li><Link to="/admin/results" activeClassName="active">Balsavimų duomenys</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }

});

window.AdminComponent = AdminComponent;