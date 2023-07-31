import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Heading } from './App.styled';

const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] =
    useState(() => JSON.parse(localStorage.getItem('contacts'))) ?? contactList;
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const strContacts = localStorage.getItem('contacts');
  //   const contactsLocalStorage = JSON.parse(strContacts) || [];
  //   setContacts(contactsLocalStorage);
  // }, []);

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);

    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const addContact = contactsData => {
    const newNameExists = contacts.some(
      contact =>
        contact.name.trim().toLowerCase() ===
        contactsData.name.trim().toLowerCase()
    );

    if (newNameExists) {
      alert(`${contactsData.name} is already in contacts`);
    } else {
      const newContact = {
        ...contactsData,
        id: nanoid(),
      };
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const getFilteredContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const removeContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <Heading>Phonebook</Heading>
      <ContactForm addContact={addContact} />
      <Heading>Contacts</Heading>
      {filteredContacts.length > 1 && (
        <Filter value={filter} changeFilter={changeFilter} />
      )}
      {filteredContacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          removeContact={removeContact}
        />
      )}
    </div>
  );
};
