import * as React from 'react';

function SvgViewWeek(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z' opacity={0.3} />
			<path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z' />
		</svg>
	);
}

export default SvgViewWeek;
