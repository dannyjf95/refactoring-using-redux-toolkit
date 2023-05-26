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
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));
//dispatch(editBudget({category: budget.category, amount: amount}))
const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState /**referenced above(14) */,
  reducers: {
    editBudget: (state, action) => {
      /** enter manually if confused */
      // const { category, amount } = action.payload;
      const budgetToSet = state.map((budget) => {
        if (budget.category === action.payload.category) {
          budget.amount = action.payload.amount;
        }
        // return budget
      });
    },
  },
});

//refactoring action creator and reduer below inot one using toolkit

export const { editBudget } = budgetsSlice.actions;
export const selectBudgets = (state) => state.budgets;
export default budgetsSlice.reducer;