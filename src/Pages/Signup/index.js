import { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

function SignUp() {
  // use hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === data.email);

    if (userExists) {
      toast.error("User already exists");
    } else {
      localStorage.setItem("users", JSON.stringify([...users, data]));
      toast.success("User signup successfully");
      history.push("/login");
    }
  };

  const cancel = () => {
    history.push("/");
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="col-md-5 ms-md-auto loginDiv">
          <h2 className="pageName text-center">Sign Up</h2>
          <p className="text-center">
            Enter your details to register into our website{" "}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <div className="form-group">
                <label className="mb-1">First Name</label>
                <div className="textfield-block">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your first name"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                  />
                  {errors?.firstName && (
                    <span className="error-msg">
                      {errors?.firstName?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-group">
                <label className="mb-1">Last Name</label>
                <div className="textfield-block">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your last name"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                  />
                  {errors?.lastName && (
                    <span className="error-msg">
                      {errors?.lastName?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-group">
                <label className="mb-1">Email Address</label>
                <div className="textfield-block">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email"
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
            <div className="mb-3">
              <div className="form-group">
                <label className="mb-1">Password</label>
                <div className="textfield-block">
                  <input
                    className="form-control"
                    placeholder="Enter your password"
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
            <div className="mb-3">
              <div className="form-group">
                <label className="mb-1">Phone Number</label>
                <div className="textfield-block">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your phone number"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\d{3}-\d{3}-\d{4}$/,
                        message:
                          "Phone number must be in the format xxx-xxx-xxxx",
                      },
                    })}
                  />
                  {errors?.phoneNumber && (
                    <span className="error-msg">
                      {errors?.phoneNumber?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          
            <div className="row">
              <div className="filter-result-block mb-3 col-3">
                <Button className="cancel-filter" onClick={() => history.push("/")}>
                  Cancel
                </Button>{" "}
              </div>
              <div className="filter-result-block mb-3 col-3">
                <Button type="submit" className="apply-filter">
                  Sign Up
                </Button>{" "}
              </div>
            </div>
            <div className="mt-3 text-center">
              <Link className="login-link" to="/login">Already have an account? Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
