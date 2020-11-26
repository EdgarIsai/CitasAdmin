import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "citas",

	initialState: {
		filter: "dia",
		dia: "0",
		mes: "oct",
	},
	reducers: {
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
		setDia: (state, action) => {
			state.dia = action.payload;
		},
		setMes: (state, action) => {
			state.mes = action.payload;
		},
	},
});

export const { setFilter, setDia, setMes } = slice.actions;

export const selectFilter = (state) => state.citas;

export default slice.reducer;
