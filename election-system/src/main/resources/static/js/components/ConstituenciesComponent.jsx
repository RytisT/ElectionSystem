var Link = ReactRouter.Link;


var ConstituenciesComponent = React.createClass({



    render: function() {
        var constituenciesList = this.props.constituencies.map(function (constituency, index) {

            return(
                <SingleConstituencyContainer constituency={constituency}
                                             key={index}
                                             onEditDistrict={this.props.onEditDistrict}
                                             onDeleteConst ={this.props.onDeleteConst}
                                             onFieldChange = {this.props.onFieldChange}/>
            );
        }.bind(this));


        return(
           <div className="">
               <table className="table table-striped">
                   <thead>
                    <tr>
                       <th>Apygarda</th>
                        <th>Apylinkes</th>
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