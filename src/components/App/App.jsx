import { Layout } from "../Layout/Layout";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

// import css from "./App.module.css";

const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Layout>
  );
};

export default App;
