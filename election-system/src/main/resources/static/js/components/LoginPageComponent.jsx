var styles = {
    blue: {
        color: '#0080ff'
    },
};

var LoginPageComponent = React.createClass( {
    render: function() {

        return (
            <form className="Login" action="/#/admin">
                <h2>Prisijungimas</h2><br />

                <label><b>Vartotojo vardas</b></label>
                <input type="text" placeholder="Įveskit vartotojo vardą" required/>
                

                <label><b>Slaptažodis</b></label>
                <input type="password" placeholder="Įveskit varototojo slaptažodį" required/>
                
                
                
                <button id="onLogin" type="submit">Prisijungti</button>
                <button id="onCancel" type="button" className="cancelbtn" onClick={this.props.onCancelClick} >Atšaukti</button>

            </form>
        )
    }
});

LoginPageComponent.propTypes = {
};

window.LoginPageComponent = LoginPageComponent;