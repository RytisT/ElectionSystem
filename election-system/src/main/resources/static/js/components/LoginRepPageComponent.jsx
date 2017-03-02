var styles = {
    blue: {
        color: '#0080ff'
    },
};

var LoginRepPageComponent = React.createClass( {
    render: function() {

        return (
            <form className="Login" action="/#/representatives">
                <h2>Apylinkės atstovo prisijungimas</h2><br />

                <label><b>Vartotojo vardas</b></label>
                <input type="text" placeholder="Įveskit vartotojo vardą" required/>
                

                <label><b>Slaptažodis</b></label>
                <input type="password" placeholder="Įveskit varototojo slaptažodį" required/>
                
                
                
                <button id="onLogin2" type="submit">Prisijungti</button>
                <button id="onCancel2" type="button" className="cancelbtn" onClick={this.props.onCancelClick} >Atšaukti</button>

            </form>
        )
    }
});

LoginRepPageComponent.propTypes = {
};

window.LoginRepPageComponent = LoginRepPageComponent;