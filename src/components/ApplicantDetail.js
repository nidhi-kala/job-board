const ApplicantDetail = (formData, setFormData) => {
  return (
    <div>
      <h2 className="text-lg">Applicant Location</h2>
      <div className="py-1 flex flex-col">
        <div>
          <input type="checkbox" value="anywhere" />
          <label htmlFor="anywhere">Anywhere</label>
        </div>
        <div>
          <input type="checkbox" value="north america" />
          <label htmlFor="anywhere">North America</label>
        </div>
        <div>
          <input type="checkbox" value="south america" />
          <label htmlFor="anywhere">South America</label>
        </div>
        <div>
          <input type="checkbox" value="europe" />
          <label htmlFor="anywhere">Europe</label>
        </div>
        <div>
          <input type="checkbox" value="asia" />
          <label htmlFor="anywhere">Asia</label>
        </div>
      </div>
      <div className="py-2">
        <label htmlFor="link">Apply Link</label>
        <input type="url" name="" id="" />
      </div>
      <div className="flex flex-col py-2">
        <label className="" htmlFor="">
          Experience Level
        </label>
        <select name="exp-level" id="">
          <option value="entry">Entry-Level</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid-level</option>
          <option value="senior">Senior</option>
          <option value="principal">Principal</option>
          <option value="architect">Architech</option>
        </select>
      </div>
    </div>
  );
};

export default ApplicantDetail;
