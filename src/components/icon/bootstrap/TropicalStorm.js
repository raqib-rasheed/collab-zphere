import * as React from 'react';

function SvgTropicalStorm(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 9.5a2 2 0 100-4 2 2 0 000 4z' />
			<path d='M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0113 7.5a6.5 6.5 0 11-13 0 .5.5 0 011 0 5.5 5.5 0 008.001 4.9A5 5 0 013 7.5a6.5 6.5 0 0113 0 .5.5 0 01-1 0A5.5 5.5 0 009.5 2zM8 3.5a4 4 0 100 8 4 4 0 000-8z' />
		</svg>
	);
}

export default SvgTropicalStorm;
