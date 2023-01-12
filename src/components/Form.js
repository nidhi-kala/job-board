import { createJob } from "../constants";
import { redirect, useNavigate } from "react-router-dom";

import React from "react";
import { useState } from "react";

const JobForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createJob({
      title: title,
      description: description,
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title </label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description"> Description</label>
        <textarea
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default JobForm;
