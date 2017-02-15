var Link = ReactRouter.Link;


var Constituencies = React.createClass({



    render: function() {
        console.log("aa");
        var _this = this;
        var constituenciesList = this.props.constituencies.map(function (constituency, index) {
            console.log(constituency.title);

            return(
                <tr key={index}>
                    <td>{constituency.title}</td>
                    <td><button type="button" className="btn btn-info" onClick={_this.props.onEditDistrict(constituency)}>Redaguoti apylinkes</button></td>
                    <td></td>
                    <td><button type="button" className="btn btn-danger" onClick={_this.props.onDeleteConst(constituency)}>Trinti</button></td>
                </tr>
            );
        });


        return(
           <div className="">
               <table className="table table-striped">
                   <thead>
                    <tr>
                       <th>Apygarda</th>
                        <th>Apylinkes</th>
                        <th></th>
                       <th>Trinti</th>
                    </tr>
                   </thead>
                   <tbody>
                        {constituenciesList}
                        <tr>
                            <form >
                                <td>
                                    <input placeholder="Apygardos Pavadinimas" value={this.props.constName} type="text" />
                                </td>
                                <td></td>
                                <td>
                                    <button className="btn btn-block btn-success" type="submit">Continue</button>
                                </td>
                                <td></td>

                            </form>
                        </tr>
                   </tbody>

               </table>
           </div>

       )
   }
});

Constituencies.propTypes = {
    constituencies: React.PropTypes.array.isRequired
};

window.Constituencies = Constituencies;