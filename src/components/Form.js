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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-slate-800 text-cyan-500 py-10 h-screen align-middle"
      >
        <div className="w-full bg-amber-200 flex justify-center align-middle px-20 py-10">
          <input
            className="w-1/2 bg-black py-2 rounded"
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full bg-amber-800 flex justify-center align-middle px-20 py-10">
          <textarea
            className="w-1/2 bg-black py-2 rounded"
            placeholder="Description"
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="w-full bg-amber-600 flex justify-center align-middle px-20 py-10">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default JobForm;
