import { createJob } from "../constants";
import React from "react";
import JobList from "./JobList";
import JobForm from "./Form";
import NavBar from "./Nav";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const routes = [
  { path: "/", element: <JobList /> },
  { path: "/jobForm", element: <JobForm /> },
];
const Home = () => {
  return (
    <main className="my-auto mx-auto px-auto w-screen h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/jobs/new" element={<JobForm />} />
        </Routes>
      </Router>
    </main>
  );
};

export default Home;
