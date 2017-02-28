var CandidatesContainer = React.createClass({
    getInitialState: function () {
        return {
            searchQuery: "",
            candidate: {
                name: '',
                last_name: '',
                date_of_birth: '',
                description: ''
            },
            candidates: []
        };
    },

    componentWillMount: function () {
        var self = this;
        axios.get('/api/candidates')
            .then(function (response) {
                self.setState({
                    candidates: response.data
                });
            });
    },
    
    handleSearchQueryChange: function () {
        return function (newQuery) {
            this.setState({searchQuery: newQuery.target.value})
        }.bind(this)
    },

    // Description 
    handleCandidateDescription: function (candidate) {
        var self = this;
        return function () {
            self.context.router.push('/candidate/description/' + candidate.id);
        }
    },

    // Add 
    handleAdd() {
        this.context.router.push('/admin/candidates/add-candidate');
    },

    // Main page 
//    handleMainPage() {
//        this.context.router.push( '/' );
//    },

    // Cancel 
    handleCancelClick() {
        this.context.router.push('/');
    },

    // Edit candidate 
    handleCandidateEdit: function (candidate) {
        var self = this;
        return function () {
            self.context.router.push('/admin/candidates/edit/' + candidate.id);
        }
    },

    // Remove candidate 
    handleCandidateRemove: function (candidate) {
        var self = this;
        return function () {
            axios.delete('/api/candidates/' + candidate.id).then(function (response) {
                self.componentWillMount();
            });
        };
    },


    render: function () {
        return <CandidatesComponent candidates={this.state.candidates}
                                    onAddClick={this.handleAdd}
                                    onMainPageClick={this.handleMainPage}
                                    onEditItem={this.handleCandidateEdit}
                                    onDescriptionItemClick={this.handleCandidateDescription}
                                    onRemoveItem={this.handleCandidateRemove}
                                    onCancelClick={this.handleCancelClick}
        searchQuery={this.state.searchQuery}
        onSearchQueryChange={this.handleSearchQueryChange}
        />
    }
});

CandidatesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.CandidatesContainer = CandidatesContainer;