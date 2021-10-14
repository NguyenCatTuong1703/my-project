const { createSlice } = require("@reduxjs/toolkit");

const userLogin = createSlice({
  name: "userLogin",
  initialState: [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "admin2",
      password: "admin"
    },
  ],
  reducers: {
    addNewUser: (state, action) => {
      state.push(action.payload);
    },
  }
});

const { reducer, actions } = userLogin;
export const { addNewUser } = actions;
export default reducer;
