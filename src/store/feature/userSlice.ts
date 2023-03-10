import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isAuth: boolean;
}

const initialState: UserState = {
  isAuth: false,
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
    //ALL async done via thunk has to to include Pending and Fullfilled
    //TODO: handle auth and token store voa lecalStorage.ts
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
