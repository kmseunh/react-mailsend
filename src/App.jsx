import ContactList from './components/ContactList';
import Chat from './components/Chat';
import useStore from './store';

export default function App() {
    const { contacts, selectedContact } = useStore();

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='max-w-md w-full bg-white p-8 rounded shadow-md'>
                <ContactList contacts={contacts} />
                <Chat contact={selectedContact} />
            </div>
        </div>
    );
}
