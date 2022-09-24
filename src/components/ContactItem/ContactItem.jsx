import { ItemStyled } from './ConactItemStyled';

const ContactItem = function ({ contact }) {
  return (
    <ItemStyled>
      <span>{contact.name}:</span> <span>{contact.number}</span>
      <button
        type="button"
        name="deleteBtn"
        onClick={() => console.log(contact.id)}
      >
        Delete
      </button>
    </ItemStyled>
  );
};

export default ContactItem;
