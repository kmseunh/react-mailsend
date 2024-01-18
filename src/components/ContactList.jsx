import useStore from '../store';

export default function ContactList() {
    const { contacts, selectedContact, updateSelectedContact } = useStore();

    return (
        <section className='contact-list'>
            <div className='flex space-x-2'>
                {contacts.map((contact) => (
                    <button
                        key={contact.id}
                        onClick={() => updateSelectedContact(contact)}
                        disabled={
                            selectedContact && selectedContact.id === contact.id
                        }
                        className={`px-5 py-2 mb-4 rounded ${
                            selectedContact && selectedContact.id === contact.id
                                ? 'bg-gray-300'
                                : 'bg-gray-100'
                        }`}
                    >
                        {contact.name}
                    </button>
                ))}
            </div>
        </section>
    );
}
