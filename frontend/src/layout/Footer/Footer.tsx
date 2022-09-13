import React from 'react';
import { useMeasure } from 'react-use';
import classNames from 'classnames';
import useDarkMode from '../../hooks/useDarkMode';

const Footer = () => {
	const [ref, { height }] = useMeasure<HTMLDivElement>();

	const root = document.documentElement;
	root.style.setProperty('--footer-height', `${height}px`);

	const { darkModeStatus } = useDarkMode();

	return (
		<footer ref={ref} className='footer'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<span className='fw-light'>
							Copyright © 2022 - <small className='fw-bold'>Zphere</small>
						</span>
					</div>
					<div className='col-auto'>
						<a
							href='/'
							className={classNames('text-decoration-none', {
								'link-dark': !darkModeStatus,
								'link-light': darkModeStatus,
							})}>
							<small className='fw-bold'>Zphere</small>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
