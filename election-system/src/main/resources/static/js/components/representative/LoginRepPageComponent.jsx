var styles = {
    blue: {
        color: '#0080ff'
    },
};

var LoginRepPageComponent = React.createClass( {
    render: function() {

        return (
            <form className="Login">
                <h2>Apylinkės atstovo prisijungimas</h2><br />

                <label><b>Vartotojo vardas</b></label>
                <input id="inputUserName" type="text" placeholder="Įveskite vartotojo vardą" maxLength="50" />
                <div id="UserNameValidation" className="validationForm"><span>Prašom įvesti vartotoją.</span></div>

                <label><b>Slaptažodis</b></label>
                <input id="inputUserPass" type="password" placeholder="Įveskite varototojo slaptažodį" maxLength="50"/>
                <div id="UserPassValidation" className="validationForm"><span>Prašom įvesti slaptažodį.</span></div>
                
                
                <button id="onLogin2" type="button" onClick={this.props.onSubmitClick}>Prisijungti</button>
                <button id="onCancel2" type="button" className="cancelbtn" onClick={this.props.onCancelClick} >Atšaukti</button>

            </form>
        )
    }
});

LoginRepPageComponent.propTypes = {   };

window.LoginRepPageComponent = LoginRepPageComponent;