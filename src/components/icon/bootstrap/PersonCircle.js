import * as React from 'react';

function SvgPersonCircle(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M11 6a3 3 0 11-6 0 3 3 0 016 0z' />
			<path
				fillRule='evenodd'
				d='M0 8a8 8 0 1116 0A8 8 0 010 8zm8-7a7 7 0 00-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 008 1z'
			/>
		</svg>
	);
}

export default SvgPersonCircle;
