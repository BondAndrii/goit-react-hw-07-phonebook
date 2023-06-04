export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
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

