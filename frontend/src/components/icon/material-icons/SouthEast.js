import * as React from 'react';

function SvgSouthEast(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z' />
		</svg>
	);
}

export default SvgSouthEast;
