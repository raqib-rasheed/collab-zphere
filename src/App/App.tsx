import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { ThemeProvider } from 'react-jss';
import { ReactNotifications } from 'react-notifications-component';
import { useFullscreen } from 'react-use';
import { Route, Routes } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { TourProvider } from '@reactour/tour';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ThemeContext from '../contexts/themeContext';

import Aside from '../layout/Aside/Aside';
import Wrapper from '../layout/Wrapper/Wrapper';
import Portal from '../layout/Portal/Portal';
import { Toast, ToastContainer } from '../components/bootstrap/Toasts';
import useDarkMode from '../hooks/useDarkMode';
import COLORS from '../common/data/enumColors';
import { getOS } from '../helpers/helpers';
import steps, { styles } from '../steps';

const App = () => {
	getOS();
	const queryClient = new QueryClient();
	/**
	 * Dark Mode
	 */

	const { themeStatus, darkModeStatus } = useDarkMode();
	const theme = {
		theme: themeStatus,
		primary: COLORS.PRIMARY.code,
		secondary: COLORS.SECONDARY.code,
		success: COLORS.SUCCESS.code,
		info: COLORS.INFO.code,
		warning: COLORS.WARNING.code,
		danger: COLORS.DANGER.code,
		dark: COLORS.DARK.code,
		light: COLORS.LIGHT.code,
	};

	useEffect(() => {
		if (darkModeStatus) {
			document.documentElement.setAttribute('theme', 'dark');
		}
		return () => {
			document.documentElement.removeAttribute('theme');
		};
	}, [darkModeStatus]);

	/**
	 * Full Screen
	 */
	// @ts-ignore
	const { fullScreenStatus, setFullScreenStatus } = useContext(ThemeContext);
	const ref = useRef(null);
	useFullscreen(ref, fullScreenStatus, {
		onClose: () => setFullScreenStatus(false),
	});

	/**
	 * Modern Design
	 */
	useLayoutEffect(() => {
		if (process.env.REACT_APP_MODERN_DESGIN === 'true') {
			document.body.classList.add('modern-design');
		} else {
			document.body.classList.remove('modern-design');
		}
	});

	//	Add paths to the array that you don't want to be "Aside".

	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<ToastProvider components={{ ToastContainer, Toast }}>
					<TourProvider
						steps={steps}
						styles={styles}
						showNavigation={false}
						showBadge={false}>
						<div
							ref={ref}
							className='app'
							style={{
								backgroundColor: fullScreenStatus ? 'var(--bs-body-bg)' : undefined,
								zIndex: fullScreenStatus ? 1 : undefined,
								overflow: fullScreenStatus ? 'scroll' : undefined,
							}}>
							<Routes>
								<Route path='*' element={<Aside />} />
							</Routes>
							<Wrapper />
						</div>
						<Portal id='portal-notification'>
							<ReactNotifications />
						</Portal>
					</TourProvider>
				</ToastProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ThemeProvider>
	);
};

export default App;
