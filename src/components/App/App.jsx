// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
const HomePage = lazy(() => import("../../pages/HomePage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const NotFoundPage = lazy(() => import("../NotFoundPage/NotFoundPage"));

// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
// import { fetchContacts } from "../../redux/contactsOps";
import "./App.module.css";
// import Layout from "../Layout/Layout";
import {} from "react-router-dom";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
