var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var routes = (
    <Router history={hashHistory}>
        <Router>
            <Route path='/' component={App}>
                <IndexRoute component={WelcomeComponent} />
                <Route path="/admin" component={AdminComponent}>
                    <IndexRoute component={ConstituenciesContainer} />
                    <Route path="/admin/parties" component={PartiesContainer} />
                    <Route path="/admin/party-candidates/:partyId" component={PartyCandidatesContainer} />
                    <Route path="/admin/const-candidates/:constId" component={ConstituencyCandidatesContainer} />
                    <Route path="/admin/district/:distId" component={DistrictContainer} />
                    <Route path="/admin/candidates" component={CandidatesContainer} />
                    <Route path="/admin/candidates/add-candidate" component={AddCandidateContainer} />
                    <Route path="/admin/candidates/edit/:candidateId" component={EditCandidateContainer} />
                    <Route path="/admin/results" component={ResultsContainer} />

                </Route>

                <Route path="/" component={MainPageComponent}>
                    <IndexRoute component={MainPageComponent} />
                    <Route path="/main" component={FirstComponent} />
                    <Route path="/candidates" component={CandidatesContainer} />
                    <Route path="/parties" component={UserPartiesContainer} />
                    <Route path="/party/description/:partyId" component={PartyDescriptionContainer} />
                    <Route path="/partymember/description/:candidateId" component={MemberDescriptionContainer} />
                    <Route path="/candidate/description/:candidateId" component={CandidateDescriptionContainer} />
                    <Route path="/results/constituencies" component={ResultsConstituenciesContainer} />
                    <Route path="/results/constituencies/info/:constituencyId" component={ResultsConstituenciesInfoContainer} />
                    <Route path="/results/constituencies/multi/:constituencyId" component={ResultsConstituenciesMultiContainer} />
                    <Route path="/results/constituencies/single/:constituencyId" component={ResultsConstituenciesSingleContainer} />
                    <Route path="/results/districts/:constituencyId" component={ResultsDistrictsContainer} />
                    <Route path="/results/districts/info/:districtId" component={ResultsDistrictsInfoContainer} />
                    <Route path="/results/districts/multi/:districtId" component={ResultsDistrictsMultiContainer} />
                    <Route path="/results/districts/single/:districtId" component={ResultsDistrictsSingleContainer} />
                    <Route path="/results/consolidatedSingle" component={ConsolidatedSingleResultsContainer} />
                    <Route path="/results/consolidatedMulti" component={ConsolidatedMultiResultsContainer} />
                    <Route path="/results/consolidated" component={ConsolidatedResultsContainer} />



                </Route>

                <Route path="/Representatives/:repLogin" component={SubmitVotesContainer} />
                <Route path="/login" component={LoginPageContainer} />
                <Route path="/replogin" component={LoginRepPageContainer} />



            </Route>
        </Router>
    </Router>
);

window.routes = routes;