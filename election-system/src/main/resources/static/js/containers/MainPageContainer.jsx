var MainPageContainer = React.createClass({


    // admin mygtuko paspaudimo action
    handleAdmin() {
        this.context.router.push('/admin');
    },

    // Representatives mygtuko paspaudimo action
    handleRepresentatives() {
        this.context.router.push('/Representatives');
    },

    // Apylinkių/apygardų rezultatų nuorodos paspaudimo action
    handleResultsConstituencies() {
        this.context.router.push('Results/constituencies')
    },

    // Kandidatu nuorodos paspaudimo action
    handleCandidates() {
        this.context.router.push('/Candidates');
    },

    // Partiju nuorodos paspaudimo action
    handleParties() {
        this.context.router.push('/Parties');
    },


    render: function () {
        return <MainPageComponent onAdminClick={this.handleAdmin}
                                  onRepresentativesClick={this.handleRepresentatives}
                                  onCandidatesClick={this.handleCandidates}
                                  onPartiesClick={this.handleParties}
                                  onResultsConstituenciesClick={this.handleResultsConstituencies}
        />
    }
});

MainPageContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.MainPageContainer = MainPageContainer;