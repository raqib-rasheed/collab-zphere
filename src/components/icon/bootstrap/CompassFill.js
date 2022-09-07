import * as React from 'react';

function SvgCompassFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M15.5 8.516a7.5 7.5 0 11-9.462-7.24A1 1 0 017 0h2a1 1 0 01.962 1.276 7.503 7.503 0 015.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z' />
		</svg>
	);
}

export default SvgCompassFill;
