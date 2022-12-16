import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'

const initialState = {
  value: [],
};

// create a slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, {payload}) => {
      {state.value.push(payload)};
    },
    decrement: (state , {payload}) => {
        console.log('dd' , state.value)

      return {...state , value:state.value.filter((item) => item.id !== payload)

    }
    },
  },
});
// config the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// export default the store
export default store;

// export the action
export const { increment, decrement  } = counterSlice.actions
