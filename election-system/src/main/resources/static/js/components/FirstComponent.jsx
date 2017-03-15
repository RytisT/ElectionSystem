var FirstComponent = React.createClass( {
    render: function() {

        return (
            <div>
                <div className="jumbotron">
                <h1>Rinkimų Sistema</h1>
                <p>Rinkimų sistema skirta informuoti visuomenę apie Seimo rinkimų rezultatus.</p>    
                <p>Rinkimų naktį, kiekviena apylinkė gali registruoti suskaičiuotus balsus.
                Visuomenei skirta sistemos dalis tuomet rodo balsų skaičiavimo progresą bei rinkimų rezultatus. 
                Rezultatus apima daugiamandatės ir vienmandatės laimėtojai.</p>
              </div>
            </div>
        )
    }
});

window.FirstComponent = FirstComponent;