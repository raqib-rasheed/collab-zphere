import React from 'react';
import { CardBody, CardHeader } from '../../../../components/bootstrap/Card';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import Button from '../../../../components/bootstrap/Button';

const ZoomMeetingSetting = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Zoom meeting Setting</div>
				<div className='fs-6'>Edit your Zoom settings</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'>
					<form>
						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								id='Zoom API Key'
								label='Zoom API Key'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Zoom API Secret'
								label='Zoom API Secret'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div
							style={{ borderTop: '1px solid #d4dbe3', marginTop: '42%' }}
							className='d-flex justify-content-end'>
							<Button className='my-4' color='primary'>
								Save Changes
							</Button>
						</div>
					</form>
				</div>
			</CardBody>
		</>
	);
};

export default ZoomMeetingSetting;
