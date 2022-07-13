import * as React from 'react';

function SvgThermometer(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
			<path d='M8 0a2.5 2.5 0 00-2.5 2.5v7.55a3.5 3.5 0 105 0V2.5A2.5 2.5 0 008 0zM6.5 2.5a1.5 1.5 0 113 0v7.987l.167.15a2.5 2.5 0 11-3.333 0l.166-.15V2.5z' />
		</svg>
	);
}

export default SvgThermometer;
