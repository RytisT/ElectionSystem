var styles = {
    menu: {
        margin: '20 0 0 5',
        fontSize: '20px'
    },
    space: {
        margin: '0 20 0 0'
    },
    marginTop: {
        marginTop: '20px'
    },
    cursor: {
        cursor: 'pointer'
    },
    line: {
        borderBottom: '1px solid #888',
        margin: '20 0 20 0'
    },
    blue: {
        color: '#0080ff'
    },
    width: {
        width: '20px'
    }
};

var DistrictInfoComponent = React.createClass({

    render: function () {
        return (
            <div className="">
                <h2 style={styles.blue}> Apylinkės informacija </h2>
                <div style={styles.line}></div>
                <table className="table table-hover" id="districtInfo">
                    <tbody>
                    <tr>
                        <td>Apylinkės atstovas:</td>
                        <td>{this.props.district.district_representatives.name + " " + this.props.district.district_representatives.last_name}</td>
                    </tr>
                    <tr>
                        <td>Apylinkės pavadinimas:</td>
                        <td>{this.props.district.title}</td>
                    </tr>
                    <tr>
                        <td>Apylinkės adresas:</td>
                        <td>{this.props.district.address}</td>
                    </tr>
                    <tr>
                        <td>Apylinkės rinkėjų skaičius:</td>
                        <td>{this.props.district.number_of_voters}</td>
                    </tr>
                    </tbody>
                </table>
            </div>





        )
    }
});

window.DistrictInfoComponent = DistrictInfoComponent;