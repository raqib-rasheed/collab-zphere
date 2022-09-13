import React, { useContext, useRef, useState } from 'react';
import classNames from 'classnames';
import { motion, MotionStyle } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Brand from '../Brand/Brand';
import Navigation from '../Navigation/Navigation';
import User from '../User/User';
import { sidebarMenus } from '../../menu';
import ThemeContext from '../../contexts/themeContext';
import Card, { CardBody } from '../../components/bootstrap/Card';

import Hand from '../../assets/img/hand.png';
import HandWebp from '../../assets/img/hand.webp';
import Button from '../../components/bootstrap/Button';
import Tooltips from '../../components/bootstrap/Tooltips';
import useDarkMode from '../../hooks/useDarkMode';
import useAsideTouch from '../../hooks/useAsideTouch';

const Aside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	const { asideStyle, touchStatus, hasTouchButton, asideWidthWithSpace, x } = useAsideTouch();

	const isModernDesign = process.env.REACT_APP_MODERN_DESGIN === 'true';

	const constraintsRef = useRef(null);

	const [doc, setDoc] = useState(false);

	const { t } = useTranslation(['translation', 'menu']);

	const { darkModeStatus } = useDarkMode();

	return (
		<>
			<motion.aside
				style={asideStyle as MotionStyle}
				className={classNames(
					'aside',
					{ open: asideStatus },
					{
						'aside-touch-bar': hasTouchButton && isModernDesign,
						'aside-touch-bar-close': !touchStatus && hasTouchButton && isModernDesign,
						'aside-touch-bar-open': touchStatus && hasTouchButton && isModernDesign,
					},
				)}>
				<div className='aside-head'>
					<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
				</div>
				<div className='aside-body'>
					<Navigation menu={sidebarMenus} id='aside-dashboard' />
					{asideStatus && doc && (
						<Card className='m-3 '>
							<CardBody className='pt-0'>
								<img
									srcSet={HandWebp}
									src={Hand}
									alt='Hand'
									width={130}
									height={130}
								/>
								<p
									className={classNames('h4', {
										'text-dark': !darkModeStatus,
										'text-light': darkModeStatus,
									})}>
									{t('Everything is ready!')}
								</p>
								<Button
									color='info'
									isLight
									className='w-100'
									onClick={() => setDoc(false)}>
									{t('Demo Pages')}
								</Button>
							</CardBody>
						</Card>
					)}
				</div>
				<div className='aside-foot'>
					<User />
				</div>
			</motion.aside>
			{asideStatus && hasTouchButton && isModernDesign && (
				<>
					<motion.div className='aside-drag-area' ref={constraintsRef} />
					<Tooltips title='Toggle Aside' flip={['top', 'right']}>
						<motion.div
							className='aside-touch'
							drag='x'
							whileDrag={{ scale: 1.2 }}
							whileHover={{ scale: 1.1 }}
							dragConstraints={constraintsRef}
							// onDrag={(event, info) => console.log(info.point.x, info.point.y)}
							dragElastic={0.1}
							style={{ x, zIndex: 1039 }}
							onClick={() => x.set(x.get() === 0 ? asideWidthWithSpace : 0)}
						/>
					</Tooltips>
				</>
			)}
		</>
	);
};

export default Aside;
