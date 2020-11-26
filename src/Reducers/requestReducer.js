import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "request",
	initialState: {
		base: "3",
		datosUdg: "https://cuceimobile.tech/Escuela/datosudeg.php",
		altasCitas:
			"https://eiscprograparainternet.000webhostapp.com/AltasCitas.php",
		allCitas:
			"https://eiscprograparainternet.000webhostapp.com/VerCitas.php",
		borrarCita:
			"https://eiscprograparainternet.000webhostapp.com/BajasCitas.php",
		editarCita:
			"https://eiscprograparainternet.000webhostapp.com/editarCita.php",
		allCitasAdmin:
			"https://eiscprograparainternet.000webhostapp.com/verCitasAdmin.php",
		authAdmin: "http://eiscprograparainternet.000webhostapp.com/auth.php",
		response: "",
	},
	reducers: {
		setResponse: (state, action) => {
			state.response = action.payload;
		},
	},
});

export const { setResponse } = slice.actions;

// @param adsd The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAllCitas = (state) => state.request.allCitas;
export const selectResponse = (state) => state.request.response;
export const selectBorrarCita = (state) => state.request.borrarCita;
export const selectEditarCita = (state) => state.request.editarCita;
export const selectRequests = (state) => state.request;

export default slice.reducer;
