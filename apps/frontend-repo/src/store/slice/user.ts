import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "@/store/actions";
import { User } from "@repo/shared";

interface UserState {
  loading: boolean;
  error: string | null;
  users: User[];
}

const initialState: UserState = {
  loading: false,
  error: null,
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export reducer sebagai default
export default userSlice.reducer;
