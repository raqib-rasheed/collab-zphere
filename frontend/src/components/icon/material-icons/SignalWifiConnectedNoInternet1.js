import * as React from 'react';

function SvgSignalWifiConnectedNoInternet1(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M12 12h8.99L24 8.98A16.88 16.88 0 0012 4C7.31 4 3.07 5.9 0 8.98l6.35 6.36A7.932 7.932 0 0112 13v-1z'
				fillOpacity={0.3}
			/>
			<path d='M12 21v-8c-2.21 0-4.2.89-5.65 2.34L12 21zm9-5.59L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z' />
		</svg>
	);
}

export default SvgSignalWifiConnectedNoInternet1;
