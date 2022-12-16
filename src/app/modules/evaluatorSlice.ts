import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Operation {
  operand: string;
  operator: string;
}

interface Evaluator {
  value: number;
}

const initialState: Evaluator = {
  value: 0,
};

export const evaluateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = Number(action.payload);
    },
    evaluate: (state, action: PayloadAction<Operation>) => {
      let { operand, operator } = action.payload;
      const updatedOperand = Number(operand);

      if (operator === "/" && updatedOperand === 0) {
        return;
      }
      switch (operator) {
        case "+":
          state.value = state.value + updatedOperand;
          break;
        case "-":
          state.value = state.value - updatedOperand;
          break;
        case "*":
          state.value = state.value * updatedOperand;
          break;
        case "/":
          state.value = state.value / updatedOperand;
          break;

        default:
          break;
      }
    },
  },
});

export const { evaluate } = evaluateSlice.actions;

export default evaluateSlice.reducer;
