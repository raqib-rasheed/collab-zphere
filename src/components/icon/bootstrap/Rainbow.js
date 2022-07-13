import * as React from 'react';

function SvgRainbow(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 4.5a7 7 0 00-7 7 .5.5 0 01-1 0 8 8 0 1116 0 .5.5 0 01-1 0 7 7 0 00-7-7zm0 2a5 5 0 00-5 5 .5.5 0 01-1 0 6 6 0 1112 0 .5.5 0 01-1 0 5 5 0 00-5-5zm0 2a3 3 0 00-3 3 .5.5 0 01-1 0 4 4 0 118 0 .5.5 0 01-1 0 3 3 0 00-3-3zm0 2a1 1 0 00-1 1 .5.5 0 01-1 0 2 2 0 114 0 .5.5 0 01-1 0 1 1 0 00-1-1z' />
		</svg>
	);
}

export default SvgRainbow;
