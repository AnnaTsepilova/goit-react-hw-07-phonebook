import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { ContactRow, Text } from 'components/ContactItem/ContactItem.styled';
import { DeleteButton } from 'components/ContactForm/ContactForm.styled';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    Notify.success('Contact is deleted', {
      fontSize: '16px',
      width: '350px',
    });
    dispatch(deleteContact(contact.id));
  };
  return (
    <ContactRow>
      <Text>
        {contact.name}: {contact.phone}
      </Text>
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactRow>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ).isRequired,
};
