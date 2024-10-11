import Contact from "../Contact/Contact";
import { selectContacts, selectNameFilter } from "../../redux/selectors";
import { IContact } from "../Contact/Contact.types";
import { useAppSelector } from "../../redux/hooks";
import css from "./ContactList.module.css";
import { useMemo } from "react";

const getVisibleContacts = (
  contacts: IContact[],
  filteredName: string
): IContact[] => {
  if (!filteredName) return contacts;
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filteredName.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useAppSelector(selectContacts);

  const filteredName = useAppSelector(selectNameFilter);

  const visibleContacts = useMemo(() => {
    return getVisibleContacts(contacts, filteredName);
  }, [contacts, filteredName]);

  return (
    <ul className={css.contactsContainer}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
