import * as React from 'react';

const SvgCustomGermany = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 512 512'
		style={{
			enableBackground: 'new 0 0 512 512',
		}}
		xmlSpace='preserve'
		width='1em'
		height='1em'
		className='svg-icon'
		{...props}>
		<path
			style={{
				fill: '#464655',
			}}
			d='M400.005 0h-288.01C50.141.002 0 50.146 0 112v58.667h512V112C512 50.146 461.858.002 400.005 0z'
		/>
		<path
			style={{
				fill: '#ffe15a',
			}}
			d='M0 400c0 61.856 50.144 112 112 112h288c61.856 0 112-50.144 112-112v-58.667H0V400z'
		/>
		<path
			style={{
				fill: '#ff4b55',
			}}
			d='M0 170.67h512v170.67H0z'
		/>
	</svg>
);

export default SvgCustomGermany;
