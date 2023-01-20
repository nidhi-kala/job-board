import { useState } from "react";
import JobDetails from "./JobDetails";
import ApplicantDetail from "./ApplicantDetail";
import SalaryInfo from "./SalaryInfo";
import ContactSubmit from "./ContactSubmit";

const MultistepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    employmentType: {
      "full-time": false,
      "part-time": false,
      contract: false,
      temporary: false,
      internship: false,
    },
    applicantLocation: {
      anywhere: false,
      "north-america": false,
      "south-america": false,
      europe: false,
      asia: false,
    },
    link: "",
    expLevel: "",
    minSalary: "",
    maxSalary: "",
    salaryPeriod: "yearly",
    email: "",
  });

  const checkedHandler = (e) => {
    const { value, checked, name } = e.target;
    const oldValues = formData[name];

    const newValues = {
      ...oldValues,
      [value]: checked,
    };

    setFormData({
      ...formData,
      [name]: newValues,
    });
  };

  const formTitles = [
    "Job Details",
    "Applicant Details",
    "Salary Info",
    "Contact",
  ];
  const stepDisplay = () => {
    switch (step) {
      case 0:
        return (
          <JobDetails
            formData={formData}
            setFormData={setFormData}
            changeHandler={changeHandler}
            checkedHandler={checkedHandler}
          />
        );
        break;
      case 1:
        return (
          <ApplicantDetail
            formData={formData}
            setFormData={setFormData}
            changeHandler={changeHandler}
            checkedHandler={checkedHandler}
          />
        );
        break;
      case 2:
        return (
          <SalaryInfo
            formData={formData}
            setFormData={setFormData}
            changeHandler={changeHandler}
            checkedHandler={checkedHandler}
          />
        );
        break;
      case 3:
        return (
          <ContactSubmit
            formData={formData}
            setFormData={setFormData}
            changeHandler={changeHandler}
            checkedHandler={checkedHandler}
          />
        );
        break;
      default:
    }
  };
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buttonHandler = (direction) => {
    if (step > 0 && direction === "prev") {
      setStep((currStep) => currStep - 1);
    }
    if (step < formTitles.length - 1 && direction === "next") {
      setStep((currStep) => currStep + 1);
    }
  };

  return (
    <div className="flex">
      <form>
        <div className="h-screen w-full">
          <div className="text-2xl my-4">
            <h1> {formTitles[step]} </h1>
          </div>
          <div className="h-1/2 flex flex-col ">{stepDisplay()}</div>
          <div className="">
            <input
              type="button"
              value="Prev"
              onClick={() => buttonHandler("prev")}
              className={`cursor-pointer px-2 `}
            />
            <input
              type="button"
              value="Next"
              onClick={() => buttonHandler("next")}
              className={`cursor-pointer`}
            />
          </div>
        </div>
      </form>
      <div>
        <div>
          <h2>{formData.title}</h2>
          <ul>
            {Object.entries(formData.applicantLocation).map(
              ([location, value], key) => {
                if (value === true) {
                  return <li key={key}> {location} </li>;
                }
              }
            )}
          </ul>
          <ul>
            {Object.entries(formData.employmentType).map(
              ([type, value], key) => {
                if (value === true) {
                  return <li key={key}> {type} </li>;
                }
              }
            )}
          </ul>
          <div>{formData.expLevel === "none" ? " " : formData.expLevel}</div>
          <div>
            <p>{formData.description}</p>
          </div>
          <div>
            <p>{formData.link}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultistepForm;
