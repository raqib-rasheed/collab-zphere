import * as React from 'react';

function SvgUiRadiosGrid(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M3.5 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm9-9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 9a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM16 3.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-9 9a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm5.5 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-9-11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 2a3.5 3.5 0 100-7 3.5 3.5 0 000 7z' />
		</svg>
	);
}

export default SvgUiRadiosGrid;
