const ContactSubmit = ({ formData, changeHandler }) => {
  return (
    <div>
      <div>
        <label htmlFor="email">Contact email</label>
        <input
          type="email"
          name="email"
          id=""
          value={formData.email}
          onChange={changeHandler}
        />
      </div>
      <div className="my-4">
        <input type="button" name="" id="" value="submit" />
      </div>
    </div>
  );
};

export default ContactSubmit;
