import * as React from 'react';

function SvgHr(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M12 3H4a1 1 0 00-1 1v2.5H2V4a2 2 0 012-2h8a2 2 0 012 2v2.5h-1V4a1 1 0 00-1-1zM2 9.5h1V12a1 1 0 001 1h8a1 1 0 001-1V9.5h1V12a2 2 0 01-2 2H4a2 2 0 01-2-2V9.5zm-1.5-2a.5.5 0 000 1h15a.5.5 0 000-1H.5z' />
		</svg>
	);
}

export default SvgHr;
