import * as React from 'react';

function SvgFileEarmarkBarGraph(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M10 13.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v6zm-2.5.5a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-1zm-3 0a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-1z' />
			<path d='M14 14V4.5L9.5 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2zM9.5 3A1.5 1.5 0 0011 4.5h2V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1h5.5v2z' />
		</svg>
	);
}

export default SvgFileEarmarkBarGraph;
