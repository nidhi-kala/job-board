const ApplicantDetail = ({
  formData,
  setFormData,
  checkedHandler,
  changeHandler,
}) => {
  const locations = {
    anywhere: "Anywhere",
    "north-america": "North America",
    "south-america": "South America",
    europe: "Europe",
    asia: "Asia",
  };
  return (
    <div>
      <h2 className="text-lg">Applicant Location</h2>
      <div className="py-1 flex flex-col">
        {Object.entries(locations).map(([location, label], key) => {
          return (
            <label key={key} htmlFor="applicantLocation">
              <input
                type="checkbox"
                onChange={checkedHandler}
                checked={formData.applicantLocation[location]}
                name="applicantLocation"
                value={location}
              />
              {label}
            </label>
          );
        })}
      </div>
      <div className="py-2">
        <label htmlFor="link">Apply Link</label>
        <input
          type="url"
          name="link"
          id=""
          onChange={changeHandler}
          value={formData.link}
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="" htmlFor="">
          Experience Level
        </label>
        <select
          name="exp-level"
          id=""
          onChange={(e) => {
            setFormData({ ...formData, expLevel: e.target.value });
          }}
        >
          <option value="none">Select an option </option>
          <option value="entry-level">Entry-Level</option>
          <option value="junior">Junior</option>
          <option value="mid-level">Mid-level</option>
          <option value="senior">Senior</option>
          <option value="principal">Principal</option>
          <option value="architect">Architech</option>
        </select>
      </div>
    </div>
  );
};

export default ApplicantDetail;
