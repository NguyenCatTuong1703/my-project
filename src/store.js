import userLogin from 'components/Login/LoginSlice';
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  users: userLogin,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
