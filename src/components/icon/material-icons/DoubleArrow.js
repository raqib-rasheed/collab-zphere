import * as React from 'react';

function SvgDoubleArrow(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M15.5 5H11l5 7-5 7h4.5l5-7z' />
			<path d='M8.5 5H4l5 7-5 7h4.5l5-7z' />
		</svg>
	);
}

export default SvgDoubleArrow;
