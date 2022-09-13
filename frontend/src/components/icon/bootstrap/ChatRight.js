import * as React from 'react';

function SvgChatRight(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2 1a1 1 0 00-1 1v8a1 1 0 001 1h9.586a2 2 0 011.414.586l2 2V2a1 1 0 00-1-1H2zm12-1a2 2 0 012 2v12.793a.5.5 0 01-.854.353l-2.853-2.853a1 1 0 00-.707-.293H2a2 2 0 01-2-2V2a2 2 0 012-2h12z' />
		</svg>
	);
}

export default SvgChatRight;
