var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var MainPageComponent = React.createClass( {
    render: function() {

        return (
            <div>
                <ul className="header">
                    <li><IndexLink to="/main" activeClassName="active">Pradinis</IndexLink></li>
                    <li><Link to="/candidates" activeClassName="active">Kandidatų sąrašas</Link></li>
                    <li><Link to="/Parties" activeClassName="active">Partijų sąrašas</Link></li>
                    <li><Link to="/Results/constituencies" activeClassName="active">Rinkimų rezultatai</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

window.MainPageComponent = MainPageComponent;