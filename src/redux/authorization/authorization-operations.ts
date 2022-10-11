import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IDataToPost } from '../../interfaces';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials:IDataToPost, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error:any) {
      toast.error(`Failed! Enter valid data`);
      return rejectWithValue(error.response.data);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials:IDataToPost, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error: any) {
      toast.error(`Enter valid Email and Password!`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error: any) {
      toast.error(` Something goes wrong!`);
      return rejectWithValue(error.response.data);
    }
  }
);

const getCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_: void , thunkAPI: any) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue("not have token");
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error: any) {
      return error.message;
    }
  }
);
const authOperations = {
   register, logOut, logIn, getCurrentUser,
}

export default authOperations
