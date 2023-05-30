export const getContacts = state => state.contacts;

export const getFilteredContacts = state => {
    const { contacts, filter } = state;
     if (!filter) {
      return contacts;
     } else {
        const normalizedFilter = filter.toLowerCase();
        const findAbonent = contacts.filter(({ name, number }) => name.toLowerCase().trim().includes(normalizedFilter) || 
            number.trim().includes(normalizedFilter)); 
         return findAbonent;
    }
}
