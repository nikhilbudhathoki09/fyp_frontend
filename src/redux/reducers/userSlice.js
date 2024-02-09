import { createSlice } from "@reduxjs/toolkit";
import { USER_KEY } from "../../utils/constants";

const user =
  localStorage.getItem(USER_KEY) !== null || undefined
    ? JSON.parse(localStorage.getItem(USER_KEY))
    : null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: user,
  },
  reducers: {
    changeUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
