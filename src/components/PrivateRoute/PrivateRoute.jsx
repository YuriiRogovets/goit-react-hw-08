import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = !isLoggedIn && !selectIsRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : children;
};

export default PrivateRoute;
