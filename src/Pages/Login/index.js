import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import InputField from "../../Components/FormFields/InputField";

function Login({}) {
  // use hooks
  const { handleSubmit, control, reset } = useForm();

  const history = useHistory();
  const onSubmit = (data) => {
    // const values = removeEmptyFields(data);
    // history.push('/');
  };

  const cancel = () => {
    history.push("/");
    // reset({ email: "", password: "" });
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="col-md-5 ms-md-auto loginDiv">
          <h2 className="pageName text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <InputField
                control={control}
                label="Email Address"
                name="email"
                placeholder="Enter the login email"
                type="email"
                fieldClass="form-control"
                rules={{ required: true }}
              />
            </div>
            <div className="mb-3">
              <InputField
                control={control}
                label="Password"
                name="password"
                placeholder="Enter your Password here"
                type="password"
                fieldClass="form-control"
                rules={{ required: true }}
              />
            </div>

            <div className="row">
              <div className="filter-result-block mb-3 col-3">
                <Button className="cancel-filter" onClick={cancel}>
                  Cancel
                </Button>{" "}
              </div>
              <div className="filter-result-block mb-3 col-3">
                <Button type="submit" className="apply-filter">
                  Login
                </Button>{" "}
              </div>
            </div>
          </form>

          <div className="mb-3">
            <p>
              Don't have an account?{" "}
              <Link className="signup-link" to="/signup">
                Sign Up
              </Link>{" "}
              now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
