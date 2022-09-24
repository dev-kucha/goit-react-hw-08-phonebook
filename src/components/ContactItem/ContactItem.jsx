import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ItemStyled } from './ConactItemStyled';

const ContactItem = function ({ contact }) {
  const dispatch = useDispatch();
  const HandleDelete = id => dispatch(deleteContact(id));

  return (
    <ItemStyled>
      <span>{contact.name}:</span> <span>{contact.number}</span>
      <button
        type="button"
        name="deleteBtn"
        onClick={() => HandleDelete(contact.id)}
      >
        Delete
      </button>
    </ItemStyled>
  );
};

export default ContactItem;
