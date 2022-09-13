import * as React from 'react';

function SvgSkipEndBtn(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M6.79 5.093L9.5 7.028V5.5a.5.5 0 011 0v5a.5.5 0 01-1 0V8.972l-2.71 1.935A.5.5 0 016 10.5v-5a.5.5 0 01.79-.407z' />
			<path d='M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm15 0a1 1 0 00-1-1H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4z' />
		</svg>
	);
}

export default SvgSkipEndBtn;
