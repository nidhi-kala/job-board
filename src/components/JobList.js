import { BASE_URL } from "../constants";
import Job from "./JobSingle";
import React from "react";

export default class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          _id: 0,
          title: "No jobs created yet",
          description: "Job Description, Click new job to create",
        },
      ],
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
    return (
      <div>
        <h1>Number of jobs: {jobLength}</h1>

        {this.state.jobs.map((job) => (
          <Job key={job._id} job={job} jobLength={jobLength} />
        ))}
      </div>
    );
  }
}
