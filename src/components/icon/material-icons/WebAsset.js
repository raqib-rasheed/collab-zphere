import * as React from 'react';

function SvgWebAsset(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5 8h14v10H5z' opacity={0.3} />
			<path d='M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm0 14H5V8h14v10z' />
		</svg>
	);
}

export default SvgWebAsset;
