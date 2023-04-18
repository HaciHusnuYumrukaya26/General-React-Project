import { useFormik } from "formik";

import validationSchema from "../components/validations";

function SignUp() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
        gender: "",
      },
      onSubmit: (values,{resetForm}) => {
        console.log(values);
        resetForm();
      },
      validationSchema,
    });

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="w-50">
        <label>Email</label>
        <input
          name="email"
          className="form-control border-3"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}

        <br />
        <br />

        <label>Password</label>
        <input
          name="password"
          className="form-control border-3"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}

        <br />
        <br />

        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          className="form-control border-3"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}

        <br />
        <br />
        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.gender && touched.gender && (
          <div className="error">{errors.gender}</div>
        )}

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default SignUp;
