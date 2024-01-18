import create from 'zustand';

const useStore = create((set) => ({
    contacts: [
        { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
        { id: 1, name: 'Alice', email: 'alice@mail.com' },
        { id: 2, name: 'Bob', email: 'bob@mail.com' },
    ],
    selectedContact: { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    text: '', // Add a text property to store the chat text
    updateSelectedContact: (contact) =>
        set({ selectedContact: contact, text: '' }), // Clear text when selecting a new contact
    updateText: (newText) => set({ text: newText }), // Function to update the chat text
}));

export default useStore;
