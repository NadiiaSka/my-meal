import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //global state and useNavigate
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {values.showAlert && <Alert />}
        <FormRow
          name="name"
          type="text"
          value={values.name}
          handleChange={handleChange}
          labelText="Name"
        />
        <FormRow
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
        />
        <FormRow
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
          labelText="Password"
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
