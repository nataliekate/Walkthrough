import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: ''
    };

    this.state = this.initialState;
  };

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  };

  submitForm = () => {
    if(this.state.job && this.state.name) {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    } else {
      document.getElementById("alertMessage").style.display = "";
    }
  };

  render() {
    const { name, job } = this.state;

    return (
      <div className="container">
        <div id="alertMessage" className="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Job</label>
            <input
              className="form-control"
              type="text"
              name="job"
              value={job}
              onChange={this.handleChange} />
          </div>
          <input
            type="button"
            value="Submit"
            class="btn btn-primary"
            onClick={this.submitForm} />
        </form>
      </div>
    )
  };
}

export default Form;