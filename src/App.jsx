import ContactList from './components/ContactList';
import Chat from './components/Chat';
import useStore from './store';

export default function App() {
    const { contacts, selectedContact, updateSelectedContact } = useStore();

    return (
        <>
            <ContactList contacts={contacts} />
            <Chat contact={selectedContact} />
        </>
    );
}
