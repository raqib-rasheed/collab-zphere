import * as React from 'react';

function SvgPersonBadgeFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm4.5 0a.5.5 0 000 1h3a.5.5 0 000-1h-3zM8 11a3 3 0 100-6 3 3 0 000 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 001 1h8a1 1 0 001-1v-.245z' />
		</svg>
	);
}

export default SvgPersonBadgeFill;
