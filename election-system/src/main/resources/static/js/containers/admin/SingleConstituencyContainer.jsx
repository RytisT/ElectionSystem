var SingleConstituencyContainer = React.createClass( {

    getInitialState: function() {
        return {
            isEditing: false,
            constituency: this.props.constituency,
            isChanged: false,
            fieldContainer: ""
        };
    },


    handleFieldChange: function( fieldName ) {
        return function( constituency ) {
            var tempConstituency = this.state.constituency;
            tempConstituency[fieldName] = constituency.target.value;
            if ( !this.state.isChanged ) {
                this.setState( { fieldContainer: constituency.target.value })
            }
            this.setState( { constituency: tempConstituency, isChanged: true });
        }.bind( this );
    },

<<<<<<< HEAD
    handleEditConst: function (constitut) {
        console.log("keiciu redagavimo state'a")
        if (this.state.isEditing) {
            this.setState({isEditing: false})
=======
    handleEditConst: function( constitut ) {

        if ( this.state.isEditing ) {
            this.setState( { isEditing: false })
>>>>>>> c2d08959b56577bf8ef28e706200aae820d652e9
            this.state.constituency.title = this.state.fieldContainer;
            this.forceUpdate()
        } else {
            this.setState( { isEditing: true })
        }

    },

<<<<<<< HEAD
    handleSaveConst: function () {
        console.log("issaugau")
        axios.post('/api/constituencies', this.state.constituency)
            .then(this.setState({isEditing: false}))
=======
    handleSaveConst: function() {
        var name = $( "#ConstituencyName" ).val();
        var matches = name.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
        if ( matches != null ) {
            $( '#ConstituencyNameValidation' ).hide( "slow" );
            axios.post( '/api/constituencies', this.state.constituency )
                .then( this.setState( { isEditing: false }) )
        }
        else { $( '#ConstituencyNameValidation' ).hide( "slow" ); $( '#ConstituencyNameValidation' ).show( "slow" ) }       
>>>>>>> c2d08959b56577bf8ef28e706200aae820d652e9
    },

    render: function() {
        return (
            <SingleConstituencyComponent constituency={this.props.constituency}
                onEditDistrict={this.props.onEditDistrict}
                onEditConst={this.handleEditConst}
                onDeleteConst={this.props.onDeleteConst}
                onSaveConst={this.handleSaveConst}
                isEditing={this.state.isEditing}
                onCandidates={this.props.onCandidates}
                onFieldChange={this.handleFieldChange} />
        );


    }
});


window.SingleConstituencyContainer = SingleConstituencyContainer;