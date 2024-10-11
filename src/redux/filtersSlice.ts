import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterState {
  name: string;
}

const initialState: IFilterState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state: IFilterState, action: PayloadAction<string>) => {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
