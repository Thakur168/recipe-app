// src/components/ProtectedRoute.js
import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../../UserContext";

function ProtectedRoute({ component: Component, ...rest }) {
  const { user } = useUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.email ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectedRoute;
