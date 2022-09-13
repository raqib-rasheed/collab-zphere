import * as React from 'react';

function SvgLayoutThreeColumns(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 1.5A1.5 1.5 0 011.5 0h13A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13zM1.5 1a.5.5 0 00-.5.5v13a.5.5 0 00.5.5H5V1H1.5zM10 15V1H6v14h4zm1 0h3.5a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5H11v14z' />
		</svg>
	);
}

export default SvgLayoutThreeColumns;
