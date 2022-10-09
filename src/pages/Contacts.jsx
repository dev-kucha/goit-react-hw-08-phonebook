import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

const styles = {
  main: {
    width: '520px',
    margin: '0 auto',
    fontSize: '16px',
  },
};

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div style={styles.main}>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
