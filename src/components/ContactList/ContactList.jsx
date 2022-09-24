import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';
import { ListSlyled } from './ContactListStyled';

const ContactList = function () {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.text);

  return (
    <ListSlyled>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((contact, idx) => {
          return (
            <li key={idx}>
              <ContactItem contact={contact} />
            </li>
          );
        })}
    </ListSlyled>
  );
};

// export default ContactList;
export default ContactList;
