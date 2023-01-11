import { createJob } from "../constants";
import React from "react";

export default class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    createJob({
      title: this.state.title,
      description: this.state.description,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Title </label>
          <input type="text" name="title" onChange={this.handleChange} />

          <label htmlFor=""> Description</label>
          <textarea
            type="text"
            name="description"
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
