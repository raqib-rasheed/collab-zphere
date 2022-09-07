import * as React from 'react';

function SvgWind(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M12.5 2A2.5 2.5 0 0010 4.5a.5.5 0 01-1 0A3.5 3.5 0 1112.5 8H.5a.5.5 0 010-1h12a2.5 2.5 0 000-5zm-7 1a1 1 0 00-1 1 .5.5 0 01-1 0 2 2 0 112 2h-5a.5.5 0 010-1h5a1 1 0 000-2zM0 9.5A.5.5 0 01.5 9h10.042a3 3 0 11-3 3 .5.5 0 011 0 2 2 0 102-2H.5a.5.5 0 01-.5-.5z' />
		</svg>
	);
}

export default SvgWind;
