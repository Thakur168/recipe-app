import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import InputField from "../../Components/FormFields/InputField";

function SignUp({}) {
  // use hooks
  const { handleSubmit, control, reset } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    // const values = removeEmptyFields(data);
    // history.push('/')
  };

  const cancel = () => {
    history.push("/");
    // reset({ email: "", password: "" });
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
                placeholder="Enter a first name"
                type="text"
                fieldClass="form-control"
                rules={{ required: true }}
              />
            </div>

            <div className="mb-3">
              <InputField
                control={control}
                label="Last Name"
                name="lastName"
                placeholder="Enter a last name"
                type="text"
                fieldClass="form-control"
                rules={{ required: true }}
              />
            </div>

            <div className="mb-3">
              <InputField
                control={control}
                label="Email Address"
                name="email"
                placeholder="Enter an email"
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
                placeholder="Enter a Password"
                type="password"
                fieldClass="form-control"
                rules={{ required: true }}
              />
            </div>

            <div className="mb-3">
              <InputField
                control={control}
                label="Phone Number"
                name="phoneNumber"
                placeholder="xxx-xxx-xxxx"
                type="number"
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
                  SignUp
                </Button>{" "}
              </div>
            </div>
          </form>

          <div className="mb-3">
            <p>
              Already have an account?{" "}
              <Link className="login-link" to="/login">
                Login
              </Link>{" "}
              now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
