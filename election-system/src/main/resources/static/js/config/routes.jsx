var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var routes = (
    <Router history={hashHistory}>
    <Router>
    <Route path='/' component={App}>
        <IndexRoute component={ConstituenciesContainer} />
        <Route path="/stuff" component={Constituencies} />
        <Route path="/district/:distId" component={DistrictContainer} />
        <Route path="/Contacts" component={Constituencies} />
    </Route>
    </Router>
    </Router>
);

window.routes = routes;