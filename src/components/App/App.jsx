import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "../Layout/Layout";
import "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const NotFoundPage = lazy(() => import("../NotFoundPage/NotFoundPage"));

// import { useDispatch } from "react-redux";

// import { fetchContacts } from "../../redux/contactsOps";

// import Layout from "../Layout/Layout";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
