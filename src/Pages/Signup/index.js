import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import InputField from "../../Components/FormFields/InputField";

function SignUp() {
  const { handleSubmit, control, reset } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log("SignUp data submitted:", data);
    // Add sign-up logic here (e.g., API call)
    // Redirect to login or home after successful sign-up
    history.push("/");
  };

  const cancel = () => {
    reset(); // clears form fields
    history.push("/");
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="col-md-5 ms-md-auto loginDiv">
          <h2 className="pageName text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <InputField
                control={control}
                label="First Name"
                name="firstName"
                placeholder="Enter your first name"
                type="text"
                fieldClass="form-control"
                rules={{ required: "First name is required" }}
              />
            </div>

            <div className="mb-3">
              <InputField
                control={control}
                label="Last Name"
                name="lastName"
                placeholder="Enter your last name"
                type="text"
                fieldClass="form-control"
                rules={{ required: "Last name is required" }}
              />
            </div>

            <div className="mb-3">
              <InputField
                control={control}
                label="Email Address"
                name="email"
                placeholder="Enter your email"
                type="email"
                fieldClass="form-control"
                rules={{ required: "Email is required" }}
              />
            </div>

            <div className="mb-3">
              <InputField
                control={control}
                label="Password"
                name="password"
                placeholder="Enter your password"
                type="password"
                fieldClass="form-control"
                rules={{ required: "Password is required" }}
              />
            </div>

            <div className="mb-3">
              <InputField
                control={control}
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Repeat your password"
                type="password"
                fieldClass="form-control"
                rules={{ required: "Please confirm your password" }}
              />
            </div>

            <div className="row">
              <div className="filter-result-block mb-3 col-3">
                <Button className="cancel-filter" onClick={cancel}>
                  Cancel
                </Button>
              </div>
              <div className="filter-result-block mb-3 col-3">
                <Button type="submit" className="apply-filter">
                  Sign Up
                </Button>
              </div>
            </div>
          </form>

          <div className="text-center mt-3">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="link-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
