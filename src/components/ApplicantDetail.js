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
          <label htmlFor="north america">North America</label>
        </div>
        <div>
          <input type="checkbox" value="south america" />
          <label htmlFor="south america">South America</label>
        </div>
        <div>
          <input type="checkbox" value="europe" />
          <label htmlFor="europe">Europe</label>
        </div>
        <div>
          <input type="checkbox" value="asia" />
          <label htmlFor="asia">Asia</label>
        </div>
      </div>
      <div className="py-2">
        <label htmlFor="link">Apply Link</label>
        <input type="url" name="link" id="" />
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
