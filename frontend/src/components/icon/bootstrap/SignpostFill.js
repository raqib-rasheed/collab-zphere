import * as React from 'react';

function SvgSignpostFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M7.293.707A1 1 0 007 1.414V4H2a1 1 0 00-1 1v4a1 1 0 001 1h5v6h2v-6h3.532a1 1 0 00.768-.36l1.933-2.32a.5.5 0 000-.64L13.3 4.36a1 1 0 00-.768-.36H9V1.414A1 1 0 007.293.707z' />
		</svg>
	);
}

export default SvgSignpostFill;
