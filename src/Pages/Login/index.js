import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import InputField from "../../Components/FormFields/InputField";

function Login() {
  const { handleSubmit, control, reset } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    // You can handle login logic here (e.g., API call)
    console.log("Login data submitted:", data);
    // Redirect to home page after login
    history.push("/");
  };

  const cancel = () => {
    reset(); // clears form fields
    history.push("/"); // navigates back to home
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
            <div className="row">
              <div className="filter-result-block mb-3 col-3">
                <Button className="cancel-filter" onClick={cancel}>
                  Cancel
                </Button>
              </div>
              <div className="filter-result-block mb-3 col-3">
                <Button type="submit" className="apply-filter">
                  Login
                </Button>
              </div>
            </div>
            <div className="text-center mt-3">
              <span>Don't have an account? </span>
              <Link to="/register">Register here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
