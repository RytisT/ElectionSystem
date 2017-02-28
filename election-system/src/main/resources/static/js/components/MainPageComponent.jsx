var styles = {
    menu: {
        margin: '20 0 0 5',
        fontSize: '20px'
    },
    space: {
        margin: '0 20 0 0'
    },
    cursor: {
        cursor: 'pointer'
    },
    line: {
        borderBottom: '1px solid #888',
        margin: '20 0 20 0'
    },
    padding10: {
        padding: '20 0 20 0'
    },
    rows: {
        fontSize: '20px'
    },
    blue: {
        color: '#0080ff'
    },
    subList: {
        paddingLeft: '40px'
    }
};

var MainPageComponent = React.createClass( {
    render: function() {

        return (
            <div className="">
                <h2 style={styles.blue}>Rinkimų rezultatai ir sąrašai</h2>
                <div style={styles.line}></div>

                <table className="table table-hover" id="menu">

                    <tbody>
                        <tr id="MainPageConstituencies" style={styles.rows} onClick={( event ) => {
                            if ( $( '.list1' ).is( ":hidden" ) ) {
                                $( '.list1' ).show("slow");
                            } else {
                                $( '.list1' ).hide("slow");
                            }
                        }
                        }>
                            <td>Rinkiminių apygardų rezultatai</td>
                        </tr>
                        <tr className="list1" >
                            <td style={styles.subList}>Rinkėjų aktyvumas</td>
                        </tr>
                        <tr className="list1" >
                            <td style={styles.subList}>Balsų skaičiai daugiamandatėse</td>
                        </tr>
                        <tr className="list1" >
                            <td style={styles.subList}>Sugadinti daugiamandatės biuleteniai</td>
                        </tr>
                        <tr className="list1" >
                            <td style={styles.subList}>Balsų skaičiai kiekvienam vienmandatės kandidatui</td>
                        </tr>
                        <tr className="list1" >
                            <td style={styles.subList}>Sugadinti vienmandatės biuleteniai</td>
                        </tr>
                        <tr className="list1" >
                            <td style={styles.subList}>Apylinkių balsų skaičiavimo progresas</td>
                        </tr>
                        <tr className="list1" >
                            <td style={styles.subList}>Apylinkių sąrašas</td>
                        </tr>


                        <tr id="MainPageDistricts" style={styles.rows} onClick={( event ) => {
                            if ( $( '.list2' ).is( ":hidden" ) ) {
                                $( '.list2' ).show("slow");
                            } else {
                                $( '.list2' ).hide("slow");
                            }
                        }
                        }>
                            <td>Rinkiminių apylinkių rezultatai</td>
                        </tr>
                        <tr className="list2" >
                            <td style={styles.subList}>Apylinkės balsų įregistravimo laikas</td>
                        </tr>
                        <tr className="list2" >
                            <td style={styles.subList}>Rinkėjų aktyvumas</td>
                        </tr>
                        <tr className="list2" >
                            <td style={styles.subList}>Balsų skaičiai daugiamandatėse</td>
                        </tr>
                        <tr className="list2" >
                            <td style={styles.subList}>Sugadinti daugiamandatės biuleteniai</td>
                        </tr>
                        <tr className="list2" >
                            <td style={styles.subList}>Balsų skaičiai kiekvienam vienmandatės kandidatui</td>
                        </tr>
                        <tr className="list2" >
                            <td style={styles.subList}>Sugadinti vienmandatės biuleteniai</td>
                        </tr>


                        <tr id="MainPageSinglResults" style={styles.rows} onClick={( event ) => {
                            if ( $( '.list3' ).is( ":hidden" ) ) {
                                $( '.list3' ).show("slow");
                            } else {
                                $( '.list3' ).hide("slow");
                            }
                        }
                        }>
                            <td>Vienmandatės rinkimų apygardos rezultatai</td>
                        </tr>
                        <tr className="list3" >
                            <td style={styles.subList}>Išrinktų seimo narių sąrašas</td>
                        </tr>


                        <tr id="MainPageMultiResults" style={styles.rows} onClick={( event ) => {
                            if ( $( '.list4' ).is( ":hidden" ) ) {
                                $( '.list4' ).show("slow");
                            } else {
                                $( '.list4' ).hide("slow");
                            }
                        }
                        }>
                            <td>Daugiamandatės rinkimų apygardos rezultatai</td>
                        </tr>
                        <tr className="list4" >
                            <td style={styles.subList}>Laimėtų balsų skaičius</td>
                        </tr>
                        <tr className="list4" >
                            <td style={styles.subList}>Laimėtų balsų procentas nuo visų biuletenių</td>
                        </tr>
                        <tr className="list4" >
                            <td style={styles.subList}>Laimėtų mandatų skaičius</td>
                        </tr>


                        <tr id="MainPageConsolidatedResults" style={styles.rows} onClick={( event ) => {
                            if ( $( '.list5' ).is( ":hidden" ) ) {
                                $( '.list5' ).show("slow");
                            } else {
                                $( '.list5' ).hide("slow");
                            }
                        }
                        }>
                            <td>Konsoliduoti rinkimų rezultatai</td>
                        </tr>
                        <tr className="list5" >
                            <td style={styles.subList}>Partijų sąrašas ir laimėti mandatai</td>
                        </tr>
                            <tr className="list5" >
                            <td style={styles.subList}>Partijų laimėtų mandatų diagramos</td>
                        </tr>
                            <tr className="list5" >
                            <td style={styles.subList}>Būsimų seimo narių sąrašas</td>
                        </tr>


                        <tr id="MainPageCandidates" onClick={this.props.onCandidatesClick} style={styles.rows}>
                            <td>Kandidatų sąrašas</td>
                        </tr>
                            
                            
                        <tr id="MainPageParties" onClick={this.props.onPartiesClick} style={styles.rows}>
                            <td>Partijų sąrašas</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        )
    }
});

MainPageComponent.propTypes = {
    onAdminClick: React.PropTypes.func.isRequired,
    onRepresentativesClick: React.PropTypes.func.isRequired,
    onCandidatesClick: React.PropTypes.func.isRequired,
    onPartiesClick: React.PropTypes.func.isRequired
};

window.MainPageComponent = MainPageComponent;