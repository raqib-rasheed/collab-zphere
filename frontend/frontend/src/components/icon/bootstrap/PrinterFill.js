import * as React from 'react';

function SvgPrinterFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M5 1a2 2 0 00-2 2v1h10V3a2 2 0 00-2-2H5zm6 8H5a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1v-3a1 1 0 00-1-1z' />
			<path d='M0 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 01-2 2h-1v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2H2a2 2 0 01-2-2V7zm2.5 1a.5.5 0 100-1 .5.5 0 000 1z' />
		</svg>
	);
}

export default SvgPrinterFill;
