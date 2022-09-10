const BasicForm = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name"></input>
        </div>
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name"></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"></input>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone"></input>
        </div>
        <div>
          <label htmlFor="text">Last Name:</label>
          <textarea id="text" row="5" col="30"></textarea>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
