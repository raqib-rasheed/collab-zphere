import React from 'react';
import useDarkMode from '../../../../hooks/useDarkMode';
import { CardBody, CardHeader } from '../../../../components/bootstrap/Card';

const TelegramSetting = () => {
	const { themeStatus } = useDarkMode();

	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Telegram Setting</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'></div>
			</CardBody>
		</>
	);
};

export default TelegramSetting;
