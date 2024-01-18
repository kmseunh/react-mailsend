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
                className='w-full p-2 mb-2 border rounded'
            />
            <br />
            <button className='px-4 py-2 bg-blue-500 text-white rounded'>
                Send to {selectedContact.email}
            </button>
        </section>
    );
}
