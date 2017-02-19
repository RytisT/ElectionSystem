var SingleDistrictComponent = React.createClass({


render: function () {
    return (
        <tr key={this.props.key}>
            <td>{this.props.district.title}</td>
            <td>{this.props.district.number_of_voters}</td>
            <td>{this.props.district.address}</td>
            <td><DistrictRepresentativeComponent distRep={this.props.district.district_representatives} distId={this.props.district.id}/>
            </td>

            <td>
                <button type="button" className="btn btn-info">Redaguoti</button>
            </td>
            <td>
                <button type="button" className="btn btn-danger" onClick={this.props.onDelete(this.props.district)}>Trinti
                </button>
            </td>
        </tr>
    )
    }
});

window.SingleDistrictComponent = SingleDistrictComponent;