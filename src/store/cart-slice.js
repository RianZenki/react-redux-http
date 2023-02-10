import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalQuantity: 0,
	items: [],
	changed: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
		},
		addItemToCart: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.items.find(
				(item) => item.id === newItem.id
			);

			state.changed = true;
			state.totalQuantity++;

			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice += existingItem.price;
			}
		},
		removeItemToCart: (state, action) => {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);

			state.changed = true;
			state.totalQuantity--;

			if (existingItem.quantity > 1) {
				existingItem.quantity--;
				existingItem.totalPrice -= existingItem.price;
			} else {
				state.items = state.items.filter((item) => item.id !== id);
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export { cartSlice };
