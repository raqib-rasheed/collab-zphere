import * as React from 'react';

function SvgCreditCardFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 4a2 2 0 012-2h12a2 2 0 012 2v1H0V4zm0 3v5a2 2 0 002 2h12a2 2 0 002-2V7H0zm3 2h1a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1z' />
		</svg>
	);
}

export default SvgCreditCardFill;
