import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "user",

	initialState: {
		nombre: "",
		carrera: "",
		password: "",
		auth: 0,
	},
	reducers: {
		setNombre: (state, action) => {
			state.nombre = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
		setCarrera: (state, action) => {
			state.carrera = action.payload;
		},
		setAuth: (state, action) => {
			state.auth = action.payload;
		},
	},
});

export const { setNombre, setCarrera, setPassword, setAuth } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state) => state.user;

export default slice.reducer;
