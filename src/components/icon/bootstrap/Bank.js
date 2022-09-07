import * as React from 'react';

function SvgBank(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 .95L14.61 4h.89a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H15v7a.5.5 0 01.485.379l.5 2A.5.5 0 0115.5 17H.5a.5.5 0 01-.485-.621l.5-2A.5.5 0 011 14V7H.5a.5.5 0 01-.5-.5v-2A.5.5 0 01.5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z' />
		</svg>
	);
}

export default SvgBank;
