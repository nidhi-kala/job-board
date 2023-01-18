const SalaryInfo = (formData, setFormData) => {
  return (
    <div className="py-2">
      <input
        type="text"
        inputMode="numeric"
        name="min-salary"
        id=""
        placeholder="Minimum Salary"
        className="px-3 py-1 rounded my-3"
      />
      <input
        type="text"
        inputMode="numeric"
        name="max-salary"
        id=""
        placeholder="Maximum Salary"
        className="px-3 py-1 rounded my-3"
      />
      <div className="flex flex-col my-3">
        <label className="py-2" htmlFor="">
          Salary Period
        </label>
        <select name="salary-period" id="">
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
          <option value="hourly">Hourly</option>
        </select>
      </div>
    </div>
  );
};

export default SalaryInfo;
