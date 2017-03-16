var ConsolidatedMultiResultsComponent = React.createClass({

    render: function () {

        var Chart = function () {
            // Load the Visualization API and the corechart package.
            google.charts.load('current', {'packages':['corechart']});

            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);

            // Callback that creates and populates a data table,
            // instantiates the pie chart, passes in the data and
            // draws it.
            var _this = this
            function drawChart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Partijos pavadinimas');
                data.addColumn('number', 'Mandatų skaičius');

                _this.props.parties.map(function (party, index) {
                    data.addRows([[party.title, party.mandates]])
                }.bind(this));


                // Set chart options
                var options = {'title':'Partijos ir jų laimėtų mandatų skaičius',
                    'width':1000,
                    'height':600};

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
                chart.draw(data, options);
            }
        }.bind(this)

        var votesCount = function(party){
            var votesCount = 0;
            var totalVotes = 0;

            party.multi_results.map(function (result, index) {
                votesCount += result.m_votes;
            }.bind(this));

            this.props.constituencies.map(function (constit, index) {
                constit.districts.map(function(district, index){
                    totalVotes += district.votedMulti;
                }.bind(this))
            }.bind(this));

            return {"votesCount": votesCount, "totalVotes": totalVotes};
        }.bind(this);

        var candidatesList = this.props.parties.map(function (party, index) {
            var votesCounter = votesCount(party);
           return (
                <tr key={index}>
                    <td className="col-md-1">{index + 1}</td>
                    <td className="col-md-7">{party.title}</td>
                    <td className="col-md-2">{votesCounter["votesCount"]}</td>
                    <td className="col-md-2">{party.mandates}</td>
                </tr>
            );
        }.bind(this));

        return (
            <div className="">
                {Chart()}
                <div id="chart"></div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Nr.</th>
                        <th>Partija</th>
                        <th>Laimėtų balsų skaičius</th>
                        <th>Laimėti mandatai</th>
                    </tr>
                    </thead>
                    <tbody>
                    {candidatesList}
                    </tbody>
                </table>
            </div>
        )
    }
});


window.ConsolidatedMultiResultsComponent = ConsolidatedMultiResultsComponent;