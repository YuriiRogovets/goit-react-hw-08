import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { Helmet } from "react-helmet-async";

const ContactsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      Your Contacts:
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
