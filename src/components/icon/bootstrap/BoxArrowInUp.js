import * as React from 'react';

function SvgBoxArrowInUp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M3.5 10a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-2a.5.5 0 000 1h2A1.5 1.5 0 0014 9.5v-8A1.5 1.5 0 0012.5 0h-9A1.5 1.5 0 002 1.5v8A1.5 1.5 0 003.5 11h2a.5.5 0 000-1h-2z'
			/>
			<path
				fillRule='evenodd'
				d='M7.646 4.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V14.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3z'
			/>
		</svg>
	);
}

export default SvgBoxArrowInUp;
