import * as React from 'react';

function SvgAlignTop(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<rect width={4} height={12} rx={1} transform='matrix(1 0 0 -1 6 15)' />
			<path d='M1.5 2a.5.5 0 010-1v1zm13-1a.5.5 0 010 1V1zm-13 0h13v1h-13V1z' />
		</svg>
	);
}

export default SvgAlignTop;
