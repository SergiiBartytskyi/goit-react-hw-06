import { deleteContact } from "../../redux/contactsSlice";
import { useAppDispatch } from "../../redux/hooks";
import { IoPersonOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { IContactProps } from "./Contact.types";
import css from "./Contact.module.css";

export default function Contact({ contact }: IContactProps) {
  const dispatch = useAppDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.contactContainer}>
      <ul>
        <li className={css.contactWraper}>
          <IoPersonOutline />
          {contact.name}
        </li>
        <li className={css.contactWraper}>
          <IoPhonePortraitOutline />
          {contact.number}
        </li>
      </ul>
      <button className={css.contactBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
