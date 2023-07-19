import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes, { arrayOf } from 'prop-types';
import { Item, List, Text, Button } from './ContactList.styled';

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={nanoid()}>
          <Text>{contact.name}</Text>
          <Button onClick={() => removeContact(contact.id)}>&times;</Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
