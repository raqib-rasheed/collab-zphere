import * as React from 'react';

function SvgSdCardFill(props) {
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
				d='M12.5 0H5.914a1.5 1.5 0 00-1.06.44L2.439 2.853A1.5 1.5 0 002 3.914V14.5A1.5 1.5 0 003.5 16h9a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0012.5 0zm-7 2.75a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zm2 0a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zm2.75.75a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2zm1.25-.75a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75z'
			/>
		</svg>
	);
}

export default SvgSdCardFill;
