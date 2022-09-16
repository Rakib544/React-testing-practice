const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="job-description">Job location</label>
        <select id="job-location">
          <option value="">Select A Country</option>
          <option value="US">United State</option>
          <option value="GB">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="BN">Bangladesh</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="terms" /> I agree to the terms and
          conditions
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;