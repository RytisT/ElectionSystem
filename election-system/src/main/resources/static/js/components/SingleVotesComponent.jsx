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

var SingleVotesComponent = React.createClass({

    render: function () {
        return (
            <div className="">
                <h2 style={styles.blue}> Vienmandatininkų rezultatų suvedimas </h2>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        )
    }
});

window.SingleVotesComponent = SingleVotesComponent;