var NoMatch = React.createClass({
    render: function () {
        return <div>Route did not match</div>;
    }
});

ReactDOM.render(routes, document.getElementById("root"));

