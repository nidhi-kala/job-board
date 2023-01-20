import React from "react";

const JobDetails = ({ formData, changeHandler, checkedHandler }) => {
  const employmentTypes = {
    "full-time": "Full Time",
    "part-time": "Part Time",
    contract: "Contract",
    temporary: "Temporary",
    internship: "Intership",
  };

  return (
    <div
      className="flex flex-col w-full
    "
    >
      <input
        required
        className="px-3 py-3 rounded my-3"
        type="text"
        placeholder="Title"
        onChange={changeHandler}
        value={formData.title}
        name="title"
      />
      <textarea
        required
        className="px-3 py-3 rounded my-3"
        placeholder="Description"
        onChange={changeHandler}
        value={formData.description}
        type="text"
        name="description"
      />
      <div className="flex flex-col">
        <h2 className="pb-2 pt-3">Employment Type</h2>
        {Object.entries(employmentTypes).map(([type, label], key) => {
          return (
            <div key={key} className="flex flex-row mx-2">
              <input
                className="mx-2"
                type="checkbox"
                onChange={checkedHandler}
                checked={formData.employmentType[type]}
                name="employmentType"
                value={type}
              />
              <label htmlFor="employmentType" onChange={checkedHandler}>
                {label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobDetails;
