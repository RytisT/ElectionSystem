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
        cursor: 'pointer',
        fontSize: '20px'
    },
    blue: {
        color: '#0080ff'
    }
};

var MainPageComponent = React.createClass( {
    render: function() {

        return (
            <div className="">
                <h2 style={styles.blue}>Rinkimų rezultatai ir sąrašai</h2>
                <div style={styles.line} ></div>

                <table className="table table-hover" id="menu">

                    <tbody>
                        <tr style={styles.rows}>Rinkimų apylinkių rezultatai</tr>
                        <tr style={styles.rows}>Rinkimų apygardų rezultatai</tr>
                        <tr style={styles.rows}>Vienmandatės rinkimų apygardos rezultatai</tr>
                        <tr style={styles.rows}>Daugiamandatės rinkimų apygardos rezultatai</tr>
                        <tr style={styles.rows}>Konsoliduoti rinkimų apygardos rezultatai</tr>
                        <tr onClick={this.props.onCandidatesClick} style={styles.rows}>Kandidatų sąrašas</tr>
                        <tr style={styles.rows}>Partijų sąrašas</tr>
                    </tbody>
                </table>




            </div>
        )
    }
});

MainPageComponent.propTypes = {
    onAdminClick: React.PropTypes.func.isRequired,
    onRepresentativesClick: React.PropTypes.func.isRequired,
    onCandidatesClick: React.PropTypes.func.isRequired
};

window.MainPageComponent = MainPageComponent;