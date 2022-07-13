import * as React from 'react';

function SvgElevator(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M19 5v14H5V5h14m-9 13v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3zM8.5 8.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM18 11l-2.5-4-2.5 4h5zm-5 2l2.5 4 2.5-4h-5z'
				opacity={0.3}
			/>
			<path d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3zM8.5 8.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM18 11l-2.5-4-2.5 4h5zm-5 2l2.5 4 2.5-4h-5z' />
		</svg>
	);
}

export default SvgElevator;
