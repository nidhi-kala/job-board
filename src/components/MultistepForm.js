import { ReactElement, useState } from "react";

const MultistepForm = () => {
  const [step, setStep] = useState(0);
  const formTitles = [
    "jobDetail",
    "applicantDetail",
    "salaryInfo",
    "contactAndSubmit",
  ];
  const buttonHandler = (direction) => {
    if (step > 0 && direction === "prev") {
      setStep((currStep) => currStep - 1);
    }
    if (step < formTitles.length - 1 && direction === "next") {
      setStep((currStep) => currStep + 1);
      console.log(step < formTitles.length - 1);
    }
  };

  return (
    <div>
      <form action="">
        <div></div>
        <div className="form-cont">
          <div className="header">
            <h1> {formTitles[step]} </h1>
          </div>
          <div className="body"></div>
          <div className="footer">
            <input
              type="button"
              value="Prev"
              onClick={() => buttonHandler("prev")}
            />

            <input
              type="button"
              value="Next"
              onClick={() => buttonHandler("next")}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MultistepForm;
