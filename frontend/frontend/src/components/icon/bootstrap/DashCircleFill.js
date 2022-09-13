import * as React from 'react';

function SvgDashCircleFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M16 8A8 8 0 110 8a8 8 0 0116 0zM4.5 7.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z' />
		</svg>
	);
}

export default SvgDashCircleFill;
