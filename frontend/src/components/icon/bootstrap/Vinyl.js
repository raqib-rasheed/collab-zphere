import * as React from 'react';

function SvgVinyl(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z' />
			<path d='M8 6a2 2 0 100 4 2 2 0 000-4zM4 8a4 4 0 118 0 4 4 0 01-8 0z' />
			<path d='M9 8a1 1 0 11-2 0 1 1 0 012 0z' />
		</svg>
	);
}

export default SvgVinyl;
