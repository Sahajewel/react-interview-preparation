/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, type ChangeEvent } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};
type Errors = Partial<FormData>;

function validate(values: FormData): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Name must be written";
  if (!values.email.includes("@")) errors.email = "Please input correct email";
  if (values.password.length < 6)
    errors.password = "password at least 6 digits";
  return errors;
}
const initialValue = {
  name: "",
  email: "",
  password: "",
};
export default function SignupForm() {
  const [values, setValues] = useState(initialValue);

  const [dynamicErrors, setDynamicErrors] = useState<Errors>({});
  const [dynamicSuccess, setDynamicSuccess] = useState(false);

  const handleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const foundErrors = validate(values);
    setDynamicErrors(foundErrors);
    setDynamicSuccess(Object.keys(foundErrors).length === 0);
    setValues(initialValue);
  };
  return (
    <div style={{ marginBottom: "200px" }}>
      <h1>Signup Form</h1>
      <form onSubmit={handleForm}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChanged}
          />
          {dynamicErrors.name && (
            <p style={{ color: "red" }}>{dynamicErrors.name}</p>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChanged}
          />
          {dynamicErrors.email && (
            <p style={{ color: "red" }}>{dynamicErrors.email}</p>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={values.password}
            name="password"
            onChange={handleChanged}
          />
          {dynamicErrors.password && (
            <p style={{ color: "red" }}>{dynamicErrors.password}</p>
          )}
        </div>
        <button type="submit">Sign up</button>
        {dynamicSuccess && (
          <p style={{ color: "green" }}>Signup successfully</p>
        )}
      </form>
    </div>
  );
}
