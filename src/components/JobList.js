import { BASE_URL } from "../constants";
import Job from "./JobSingle";
import React from "react";

export default class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }
  componentDidMount() {
    fetch(`${BASE_URL}/jobs`)
      .then((response) => response.json())
      .then((jobs) => {
        if (jobs.length > 0) {
          this.setState({
            jobs: jobs,
          });
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    let jobLength = this.state.jobs.length;
    let h1Text =
      jobLength > 0 ? `Number Of Jobs: ${jobLength} ` : "no jobs founds";

    return (
      <div>
        <h1> {h1Text} </h1>
        {this.state.jobs.map((job) => (
          <Job key={job._id} job={job} jobLength={jobLength} />
        ))}
      </div>
    );
  }
}
