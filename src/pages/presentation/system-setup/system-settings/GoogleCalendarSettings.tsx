import React from 'react';
import {
	CardBody,
	CardFooter,
	CardFooterRight,
	CardHeader,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';

const GoogleCalendarSettings = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block my-3'>
				<div className='fw-bold fs-5'>Google Calendar Settings</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'>
					<form>
						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								id='Google Calendar Id'
								label='Google Calendar Id'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Google Calendar json File'
								label='Google Calendar json File'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>
					</form>
				</div>
			</CardBody>
			<CardFooter style={{ borderTop: '1px solid #d4dbe3' }}>
				<CardFooterRight>
					<Button className='my-2 mx-3' color='primary'>
						Save Changes
					</Button>
				</CardFooterRight>
			</CardFooter>
		</>
	);
};

export default GoogleCalendarSettings;
