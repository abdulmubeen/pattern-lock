import { createSlice } from "@reduxjs/toolkit";

const hashSlice = createSlice({
  name: "hash",
  initialState: {
    patternHash: "",
    isDisabled: false,
  },
  reducers: {
    setPatternHash: (state, action) => {
      return { ...state, patternHash: action.payload };
    },
    setIsDisabled: (state, action) => {
      return { ...state, isDisabled: action.payload };
    },
  },
});

export const { setPatternHash, setIsDisabled } = hashSlice.actions;
export default hashSlice.reducer;
