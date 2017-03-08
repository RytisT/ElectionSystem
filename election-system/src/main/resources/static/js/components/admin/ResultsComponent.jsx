var ResultsComponent = React.createClass( {

    resultsList: function () {
        return this.props.districts.map(function (district, index) {
            if (district.district_representatives != null) {
                var votedSingleDate = new Date( district.votedSingleTime );
                var year = votedSingleDate.getFullYear();
                var month = votedSingleDate.getMonth() + 1;
                var date = votedSingleDate.getDate();
                var hour = votedSingleDate.getHours();
                var minutes = "0" + votedSingleDate.getMinutes();
                var seconds = "0" + votedSingleDate.getSeconds();

// Will display time in 10:30:23 format
                if ( month < 10 ) { month = '0' + month; }
                if ( date < 10 ) { date = '0' + date; }
                var singleDate = year + '-' + month + '-' + date +"    "+ hour + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

                var votedMultiDate = new Date( district.votedMultiTime );
                var year = votedMultiDate.getFullYear();
                var month = votedMultiDate.getMonth() + 1;
                var date = votedMultiDate.getDate();
                var hour = votedMultiDate.getHours();
                if ( month < 10 ) { month = '0' + month; }
                if ( date < 10 ) { date = '0' + date; }
                var multiDate = year + '-' + month + '-' + date + '-' + hour;

                console.log(index);
                return (
                    <tr key={index}>
                        <td className="col-md-3">{district.title}</td>
                        <td className="col-md-1">{district.district_representatives.name}</td>
                        <td className="col-md-3">{singleDate}</td>
                        <td className="col-md-3">{multiDate}</td>
                        <td className="col-md-2"></td>
                    </tr>
                )
            } else {
                return (
                    <tr key={index}>
                        <td className="col-md-3">{district.title} apylinkėje atstovas nepridėtas</td>

                    </tr>
                )
            }
        }.bind(this))
    },


    render: function() {
        return(
            <div className="">
                <div className="panel panel-default">
                    <div className="panel-heading"><label htmlFor="basic-url">Ieškoti rezultatų: </label></div>
                    <div className=" panel-body input-group">
                        <span className="input-group-addon" id="basic-addon3">Apylinkės pavadinimas: </span>
                        <input type="text" className="form-control" id="SearchByTitle" onChange={this.props.onSearchQueryChange(this.props.searchQuery)}/>
                    </div>
                    <div id="ResultsSearchValidation" className="validationForm"><span>Naudojami netinkami simboliai.</span></div>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Apylinkė</th>
                        <th>Apylinkės atstovas</th>
                        <th>Vienmandatės apygardos rezultatų registravimo laikas</th>
                        <th>Daugiamandate apygardos rezultatų registravimo laikas</th>
                        <th>Atmesti</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.resultsList()}

                    </tbody>

                </table>
                <button id="Return" className="btn btn-success" style={{ marginRight: '20px' }}
                        onClick={this.props.onReturn}>Grįžti
                </button>
            </div>
        )
    }
});

window.ResultsComponent = ResultsComponent;