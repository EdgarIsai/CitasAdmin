import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducers/userReducer";
import requestReducer from "../Reducers/requestReducer";
import citasReducer from "../Reducers/citasReducer";

export default configureStore({
	reducer: {
		user: userReducer,
		request: requestReducer,
		citas: citasReducer,
	},
});
