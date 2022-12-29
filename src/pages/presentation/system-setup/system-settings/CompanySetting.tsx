import React from 'react';
import { CardBody, CardHeader } from '../../../../components/bootstrap/Card';

const CompanySetting = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Company Setting</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'></div>
			</CardBody>
		</>
	);
};

export default CompanySetting;
