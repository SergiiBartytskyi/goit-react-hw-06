import { RootState } from "./store";

export const selectContacts = (state: RootState) => state.contacts.items;

export const selectNameFilter = (state: RootState) => state.filters.name;
