import React from 'react';
import useDarkMode from '../../../../hooks/useDarkMode';
import { CardBody, CardHeader } from '../../../../components/bootstrap/Card';

const SlackSetting = () => {
	const { themeStatus } = useDarkMode();

	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Slack Setting</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'></div>
			</CardBody>
		</>
	);
};

export default SlackSetting;
