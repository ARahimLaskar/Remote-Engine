import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI, signUpAPI, devAPI, getDataAPI } from "../API/api";

const initialState = {
  user: {
    data: {},
    token: localStorage.getItem("token") || null,
  },
  usedDataForm: {},
  candidateData: localStorage.getItem("candidateData") || {},
  error: null,
  status: "idle",
};

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await signUpAPI(userData);
      console.log("from slice", res);
      return res;
    } catch (error) {
      return rejectWithValue(error.res);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await loginAPI(userData);
      console.log("from slice", res);
      return res;
    } catch (error) {
      return rejectWithValue(error.res);
    }
  }
);

export const addUserData = createAsyncThunk(
  "dev/data-save",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await devAPI(userData);
      console.log("from slice", res);
      return res;
    } catch (error) {
      return rejectWithValue(error.res);
    }
  }
);
export const getUserData = createAsyncThunk("client/get-data", async () => {
  try {
    const res = await getDataAPI();
    return res;
  } catch (error) {
    return error;
  }
});

const userSlice = createSlice({
  name: "userBase",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(signUpUser.rejected, (state) => {
      state.status = "failed";
      state.error = action.payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user.data = action.payload.user; // Update user data
      state.user.token = action.payload.token; // Update token
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.status = "failed";
      state.error = action.payload;
    });
    builder.addCase(addUserData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addUserData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.usedDataForm = action.payload;
    });
    builder.addCase(addUserData.rejected, (state) => {
      state.status = "failed";
      state.error = action.payload;
    });
    builder.addCase(getUserData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.candidateData = action.payload;
      localStorage.setItem("candidateData", action.payload);
    });
    builder.addCase(getUserData.rejected, (state) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
