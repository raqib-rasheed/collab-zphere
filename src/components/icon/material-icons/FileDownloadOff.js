import * as React from 'react';

function SvgFileDownloadOff(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M13 5h-2v3.17l2 2z' />
			<path d='M11 8.17l-2-2V3h6v6h4l-3.59 3.59L13 10.17V5h-2v3.17zm10.19 13.02L2.81 2.81 1.39 4.22 6.17 9H5l7 7 .59-.59L15.17 18H5v2h12.17l2.61 2.61 1.41-1.42z' />
		</svg>
	);
}

export default SvgFileDownloadOff;
