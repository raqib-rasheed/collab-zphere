import * as React from 'react';

function SvgArrow90DegUp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M4.854 1.146a.5.5 0 00-.708 0l-4 4a.5.5 0 10.708.708L4 2.707V12.5A2.5 2.5 0 006.5 15h8a.5.5 0 000-1h-8A1.5 1.5 0 015 12.5V2.707l3.146 3.147a.5.5 0 10.708-.708l-4-4z'
			/>
		</svg>
	);
}

export default SvgArrow90DegUp;
