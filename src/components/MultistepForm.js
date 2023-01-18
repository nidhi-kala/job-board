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
    employmentType: "full-time",
    applicantLocation: [],
    link: "",
    expLevel: "",
    minSalary: 0,
    maxSalary: 0,
    salaryPeriod: "yearly",
    email: "",
  });
  const formTitles = [
    "Job Details",
    "Applicant Details",
    "Salary Info",
    "Contact",
  ];
  const stepDisplay = () => {
    switch (step) {
      case 0:
        return <JobDetails formData={formData} setFormData={setFormData} />;
        break;
      case 1:
        return (
          <ApplicantDetail formData={formData} setFormData={setFormData} />
        );
        break;
      case 2:
        return <SalaryInfo formData={formData} setFormData={setFormData} />;
        break;
      case 3:
        return <ContactSubmit formData={formData} setFormData={setFormData} />;
        break;
      default:
        return <JobDetails formData={formData} setFormData={setFormData} />;
    }
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
    <div>
      <form>
        <div></div>
        <div className="form-cont">
          <div className="text-2xl my-4">
            <h1> {formTitles[step]} </h1>
          </div>
          <div className="body">{stepDisplay()}</div>
          <div className="my-4">
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
    </div>
  );
};

export default MultistepForm;
