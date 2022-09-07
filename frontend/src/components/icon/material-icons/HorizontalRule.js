import * as React from 'react';

function SvgHorizontalRule(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path fillRule='evenodd' d='M4 11h16v2H4z' />
		</svg>
	);
}

export default SvgHorizontalRule;
