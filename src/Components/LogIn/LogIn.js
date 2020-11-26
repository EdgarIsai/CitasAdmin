import React from "react";
import classes from "./LogIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
	setNombre,
	setCarrera,
	setPassword,
	selectUser,
	setAuth,
} from "../../Reducers/userReducer";
import { selectRequests } from "../../Reducers/requestReducer";
import axios from "axios";
import { Redirect } from "react-router-dom";
const LogIn = () => {
	const dispatch = useDispatch();
	const requests = useSelector(selectRequests);
	const user = useSelector(selectUser);
	const log = () => {
		console.log(user);
		axios
			.get(
				requests.authAdmin +
					`?username=${user.nombre}&password=${user.password}`
			)
			.then((response) => {
				let res = response.data[0];
				dispatch(setCarrera(res.Carrera));
				dispatch(setAuth(1));
			})
			.catch((e) => {
				dispatch(setAuth(0));
			});
	};
	return (
		<div className={classes.loginContainer}>
			{user.auth ? <Redirect to="/citas" /> : null}
			<div>
				<h1>LogIn</h1>
				<p>Username:</p>
				<input
					type="text"
					onChange={(e) => dispatch(setNombre(e.target.value))}
				/>
				<p>Password:</p>
				<input
					type="password"
					onChange={(e) => dispatch(setPassword(e.target.value))}
				/>
				<button onClick={() => log()}>LogIn</button>
			</div>
		</div>
	);
};

export default LogIn;
