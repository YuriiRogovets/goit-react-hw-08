import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  return (
    <div>
      <p className={css.userName}>{userData.name}</p>
      <button
        className={css.btnLogOut}
        onClick={() => dispatch(logOut())}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
