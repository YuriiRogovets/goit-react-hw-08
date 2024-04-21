// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />

      {children}
    </div>
  );
};

export default Layout;
