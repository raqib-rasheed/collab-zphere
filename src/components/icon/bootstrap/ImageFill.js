import * as React from 'react';

function SvgImageFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M.002 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-12a2 2 0 01-2-2V3zm1 9v1a1 1 0 001 1h12a1 1 0 001-1V9.5l-3.777-1.947a.5.5 0 00-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 00-.63.062L1.002 12zm5-6.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z' />
		</svg>
	);
}

export default SvgImageFill;
