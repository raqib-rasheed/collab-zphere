import * as React from 'react';

function SvgHourglassTop(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M8 7.5l4 4 4-4V4H8z' />
			<path opacity={0.3} d='M8 7.5l4 4 4-4V4H8z' />
			<path d='M18 2H6v6l4 4-3.99 4.01L6 22h12l-.01-5.99L14 12l4-3.99V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9l-4 4-4-4V4h8v3.5z' />
		</svg>
	);
}

export default SvgHourglassTop;
