import * as React from 'react';

function SvgSignalWifiStatusbar3Bar(props) {
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
				d='M21.18 11.8L24 8.98A16.88 16.88 0 0012 4C7.31 4 3.07 5.9 0 8.98l2.82 2.82C5.17 9.45 8.41 8 12 8s6.83 1.45 9.18 3.8z'
				fillOpacity={0.3}
			/>
			<path d='M21.18 11.8C18.83 9.45 15.59 8 12 8s-6.83 1.45-9.18 3.8L12 21l9.18-9.2z' />
		</svg>
	);
}

export default SvgSignalWifiStatusbar3Bar;
