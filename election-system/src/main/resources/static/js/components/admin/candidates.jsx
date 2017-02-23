var candidates = React.createClass({

    onHandleFileChange: function(file){
        var data = new FormData();
        var header = { headers: {
            'Content-Type': 'multipart/form-data'}};
        data.append('file', file);
        console.log(file)

        axios.post("/uploadForm", data, header)
            .then(function (response) {
                    console.log(response)
                }

            )
},
    onFileChange : function(){
    this.onHandleFileChange(this.refs.file.files[0]);
},

    render: function () {
        return <div>
            <input className="btn btn-block btn-primary btn-outline" onChange={this.onFileChange} ref="file" type="file" name="file" id="file-select"/>
            </div>
    }
});

window.candidates = candidates;