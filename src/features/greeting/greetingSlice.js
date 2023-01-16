import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = "http://localhost:8080/api/v1/greetings";
const initialState = {
  greetings: [],
  pending: true,
  error: false,
};

export const getGreetings = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(data => data)

    return response
  }
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGreetings.pending, (state, action) => {
        const newState = state;
        newState.pending = true;
        newState.error = false;
      })
      .addCase(getGreetings.fulfilled, (state, action) => {
        const newState = state;
        const currentState = action.payload.map((greeting) => ({
          id: greeting.id,
          title: greeting.title
        }));
        newState.pending = false;
        newState.greetings = currentState;
      })
      .addCase(getGreetings.rejected, (state, action) => {
        const newState = state;
        newState.pending = false;
        newState.error = true;
      });
  },
});

export default greetingSlice.reducer;
