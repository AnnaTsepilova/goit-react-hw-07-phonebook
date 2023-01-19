import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectContacts } from 'redux/selectors';

import ContactItem from 'components/ContactItem/ContactItem';
import { ContactsListContainer } from 'components/ContactsList/ContactsList.styled';
import { Text } from 'components/ContactItem/ContactItem.styled';

const getVisibleContacts = (items, searchQuery) => {
  return items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export default function ContactsList() {
  const items = useSelector(selectContacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = getVisibleContacts(items, filter.filter);

  return (
    <ContactsListContainer>
      {visibleContacts.length ? (
        visibleContacts.map(item => {
          return <ContactItem key={item.id} contact={item} />;
        })
      ) : (
        <Text>There is no contact in your phonebook</Text>
      )}
    </ContactsListContainer>
  );
}

ContactsList.propTypes = {
  searchQuery: PropTypes.string,
  items: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
