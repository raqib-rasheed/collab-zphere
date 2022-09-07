import * as React from 'react';

function SvgArrow90DegLeft(props) {
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
				d='M1.146 4.854a.5.5 0 010-.708l4-4a.5.5 0 11.708.708L2.707 4H12.5A2.5 2.5 0 0115 6.5v8a.5.5 0 01-1 0v-8A1.5 1.5 0 0012.5 5H2.707l3.147 3.146a.5.5 0 11-.708.708l-4-4z'
			/>
		</svg>
	);
}

export default SvgArrow90DegLeft;
