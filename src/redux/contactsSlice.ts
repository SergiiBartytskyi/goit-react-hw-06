import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { RootState } from "./store";
interface IContact {
  id: string;
  name: string;
  number: string;
}

interface IContactState {
  items: IContact[];
}

const initialState: IContactState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (
      state: IContactState,
      action: PayloadAction<Omit<IContact, "id">>
    ) => {
      state.items.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact: (state: IContactState, action: PayloadAction<string>) => {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
