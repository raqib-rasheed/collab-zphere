import * as React from 'react';

function SvgArrowUpLeft(props) {
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
				d='M2 2.5a.5.5 0 01.5-.5h6a.5.5 0 010 1H3.707l10.147 10.146a.5.5 0 01-.708.708L3 3.707V8.5a.5.5 0 01-1 0v-6z'
			/>
		</svg>
	);
}

export default SvgArrowUpLeft;
