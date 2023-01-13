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
    <div className="flex">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-2/5 bg-slate-800 text-cyan-500 py-10 h-screen align-middle"
      >
        <div className="w-full flex justify-center align-middle py-10">
          <input
            className="w-5/6 bg-black py-2 rounded"
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-center align-middle py-10">
          <textarea
            className="w-5/6 bg-black py-2 rounded"
            placeholder="Description"
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="w-full  flex justify-center align-middle py-10">
          <input
            className="cursor-pointer border-gray-500 bg-black w-1/3 py-3 rounded text-xl"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      <div className="w-3/5">
        <h2>Preview</h2>
      </div>
    </div>
  );
};

export default JobForm;
