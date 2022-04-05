import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LineItemType } from "../../interfaces";
import {HYDRATE} from "next-redux-wrapper";



interface CartState {
  lineItems: LineItemType[];
}

const initialState: CartState = {
  lineItems: [],
};

const addLineItemReducer = (
  state: CartState,
  action: PayloadAction<LineItemType>
) => {
  const index = state.lineItems.findIndex(
    (lineItem) => lineItem._id === action.payload._id
  );
  // id the index === -1 , id is not in lineItems array
  if (index === -1) {
    // add the lineItem to the lineItems array
    state.lineItems = [...state.lineItems, action.payload];
  } else {
    // update the lineItems[index] quantity
    state.lineItems[index].productQuantity += action.payload.productQuantity;
  }
};

const decrementQuantityReducer = (
  state: CartState,
  action: PayloadAction<LineItemType>
) => {
  const index = state.lineItems.findIndex(
    (lineItem) => lineItem._id == action.payload._id
  );
  // if index === -1, id is not in lineItems array
  if (index >= 0 && state.lineItems[index].productQuantity > 1) {
    // update the lineItems[index] quantity
    state.lineItems[index].productQuantity -= action.payload.productQuantity;
  } else if (index >= 0 && state.lineItems[index].productQuantity === 1) {
    // remove line item from array
    state.lineItems.splice(index, 1);
  }
};

const removeLineItemReducer = (
  state: CartState,
  action: PayloadAction<LineItemType>
) => {
  const index = state.lineItems.findIndex(
    (lineItem) => lineItem._id === action.payload._id
  );
  if (index >= 0) {
    state.lineItems.splice(index, 1);
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  // the 'reducers' field lets us define reducers and generate associated actions
  // use the payloadAction type to declare the contents of 'actions.payload

  reducers: {
    addLineItem: addLineItemReducer,
    decrementLineItemQuantity: decrementQuantityReducer,
    removeLineItem: removeLineItemReducer,
    resetCartState() {
      return initialState;
    },

  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload.cart,
      };
    },
  },

  // the extraReducers field lets us define additional reducers that are not associated with a specific action
  // use the extraReducers type to declare the contents of 'actions.extraReducers'
  // extraReducers: {
  // }
});

export const {
  addLineItem,
  decrementLineItemQuantity,
  removeLineItem,
  resetCartState,
} = cartSlice.actions;
export default cartSlice.reducer;
