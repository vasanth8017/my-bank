import "./styles.css";
import { useContext } from "react";
import UserContext from "./context";
import { useFormik } from "formik";
export default function CreateAccount() {
  const ctx = useContext(UserContext);

  const handleSubmit = (values) => {
    if (!values.username);
    if (!values.email);
    if (!values.password);
    alert(" Account Created Successfully ");
    ctx.users.push({
      name: formik.values.username,
      email: formik.values.email,
      password: formik.values.password,
      balance: 0
    });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },

    validate: (values) => {
      var errors = {};
      if (!values.password) {
        errors.password = " ";
      } else if (values.password.length <= 8) {
        errors.password = "Must be 6 characters ";
      }
      if (!values.username) {
        errors.username = " ";
      } else if (values.username) {
        errors.username = "Enter your username";
      }
      if (!values.email) {
        errors.email = " ";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      return errors;
    }
  });

  return (
    <>
    <card class="account">
      <div class="account">Create User Account</div>
      <div class="card-body">
        <form onSubmit={formik.handleSubmit}>
          <div class="mb-3">
            <label class="label">User Name</label>
            <input
              name="name"
              type="type"
              onChange={formik.handleChange}
              value={formik.values.name}
              class="form-control"
              id="name"
              placeholder="Enter Your User Name"
            />
            {formik.errors ? formik.errors.name : null}
          </div>
          <div class="mb-3">
            {/* <form onSubmit={formik.handleSubmit} /> */}
            <label class="form-label">Email Address</label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
            />
            {formik.errors ? formik.errors.email : null}
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password{" "}
            </label>
            <input
              name="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Enter Password"
            />
            {formik.errors ? formik.errors.password : null}
          </div>
        </form>
        <button class="account" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      </card>
    </>
  );
}


