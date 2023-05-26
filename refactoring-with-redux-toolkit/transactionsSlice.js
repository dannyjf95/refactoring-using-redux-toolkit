import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
//creates an object with the key=[category] value=[]
//the transaction will go onto occupy the value
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      // const {category} = action.payload
      //state[key].push(key[value])
      state[action.payload.category].push(action.payload);
    },
    deleteTransaction: (state, action) => {
      // const { category, id } = action.payload;
      //removes chosen transaction
      state[action.payload.category] = state[action.payload.category].filter(
        (transaction) => transaction.id !== action.payload.id
      );
    },
  },
});

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) =>
  Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
