import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilterText } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ListSlyled } from './ContactListStyled';

const ContactList = function () {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectFilterText);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
