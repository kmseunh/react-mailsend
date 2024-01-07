import { useState } from 'react';

export default function Chat({ contact }) {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <section className='chat'>
            <textarea
                value={text}
                placeholder={'Chat to ' + contact.name}
                onChange={handleTextChange}
            />
            <br />
            <button>Send to {contact.email}</button>
        </section>
    );
}
