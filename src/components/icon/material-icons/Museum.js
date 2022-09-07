import * as React from 'react';

function SvgMuseum(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M6 20h12V9H6v11zm2-9h2l2 3 2-3h2v7h-2v-4l-2 3-2-3v4H8v-7z' opacity={0.3} />
			<path d='M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-4 9H6V9h12v11z' />
			<path d='M10 14l2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z' />
		</svg>
	);
}

export default SvgMuseum;
