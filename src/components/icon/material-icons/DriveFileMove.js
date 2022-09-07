import * as React from 'react';

function SvgDriveFileMove(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l1.41 1.41.59.59H20v10z' />
			<path d='M8 14h4v3l4-4-4-4v3H8z' />
			<path
				d='M10.59 7.41L9.17 6H4v12h16V8h-8.83l-.58-.59zM12 9l4 4-4 4v-3H8v-2h4V9z'
				opacity={0.3}
			/>
		</svg>
	);
}

export default SvgDriveFileMove;
