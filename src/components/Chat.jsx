import useStore from '../store';

export default function Chat() {
    const { selectedContact, text, updateText } = useStore();

    const handleTextChange = (e) => {
        updateText(e.target.value);
    };

    return (
        <section className='chat'>
            <textarea
                value={text}
                placeholder={`Chat to ${selectedContact.name}`}
                onChange={handleTextChange}
            />
            <br />
            <button>Send to {selectedContact.email}</button>
        </section>
    );
}
