import * as React from 'react';

function SvgDeck(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M12 4.44L8.34 7h7.32z' />
			<path d='M22 9L12 2 2 9h9v13h2V9h9zM12 4.44L15.66 7H8.34L12 4.44z' />
			<path d='M4.14 12l-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zM19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z' />
		</svg>
	);
}

export default SvgDeck;
