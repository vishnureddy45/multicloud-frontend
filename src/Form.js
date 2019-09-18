import React from "react";

export default class Form extends React.Component {
  state = {
    ami: "",
    instance_type: "",
    instance_name: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      ami: "",
      instance_type: "",
      instance_name: ""
    });
    this.props.onChange({
      ami: "",
      instance_type: "",
      instance_name: ""
    });
  };

  render() {
    return (
      <div className="container w-50">
        <br />
        <h1>Multicloud Provisioning</h1>
        <form>
          <div className="form-group">
            <label HTMLFor="ami">AMI</label>
            <input type="text" name="ami" value={this.state.ami} onChange={e => this.change(e)} className="form-control" id="ami"  placeholder="Enter AMI" />
          </div>
          <div className="form-group">
            <label HTMLFor="instance_type">Instance Type</label>
            <input type="text" name="instance_type" value={this.state.instance_type} onChange={e => this.change(e)} className="form-control" id="instance_type"  placeholder="Enter Instance Type" />
          </div>
          <div className="form-group">
            <label HTMLFor="instance_name">Instance Name</label>
            <input type="text" name="instance_name" value={this.state.instance_name} onChange={e => this.change(e)} className="form-control" id="instance_name"  placeholder="Enter Instance Name" />
          </div>
          
          <button  onClick={e => this.onSubmit(e)} className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
