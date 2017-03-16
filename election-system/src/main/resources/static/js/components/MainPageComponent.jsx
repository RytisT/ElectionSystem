var styles = {
    white: {
        color: '#fff'
    },
    padding: {
        padding: '10 20 10 20'
    },
    width: {
        width: '210px',
    },
    logOut: {
        padding: '0',
        fontSize: '14px'
    },
    menu: {
        background: '#111',
        color: '#fff',
        height: '66px',
        border: 'none',
        fontSize: '20px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
    },
    grey: {
        background: '#888',
    }
};

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
                    
                    <li><div id="ResultsMenu" className="btn-group" role="group" aria-label="..." >
                        <div className="btn-group" role="group">
                            <button id="ResultsMunu_Drop_Drop" type="button" className="btn btn-default dropdown-toggle" style={styles.menu}
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Rinkimų rezultatai <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" style={styles.grey}>
                                <li id="choise1"><Link to="/Results/constituencies" style={styles.width}>Apygardos</Link></li>
                                <li id="choise2"><Link to="/results/consolidatedSingle" style={styles.width}>Vienmandatės rezultatai</Link></li>
                                <li id="choise3"><Link to="results/consolidatedMulti" style={styles.width}>Daugiamandatės rezultatai</Link></li>
                                <li id="choise4"><Link to="/results/consolidated" style={styles.width}>Konsoliduoti rezultatai</Link></li>
                            </ul>
                        </div>
                    </div></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

window.MainPageComponent = MainPageComponent;