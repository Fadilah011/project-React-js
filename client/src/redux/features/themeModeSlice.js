import { createSlice } from "@reduxjs/toolkit";

export const themeModeSlice = createSlice({
  name: "ThemeMode",
  initialState: {
    themeMode: "dark",
  },
  reducers: {
    setTemeMode: (state, action) => {
        state.themeMode = action.payload
    },
}
});

export const { 
    setTemeMode 
} = themeModeSlice.actions;

export default themeModeSlice.reducer;