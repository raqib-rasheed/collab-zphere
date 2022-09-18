import React, { FC, useEffect, useState } from 'react';
import { Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PathNames } from 'bot/helpers/types';
import { apiUrl } from 'bot/helpers/settings';
import { getCookie } from 'bot/helpers/utils';
import { useStoreState, useActions } from 'bot/helpers/store';
import { makeRoutesFromObject, routes, getRoutePath } from 'bot/routes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './styles/css/index.css';
import './index.css';
// import "./styles/css/otherstyles.css"


const App: FC = () => {
	const [routesElements, setRoutes] = useState<JSX.Element[]>([]);

	const user = useStoreState((state) => state.userStore.user);
	const setUser = useActions((actions) => actions.userStore.setUser);

	let navigate = useNavigate();
	const token = getCookie('AUTHORIZATION');
	const axiosInstance = axios.create({
		baseURL: apiUrl,
		timeout: 20000,
		headers: {
			Authorization: token as string,
			'Content-Type': 'application/json',
			accept: 'application/json',
		},
	});

	useEffect(() => {
		if (user === null) {
			axiosInstance
				.get('/user/')
				.then((response) => {
					if (response.status !== 200) {
						navigate(getRoutePath(PathNames.user));
					} else {
						setUser(response.data);
					}
				})
				.catch((e) => navigate(getRoutePath(PathNames.login)));
		}
	}, [user]);

	useEffect(() => {
		setRoutes(makeRoutesFromObject(routes, null)); // store this routes to redux to avoid calling makeroutesfromobject
	}, []);

	// console.log(getRoutePath('home', routes, null))

	return (
		// <BrowserRouter>
			<React.StrictMode>
				<Routes> {makeRoutesFromObject(routes, null)} </Routes>
			</React.StrictMode>
		// </BrowserRouter>
	);
};

export default App;
