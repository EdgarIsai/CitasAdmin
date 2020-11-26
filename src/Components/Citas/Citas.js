import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../Reducers/userReducer";
import { selectRequests, setResponse } from "../../Reducers/requestReducer";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {
	setFilter,
	selectFilter,
	setDia,
	setMes,
} from "../../Reducers/citasReducer";

import classes from "./Citas.module.css";

const Citas = () => {
	useEffect(() => {
		axios
			.get(requests.allCitasAdmin + `?carrera=${user.carrera}`)
			.then((response) => {
				let res = response.data;
				dispatch(setResponse(res));
				return res;
			})
			.catch((e) => {});
	}, []);
	const dispatch = useDispatch();
	const requests = useSelector(selectRequests);
	const user = useSelector(selectUser);
	console.log(user);
	let done = 0;
	const filter = useSelector(selectFilter);
	const orderedCitas = [];
	const months = {
		jan: 1,
		feb: 2,
		mar: 3,
		apr: 4,
		may: 5,
		jun: 6,
		jul: 7,
		aug: 8,
		sep: 9,
		oct: 10,
		nov: 11,
		dec: 12,
	};
	const days = {
		mon: 1,
		tue: 2,
		wed: 3,
		thu: 4,
		fri: 5,
		sat: 6,
		sun: 7,
	};

	const citasCopy = [...requests.response];
	if (filter.filter === "dia" && requests.response) {
		for (let i = 0; i < citasCopy.length; i++) {
			let temp = "";
			let citaTemp = "";
			citasCopy.map((cita, index) => {
				if (temp !== "") {
					if (parseInt(cita.Dia) < temp) {
						citaTemp = cita;
						citasCopy[index] = citasCopy[index - 1];
						citasCopy[index - 1] = citaTemp;
					}
				}
				temp = parseInt(cita.Dia);
			});
		}

		for (let i = 0; i < citasCopy.length; i++) {
			let temp = "";
			let citaTemp = "";
			citasCopy.map((cita, index) => {
				if (temp !== "") {
					if (months[cita.Mes.toLowerCase()] < temp) {
						citaTemp = cita;
						citasCopy[index] = citasCopy[index - 1];
						citasCopy[index - 1] = citaTemp;
					}
				}
				temp = months[cita.Mes.toLowerCase()];
			});
		}
	}

	return (
		<div>
			{user.auth ? null : <Redirect to="/" />}
			<h2>filter</h2>
			<select onChange={(e) => dispatch(setFilter(e.target.value))}>
				<option value="dia">dia</option>
				<option value="diaSemana">diaSemana</option>
			</select>
			{filter.filter === "diaSemana" ? (
				<>
					<p>dia: </p>
					<input
						type="text"
						onChange={(e) => dispatch(setDia(e.target.value))}
					/>
					<p>mes: </p>
					<input
						type="text"
						onChange={(e) => dispatch(setMes(e.target.value))}
					/>
				</>
			) : null}
			{requests.response
				? citasCopy.map((cita, index) => {
						if (filter.filter === "dia") {
							return (
								<div
									className={classes.citaContainer}
									key={index}
								>
									<p>Codigo: {cita.Codigo}</p>
									<p>Mes: {cita.Mes}</p>
									<p>Dia: {cita.Dia}</p>
									<p>DiaSemana: {cita.DiaSemana}</p>
									<p>Hora: {cita.Hora}</p>
								</div>
							);
						} else {
							if (
								cita.Dia == filter.dia &&
								cita.Mes.toLowerCase() ==
									filter.mes.toLowerCase()
							) {
								return (
									<div
										className={classes.citaContainer}
										key={index}
									>
										<p>Codigo: {cita.Codigo}</p>
										<p>Mes: {cita.Mes}</p>
										<p>Dia: {cita.Dia}</p>
										<p>DiaSemana: {cita.DiaSemana}</p>
										<p>Hora: {cita.Hora}</p>
									</div>
								);
							}
						}
				  })
				: null}
		</div>
	);
};

export default Citas;
