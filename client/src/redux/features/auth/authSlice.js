// rxslice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import authServices from "./authService";

const initialState = {
  isLoggedIn: false,
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  currentToken: null,
  message: "",
};
//Create staff account
export const registerStaffAuth = createAsyncThunk(
  "auth/registerStaffAuth",
  async (userData, thunkAPI) => {
    try {
      return await authServices.registerStaffEndPoint(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//login
export const loginAuth = createAsyncThunk(
  "auth/loginAuth",
  async (userData, thunkAPI) => {
    try {
      return await authServices.loginService(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET_AUTH(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      //register staff
      .addCase(registerStaffAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerStaffAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success(action.payload.message);
      })
      .addCase(registerStaffAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.error(action.payload);
      })

      //login user
      .addCase(loginAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success(action.payload.message);
        localStorage.setItem("user_data", JSON.stringify(action.payload));
        state.currentToken = localStorage.getItem("user_data");
      })
      .addCase(loginAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.error(action.payload);
      });
  },
});

// eslint-disable-next-line no-empty-pattern
export const { RESET_AUTH } = authSlice.actions;

export default authSlice.reducer;
