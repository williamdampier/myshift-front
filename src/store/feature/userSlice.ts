import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isAuth: boolean;
}

const initialState: UserState = {
  isAuth: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },

    loginUser: (state) => {
      state.isAuth = true;
    },
    logoutUser: (state) => {
      state.isAuth = false;
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
