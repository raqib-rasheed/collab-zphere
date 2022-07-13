import * as React from 'react';

function SvgDisc(props) {
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
			<path d='M10 8a2 2 0 11-4 0 2 2 0 014 0zM8 4a4 4 0 00-4 4 .5.5 0 01-1 0 5 5 0 015-5 .5.5 0 010 1zm4.5 3.5a.5.5 0 01.5.5 5 5 0 01-5 5 .5.5 0 010-1 4 4 0 004-4 .5.5 0 01.5-.5z' />
		</svg>
	);
}

export default SvgDisc;
