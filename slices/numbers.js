import { createSlice } from '@reduxjs/toolkit';

export const numbersSlice = createSlice({
	name: 'number',
	initialState: {
		list: [],
        removed: []
	},
	reducers: {
		addNumber: (state, action) => {
			const addItem = { id: action.payload.id, name: action.payload.name };
			state.list = [ ...state.list, addItem ];
		},
		removeNumber: (state, action) => {
			const removeItem = state.list.filter((item) => item.id == action.payload);
            const delatedItem = state.list.filter((item) => item.id !== action.payload)
      state.list = removeItem;
      state.removed = delatedItem;
    }
	}
});

// Action creators are generated for each case reducer function
export const { addNumber, removeNumber } = numbersSlice.actions;
export const number = (state) => state.number.list;
export const delated = (state) => state.number.removed;
export default numbersSlice.reducer;