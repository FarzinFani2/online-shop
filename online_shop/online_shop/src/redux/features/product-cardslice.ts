import { ProductType, TableProductType } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: ProductState;
};

type ProductState = {
  selectedProducts: TableProductType[];
};

const initialState = {
  value: {
    selectedProducts: [],
  } as ProductState,
} as InitialState;

export const productCart = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addToProduct: (state, action: PayloadAction<ProductType>) => {
      const id = action.payload.id;
      const isExsist = state.value.selectedProducts.findIndex(
        (p) => p.id === id
      );
      if (isExsist !== -1) {
        const quantity = state.value.selectedProducts[isExsist].quantity;
        state.value.selectedProducts[isExsist].quantity += 1;
      } else {
        state.value.selectedProducts.push({ ...action.payload, quantity: 1 });
      }
    },
    minusFromProduc: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const isExsist = state.value.selectedProducts.find((p) => p.id === id);
      if (isExsist) {
        if (isExsist.quantity === 1) {
          state.value.selectedProducts = state.value.selectedProducts.filter(
            (p) => p.id !== id
          );
        } else {
          isExsist.quantity--;
        }
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.value.selectedProducts = state.value.selectedProducts.filter(
        (p) => p.id !== id
      );
    },
  },
});

export const { addToProduct, minusFromProduc, removeProduct } =
  productCart.actions;
export default productCart.reducer;
