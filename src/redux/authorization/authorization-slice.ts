import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../../interfaces';
import authOperations from './authorization-operations';

const authState: IInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
  isFetchingCurrentUser: false
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {},
  extraReducers: {
    [authOperations.register.fulfilled.type](state: any, action: any) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.pending.type](state: any, _: unknown) {
      state.error = null;
    },
    [authOperations.register.rejected.type](state: any, action: any) {
      state.error = action.payload.message;
    },
    [authOperations.logIn.fulfilled.type](state: any, action: any){
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.pending.type](state: any, _: unknown) {
      state.error = null;
    },
    [authOperations.logIn.rejected.type](state: any, action: any) {
      state.error = action.payload.message;
    },
    [authOperations.logOut.fulfilled.type](state: any) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.pending.type](state: any, _: any) {
      state.error = null;
    },
    [authOperations.logOut.rejected.type](state: any, action: any) {
      state.error = action.payload.message;
    },
    [authOperations.getCurrentUser.pending.type](state: any) {
      return {
        ...state,
        isFetchingCurrentUser: true,
      };
    },
    [authOperations.getCurrentUser.fulfilled.type](state: any, action: any) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [authOperations.getCurrentUser.rejected.type](state: any, action: any) {
      return {
        ...state,
        error: action.payload,
        isFetchingCurrentUser: false,
      };
    },
  },
});
export const authReducer = authSlice.reducer;
