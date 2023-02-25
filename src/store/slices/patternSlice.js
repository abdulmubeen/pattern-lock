import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patternSet: "",
};

const patternSlice = createSlice({
  name: "pattern",
  initialState,
  reducers: {
    setPatternSet: (state, action) => {
      return { ...state, patternSet: action.payload };
    },
  },
});

export const { setPatternSet } = patternSlice.actions;
export default patternSlice.reducer;
