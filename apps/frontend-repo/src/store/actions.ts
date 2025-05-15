/* eslint-disable @typescript-eslint/no-explicit-any */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "@/apis/user";
import { User } from "@repo/shared";

export const updateUser = createAsyncThunk(
  "user/update",
  async (user: User, { rejectWithValue }) => {
    try {
      return await userApi.updateUser(user);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
