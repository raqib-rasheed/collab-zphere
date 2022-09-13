import * as React from 'react';

function SvgUpgrade(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M16 18v2H8v-2h8zM11 7.99V16h2V7.99h3L12 4 8 7.99h3z' />
		</svg>
	);
}

export default SvgUpgrade;
