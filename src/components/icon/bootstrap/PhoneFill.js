import * as React from 'react';

function SvgPhoneFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M3 2a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V2zm6 11a1 1 0 10-2 0 1 1 0 002 0z' />
		</svg>
	);
}

export default SvgPhoneFill;
