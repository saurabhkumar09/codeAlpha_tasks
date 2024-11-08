import { createSlice } from "@reduxjs/toolkit";

// Check localStorage for the theme, if it exists. Use "dark" as the default if not found.
const initialState = {
  theme: window?.localStorage.getItem("theme") ?? "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
      // Store theme as a string, without JSON.stringify
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
