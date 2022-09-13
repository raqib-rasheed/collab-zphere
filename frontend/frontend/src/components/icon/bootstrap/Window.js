import * as React from 'react';

function SvgWindow(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2.5 4a.5.5 0 100-1 .5.5 0 000 1zm2-.5a.5.5 0 11-1 0 .5.5 0 011 0zm1 .5a.5.5 0 100-1 .5.5 0 000 1z' />
			<path d='M2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2zm13 2v2H1V3a1 1 0 011-1h12a1 1 0 011 1zM2 14a1 1 0 01-1-1V6h14v7a1 1 0 01-1 1H2z' />
		</svg>
	);
}

export default SvgWindow;
