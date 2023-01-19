const SalaryInfo = ({ formData, changeHandler }) => {
  return (
    <div className="py-2">
      <label htmlFor="minSalary">Minimum Salary</label>
      <input
        type="text"
        inputMode="numeric"
        name="minSalary"
        id=""
        onChange={changeHandler}
        value={formData.minSalary}
        placeholder="Minimum Salary"
        className="px-3 py-1 rounded my-3"
      />
      <label htmlFor="maxSalary">Maximum Salary</label>
      <input
        type="text"
        inputMode="numeric"
        name="maxSalary"
        onChange={changeHandler}
        value={formData.maxSalary}
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
