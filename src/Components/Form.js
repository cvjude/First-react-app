import React from "react";

const Form = props => {
  const {
    firstName,
    lastName,
    age,
    gender,
    location,
    Vegetarian,
    Kosher,
    LactoseFree,
    handleChange
  } = props;
  return (
    <form>
      <input
        name="firstName"
        type="text"
        value={firstName}
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        name="lastName"
        type="text"
        value={lastName}
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        name="age"
        type="text"
        value={age}
        placeholder="Age"
        onChange={handleChange}
      />
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        />
        Female
      </label>

      <select value={location} onChange={handleChange} name="location">
        <option value="London">London</option>
        <option value="Lagos">Lagos</option>
        <option value="Niarobi">Niarobi</option>
      </select>

      <label>
        <input
          type="checkbox"
          name="Vegetarian"
          checked={Vegetarian}
          onChange={handleChange}
        />
        Vegetarian?
      </label>

      <label>
        <input
          type="checkbox"
          name="Kosher"
          checked={Kosher}
          onChange={handleChange}
        />
        Kosher?
      </label>

      <label>
        <input
          type="checkbox"
          name="LactoseFree"
          checked={LactoseFree}
          onChange={handleChange}
        />
        Lactose free?
      </label>

      <h1>Entered Information</h1>
      <hr />
      <h4>First Name: {firstName}</h4>
      <h4>Last Name: {lastName}</h4>
      <h4>Age: {age}</h4>
      <h4>Gender: {gender}</h4>
      <h4>Location: {location}</h4>
      <h4>
        Dietery restrictions:
        <p>{Vegetarian ? "Vegetarian" : null}</p>
        <p>{Kosher ? "Kosher" : null}</p>
        <p>{LactoseFree ? "Lactose Free" : null}</p>
      </h4>
    </form>
  );
};

export default Form;
