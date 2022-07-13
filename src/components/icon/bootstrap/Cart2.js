import * as React from 'react';

function SvgCart2(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 2.5A.5.5 0 01.5 2H2a.5.5 0 01.485.379L2.89 4H14.5a.5.5 0 01.485.621l-1.5 6A.5.5 0 0113 11H4a.5.5 0 01-.485-.379L1.61 3H.5a.5.5 0 01-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zm9-1a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z' />
		</svg>
	);
}

export default SvgCart2;
