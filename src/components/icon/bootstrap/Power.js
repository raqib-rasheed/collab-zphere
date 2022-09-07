import * as React from 'react';

function SvgPower(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M7.5 1v7h1V1h-1z' />
			<path d='M3 8.812a4.999 4.999 0 012.578-4.375l-.485-.874A6 6 0 1011 3.616l-.501.865A5 5 0 113 8.812z' />
		</svg>
	);
}

export default SvgPower;
