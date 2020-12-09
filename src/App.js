// I AM USING REACT-HOOK-FORM

// OUTPUT - ON YOUR CONSOLE

import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

// import Input from "./component/Input";

const App = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(JSON.stringify(data));
  const numChoice = watch("choice", props.choice);
  const handlechanges = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form className="main__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="heading__image">
          <img
            src="https://i.pinimg.com/280x280_RS/e9/ee/47/e9ee479045bf605bca2d3c1bcd081389.jpg"
            alt="image"
          />
          <h1>Sample Form</h1>
        </div>
        <p>
          <label className="label">Username</label>
        </p>
        {/* Conditions for Username - required, minLength, maxLength */}
        <p>
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Enter Username"
            ref={register({
              required: true,
              minLength: 4,
              maxLength: 30
            })}
          />
        </p>
        <p style={{ color: "red" }}>
          {errors.username && "* This field is required"}
        </p>
        <p style={{ color: "red" }}>
          {errors.username &&
            errors.username.type === "minLength" &&
            "* Minimum 4 character required"}
        </p>
        {/* Search By */}
        <p>
          <label className="label">Search By</label>
        </p>

        {/* Radio Button */}

        <div className="radio__button">
          <input type="radio" name="choice" value={0} ref={register} required />
          Phone Number
          <input
            className="radio__radio"
            type="radio"
            name="choice"
            value={1}
            ref={register}
            required
          />
          Email-Id
          <input type="radio" name="choice" value={2} ref={register} required />
          Text
          {/* Now I testing user Input and on the basis of User input
           provide different options */}
          {numChoice === "0" && (
            <div>
              <p>
                <label>Phone Number</label>
              </p>
              <input
                type="number"
                className="input"
                name="phone"
                placeholder="Phone number"
                ref={register({ maxLength: 10 })}
              />
              <p style={{ color: "red" }}>
                {errors.phone && "* This field is required"}
              </p>
            </div>
          )}
          {numChoice === "1" && (
            <div>
              <p>
                <label>Email</label>
              </p>
              <input
                onChange={handlechanges}
                type="email"
                className="input"
                name="email"
                placeholder="Email-id"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  }
                })}
              />
              <p style={{ color: "red" }}>
                {errors.email && "* This field is required"}
              </p>
            </div>
          )}
          {numChoice === "2" && (
            <div>
              <p>
                <label>Input</label>
              </p>
              <input
                className="input"
                name="textarea"
                placeholder="Input"
                ref={register}
              />
              <p style={{ color: "red" }}>
                {errors.textarea && "* This field is required"}
              </p>
            </div>
          )}
        </div>
        <input onChange={handlechanges} className="btn" type="submit" />
      </form>
    </div>
  );
};

export default App;

// THANKS FOR GIVING ME THIS OPPURTUNITY
