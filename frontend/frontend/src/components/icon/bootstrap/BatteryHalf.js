import * as React from 'react';

function SvgBatteryHalf(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2 6h5v4H2V6z' />
			<path d='M2 4a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H2zm10 1a1 1 0 011 1v4a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1h10zm4 3a1.5 1.5 0 01-1.5 1.5v-3A1.5 1.5 0 0116 8z' />
		</svg>
	);
}

export default SvgBatteryHalf;
