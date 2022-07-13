import * as React from 'react';

function SvgSwitchRight(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M24 24H0V0h24z' />
			<path opacity={0.3} d='M15.5 15.38V8.62L18.88 12l-3.38 3.38' />
			<path d='M15.5 15.38V8.62L18.88 12l-3.38 3.38M14 19l7-7-7-7v14zm-4 0V5l-7 7 7 7z' />
		</svg>
	);
}

export default SvgSwitchRight;
