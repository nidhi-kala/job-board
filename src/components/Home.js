import { createJob } from "../constants";
import React from "react";
import JobList from "./JobList";
export default class Home extends React.Component {
  handleNewJob() {
    let newJob = createJob({
      title: "third job",
      description: "lorem10",
    })
      .then((response) => console.log(response.json()))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleNewJob}>New Job</button>
        <JobList />
      </div>
    );
  }
}
