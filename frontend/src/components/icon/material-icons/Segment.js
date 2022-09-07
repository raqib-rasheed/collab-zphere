import * as React from 'react';

function SvgSegment(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z' />
		</svg>
	);
}

export default SvgSegment;
