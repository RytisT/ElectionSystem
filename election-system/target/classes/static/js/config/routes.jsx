var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var routes = (
    <Router history={hashHistory}>
    <Router>
    <Route path='/' component={App}>
        <IndexRoute component={MainPageContainer} />
        <Route path="/admin" component={AdminComponent}>
            <IndexRoute component={ConstituenciesContainer} />
            <Route path="/admin/stuff" component={ConstituenciesContainer} />
            <Route path="/admin/contacts" component={ConstituenciesContainer} />
            <Route path="/admin/district/:distId" component={DistrictContainer} />
            <Route path="/admin/candidates" component={CandidatesContainer} />
            <Route path="/admin/candidates/add-candidate" component={AddCandidateContainer} />
            <Route path="/admin/candidates/edit/:candidateId" component={EditCandidateContainer} />
        </Route>
        <Route path="/candidates" component={CandidatesContainer} />
        <Route path="/candidate/description/:candidateId" component={CandidateDescriptionContainer} />
    </Route>
    </Router>
    </Router>
);

window.routes = routes;