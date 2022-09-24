import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { ListSlyled } from './ContactListStyled';

const ContactList = function () {
  const contacts = useSelector(state => state.contacts);
  const filterText = useSelector(state => state.filter.text);

  return (
    <ListSlyled>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filterText.toLowerCase())
        )
        .map((contact, id) => {
          return <li key={id}>{<ContactItem contact={contact} />}</li>;
        })}
    </ListSlyled>
  );
};

export default ContactList;
