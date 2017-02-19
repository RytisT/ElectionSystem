var Link = ReactRouter.Link;


var ConstituenciesComponent = React.createClass({



    render: function() {
        var _this = this;
        var constituenciesList = this.props.constituencies.map(function (constituency, index) {

            return(
                <tr key={index}>
                    <td>{constituency.title}</td>
                    <td><button type="button" className="btn btn-info" onClick={_this.props.onEditDistrict(constituency)}>Redaguoti apylinkes</button></td>
                    <td></td>
                    <td><button type="button" className="btn btn-danger" onClick={_this.props.onDelete(constituency)}>Trinti</button></td>
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
                            <td>

                            </td>
                                <td></td>
                        </tr>
                   </tbody>

               </table>
           </div>

       )
   }
});

ConstituenciesComponent.propTypes = {
    constituencies: React.PropTypes.array.isRequired
};

window.ConstituenciesComponent = ConstituenciesComponent;