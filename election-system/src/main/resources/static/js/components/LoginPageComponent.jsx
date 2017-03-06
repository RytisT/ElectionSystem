var styles = {
    blue: {
        color: '#0080ff'
    },
};

// action="/#/admin"
var LoginPageComponent = React.createClass( {
    render: function() {

        return (
            <form className="Login" >
                <h2>Prisijungimas</h2><br />

                <label><b>Vartotojo vardas</b></label>
                <input id="inputAdminName" type="text" placeholder="Įveskit vartotojo vardą" maxLength="50" />
                <div id="AdminNameValidation" className="validationForm"><span>Prašom įvesti vartotoją.</span></div>

                <label><b>Slaptažodis</b></label>
                <input id="inputAdminPass" type="password" placeholder="Įveskit varototojo slaptažodį" maxLength="50" />
                <div id="AdminPassValidation" className="validationForm"><span>Prašom įvesti slaptažodį.</span></div>
                
                
                <button id="onLogin" type="button" onClick={this.props.onSubmitClick}>Prisijungti</button>
                <button id="onCancel" type="button" className="cancelbtn" onClick={this.props.onCancelClick} >Atšaukti</button>

            </form>
        )
    }
});

LoginPageComponent.propTypes = {  };

window.LoginPageComponent = LoginPageComponent;