import React from 'react';
import { CardBody, CardHeader } from '../../../../components/bootstrap/Card';

const ExperienceCertificateSettings = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Experience Certificate Settings</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'></div>
			</CardBody>
		</>
	);
};

export default ExperienceCertificateSettings;
