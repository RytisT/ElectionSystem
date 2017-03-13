var SingleDistrictContainer = React.createClass( {

    getInitialState: function() {
        return {
            bgColor: "white",
            isEditing: false,
            district: this.props.district,
            isChanged: false,
            fieldContainer: {
                address: "",
                number_of_voters: "",
                title: ""
            }
        };
    },

    handleHover: function () {
        return function () {
            this.state.bgColor == "white"
            ? this.setState({bgColor: "#ffee91"})
                : this.setState({bgColor: "white"})
        }.bind(this)
    },

    handleFieldChange: function( fieldName ) {
        return function( district ) {
            var tempConstituency = this.state.district;
            tempConstituency[fieldName] = district.target.value;
            if ( !this.state.isChanged ) {
                console.log( district )
                this.state.fieldContainer.title = this.state.district.title;
                this.state.fieldContainer.number_of_voters = this.state.district.number_of_voters;
                this.state.fieldContainer.address = this.state.district.address;
            }
            console.log( this.state.fieldContainer )
            this.setState( { district: tempConstituency, isChanged: true });
        }.bind( this );
    },

    handleEditDist: function() {

        if ( this.state.isEditing ) {
            this.setState( { isEditing: false })
            console.log(this.state.fieldContainer.title, this.state.fieldContainer.number_of_voters, this.state.fieldContainer.address)
            this.state.district.title = this.state.fieldContainer.title;
            this.state.district.number_of_voters = this.state.fieldContainer.number_of_voters;
            this.state.district.address = this.state.fieldContainer.address;
            this.forceUpdate()
        } else {
            this.setState( { isEditing: true })
            this.state.fieldContainer.title = this.state.district.title;
            this.state.fieldContainer.number_of_voters = this.state.district.number_of_voters;
            this.state.fieldContainer.address = this.state.district.address;
        }

    },

    handleSaveDist: function() {

        var name = $( "#District_name" ).val();
        var matches1 = name.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)" );
        if ( matches1 != null ) { $( '#District_name_Validation' ).hide( "slow" ); }
        else { $( '#District_name_Validation' ).hide( "slow" ); $( '#District_name_Validation' ).show( "slow" ) }

        var voters = $( "#Voters_Count" ).val();
        if ( voters < 1 || voters > 10000 ) {
            $( '#Voters_Count_Validation' ).hide( "slow" );
            $( '#Voters_Count_Validation' ).show( "slow" );
        }
        else { $( '#Voters_Count_Validation' ).hide( "slow" ) }
        
        var address = $( "#District_address" ).val();
        var matches3 = address.match( ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“\"!,.:;-? ()]$)" );
        if ( matches3 != null ) { $( '#District_address_Validation' ).hide( "slow" ); }
        else { $( '#District_address_Validation' ).hide( "slow" ); $( '#District_address_Validation' ).show( "slow" ) }

        if ( matches1 != null && matches3 != null  && ( voters > 0 && voters <= 10000 ) ) {
            axios.post( '/api/districts', this.state.district )
                .then( this.setState( { isEditing: false }) )
        };


    },

    render: function() {
        return (
            <SingleDistrictComponent district={this.props.district}
                                     color={this.state.bgColor}
                                     onHover={this.handleHover}
                onDelete={this.props.onDelete}
                onEditDist={this.handleEditDist}
                onSaveDist={this.handleSaveDist}
                isEditing={this.state.isEditing}
                onFieldChange={this.handleFieldChange}/>
        )
    }
});

window.SingleDistrictContainer = SingleDistrictContainer;