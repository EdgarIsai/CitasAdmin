import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Store/Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";
import Citas from "./Components/Citas/Citas";
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<React.StrictMode>
				<Route exact path="/">
					<LogIn />
				</Route>
				<Route exact path="/citas">
					<Citas />
				</Route>
			</React.StrictMode>
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
