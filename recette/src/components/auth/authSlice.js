import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    authMode: 'Se connecter',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
    setAuthMode: (state, action) => {
      state.authMode = action.payload;
    },
  },
});

export const { setUser, setAuthMode } = authSlice.actions;

export default authSlice.reducer;
