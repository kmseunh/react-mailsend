import useStore from '../store';

export default function ContactList() {
    const { contacts, selectedContact, updateSelectedContact } = useStore();

    return (
        <section className='contact-list'>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button
                            onClick={() => updateSelectedContact(contact)}
                            disabled={
                                selectedContact &&
                                selectedContact.id === contact.id
                            }
                        >
                            {contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
