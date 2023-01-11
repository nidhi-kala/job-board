import { createJob } from "../constants";
import React from "react";
import JobList from "./JobList";
import JobForm from "./Form";

export default class Home extends React.Component {
  handleNewJob() {
    createJob({
      title: "third job",
      description: "lorem10",
    })
      .then((response) => console.log(response.json()))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <JobList />
        <JobForm />
      </div>
    );
  }
}
