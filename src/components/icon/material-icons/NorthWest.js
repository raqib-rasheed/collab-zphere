import * as React from 'react';

function SvgNorthWest(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z' />
		</svg>
	);
}

export default SvgNorthWest;
