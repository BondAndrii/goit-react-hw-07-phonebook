export const getContacts = state => state.contacts.item;

export const getIsLoading = state => state.contacts.getIsLoading;

export const getError = state => state.contacts.error;

export const getFilteredContacts = state => {
    const { contacts, filter } = state;
    const { items } = contacts;
     if (!filter) {
      return contacts;
     } else {
        const normalizedFilter = filter.toLowerCase();
        const findAbonent = items.filter(({ name, number }) => name.toLowerCase().trim().includes(normalizedFilter) || 
            number.trim().includes(normalizedFilter)); 
         console.log("findAbonent", findAbonent)
         return findAbonent;
    }
}

