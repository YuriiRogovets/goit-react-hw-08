import { Helmet } from "react-helmet-async";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
