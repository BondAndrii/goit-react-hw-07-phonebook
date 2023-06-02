export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilteredContacts = state => {
    const { contacts, filter } = state;
    const { items } = contacts;
     if (!filter) {
      return items;
     } else {
        const normalizedFilter = filter.toLowerCase();
        const findAbonent = items.filter(({ name, number }) => name.toLowerCase().trim().includes(normalizedFilter) || 
            number.trim().includes(normalizedFilter)); 
         console.log("findAbonent", findAbonent)
         return findAbonent;
    }
}

