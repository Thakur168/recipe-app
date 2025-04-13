import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "../../UserContext";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const { setUser } = useUser(); 

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (validUser) {
      setUser(validUser);
      toast.success("User loggedIn successfully");
      history.push("/");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="col-md-5 ms-md-auto loginDiv">
          <h2 className="pageName text-center">Login</h2>
          <p className="text-center">
            Enter your login credentials to explore all features{" "}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="mb-3">
              <div className="form-group">
                <label className="mb-1">Email Address</label>
                <div className="textfield-block">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter the login email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors?.email && (
                    <span className="error-msg">{errors?.email?.message}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="mb-3">
              <div className="form-group">
                <label className="mb-1">Password</label>
                <div className="textfield-block">
                  <input
                    className="form-control"
                    placeholder="Enter your Password here"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must include uppercase, lowercase, number, and special character",
                      },
                    })}
                  />
                  <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>
                  {errors?.password && (
                    <span className="error-msg">
                      {String(errors.password?.message)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="row">
              <div className="filter-result-block mb-3 col-3">
                <Button className="cancel-filter" onClick={() => history.push("/")}>
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
