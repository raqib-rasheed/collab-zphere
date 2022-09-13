import * as React from 'react';

function SvgFileUpload(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M9.83 8H11v6h2V8h1.17L12 5.83z' />
			<path d='M5 18h14v2H5zM5 10h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2V8H9.83L12 5.83 14.17 8H13z' />
		</svg>
	);
}

export default SvgFileUpload;
