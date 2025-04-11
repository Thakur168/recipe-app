import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import InputField from "../../Components/FormFields/InputField";
import { useState } from "react";

function Login() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (validUser) {
      localStorage.setItem("user", JSON.stringify(validUser));
      history.push("/home");
    } else {
      alert("Invalid credentials");
    }
    return;
  };

  const cancel = () => {
    reset();
  };

  const goHome = () => {
    history.push("/home");
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
                label="Email"
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                }}
              />
            </div>
            <div className="mb-3">
              <InputField
                control={control}
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={() => setShowPassword(!showPassword)}
                id="showPasswordToggle"
              />
              <label className="form-check-label" htmlFor="showPasswordToggle">
                Show Password
              </label>
            </div>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">Login</Button>
              <Button variant="secondary" onClick={cancel}>Cancel</Button>
              <Button variant="outline-secondary" onClick={goHome}>Go to Home</Button>
            </div>
            <div className="mt-3 text-center">
              <Link to="/signup">Don't have an account? Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
