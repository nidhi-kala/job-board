import { createJob } from "../constants";
import { redirect, useNavigate } from "react-router-dom";
import MultistepForm from "./MultistepForm";
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
    <div className="grid grid-cols-3">
      <MultistepForm />
      <form
        onSubmit={handleSubmit}
        className="col-span-1 flex flex-col container  text-cyan-500 py-10 h-screen align-middle"
      >
        <div className="w-full flex justify-center align-middle py-10">
          <input
            className="w-5/6 py-3 px-3 rounded"
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-center align-middle py-10">
          <textarea
            className="w-5/6 px-3 py-3 rounded"
            placeholder="Description"
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-center align-middle py-10">
          <input
            className="cursor-pointer bg-cyan-700  w-1/3 py-3 rounded text-xl"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      <div className="col-span-2  h-full w-full flex flex-col py-10 px-20 justify-self-auto">
        <h2 className="text-4xl mb-2 py-5">{title}</h2>
        <p className="text-3xl mb-2">{description} </p>
      </div>
    </div>
  );
};

export default JobForm;
