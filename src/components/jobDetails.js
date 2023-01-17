const JobDetails = () => {
  return (
    <div>
      <input
        required
        className="px-3 py-3 rounded my-3"
        type="text"
        placeholder="Title"
      />
      <textarea
        required
        className="px-3 py-3 rounded my-3"
        placeholder="Description"
        type="text"
        name="description"
      />
      <div className="flex flex-col">
        <h2>Employment Type</h2>
        <div>
          <input type="radio" name="" id="" value="full-time" />
          <label htmlFor="">Full Time</label>
        </div>
        <div>
          <input type="radio" name="" id="" value="part-time" />
          <label htmlFor="">Part Time</label>
        </div>
        <div>
          <input type="radio" name="" id="" value="contract" />
          <label htmlFor="">Contract</label>
        </div>
        <div>
          <input type="radio" name="" id="" value="temporary" />
          <label htmlFor="">Temporary</label>
        </div>
        <div>
          <input type="radio" name="" id="" value="internship" />
          <label htmlFor="">Internship</label>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
