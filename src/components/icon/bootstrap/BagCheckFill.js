import * as React from 'react';

function SvgBagCheckFill(props) {
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
				d='M10.5 3.5a2.5 2.5 0 00-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4h3.5v-.5a3.5 3.5 0 117 0zm-.646 5.354a.5.5 0 00-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z'
			/>
		</svg>
	);
}

export default SvgBagCheckFill;
