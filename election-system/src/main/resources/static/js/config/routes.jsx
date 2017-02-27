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
                    <Route path="/admin/parties" component={PartiesContainer} />
                    <Route path="/admin/party-candidates/:partyId" component={PartyCandidatesContainer} />
                    <Route path="/admin/contacts" component={PartiesContainer} />
                    <Route path="/admin/district/:distId" component={DistrictContainer} />
                    <Route path="/admin/candidates" component={CandidatesContainer} />
                    <Route path="/admin/candidates/add-candidate" component={AddCandidateContainer} />
                    <Route path="/admin/candidates/edit/:candidateId" component={EditCandidateContainer} />
                </Route>
                <Route path="/candidates" component={CandidatesContainer} />
        <Route path="/candidates/search" component={CandidatesSearchContainer} />
                <Route path="/parties" component={UserPartiesContainer} />
                <Route path="/party/description/:partyId" component={PartyDescriptionContainer} />
                <Route path="/partymember/description/:candidateId" component={MemberDescriptionContainer} />
                <Route path="/candidate/description/:candidateId" component={CandidateDescriptionContainer} />
                <Route path="/representative" component={RepresentativeContainer} />
            </Route>
        </Router>
    </Router>
);

window.routes = routes;