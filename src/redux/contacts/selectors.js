// import { useSelector } from "react-redux";

import { selectFilter } from "redux/filter/selectors";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
    const itm = selectContacts(state);
    const filtr = selectFilter(state);

    // const { contacts, filter } = state;
    // const { items } = contacts;
     if (!filtr) {
      return itm;
     } else {
        const normalizedFilter = filtr.toLowerCase();
        const findAbonent = itm.filter(({ name, number }) => name.toLowerCase().trim().includes(normalizedFilter) || 
            number.trim().includes(normalizedFilter)); 
        //  console.log("findAbonent", findAbonent)
         return findAbonent;
    }
}

