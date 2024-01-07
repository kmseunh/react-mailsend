import { useState } from 'react';
import ContactList from './components/ContactList';
import Chat from './components/Chat';

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

export default function App() {
    const [selectedContact, setSelectedContact] = useState(contacts[0]);

    const handleContactSelect = (contact) => {
        setSelectedContact(contact);
    };

    return (
        <>
            <ContactList
                contacts={contacts}
                selectedContact={selectedContact}
                onSelect={handleContactSelect}
            />
            <Chat key={selectedContact.id} contact={selectedContact} />
        </>
    );
}
