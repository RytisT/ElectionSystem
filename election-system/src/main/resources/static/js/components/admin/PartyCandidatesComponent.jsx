var PartyCandidatesComponent = React.createClass({

    handleFileChange: function () {
        return function() {
            this.props.onFileChange(this.refs.file.files[0]);
        }.bind(this)
    },


    candidateList: function () {
        return this.props.candidates.map(function (candidate, index) {
            // date
            var d = new Date( candidate.date_of_birth );
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var date = d.getDate();
            if ( month < 10 ) { month = '0' + month; }
            if ( date < 10 ) { date = '0' + date; }
            var fullDate = year + '-' + month + '-' + date;

            return (
                <tr key={index}>
                    <td className="col-md-1">{candidate.name}</td>
                    <td className="col-md-2">{candidate.last_name}</td>
                    <td className="col-md-2">{fullDate}</td>
                    <td className="col-md-2">{candidate.personal_id}</td>
                    <td className="col-md-4">{candidate.description}</td>
                    <td className="col-md-1">{candidate.party_list_seat}</td>

                </tr>
            )
        }.bind(this))
    },

    render: function () {
        return <div>
            <input className="btn btn-block btn-primary btn-outline" onChange={this.handleFileChange()} ref="file" type="file"
            name="file" id="file-select"/>

            <div className="">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Vardas</th>
                        <th>Pavarde</th>
                        <th>Gimimo Data</th>
                        <th>Asmens Kodas</th>
                        <th>Aprasymas</th>
                        <th>Saraso Numeris</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.candidateList()}

                    </tbody>

                </table>
            </div>
        </div>
    }
});

window.PartyCandidatesComponent = PartyCandidatesComponent;