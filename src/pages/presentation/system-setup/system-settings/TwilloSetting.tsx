import React from 'react';
import {
	CardBody,
	CardFooter,
	CardFooterRight,
	CardHeader,
} from '../../../../components/bootstrap/Card';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import Checks from '../../../../components/bootstrap/forms/Checks';
import Button from '../../../../components/bootstrap/Button';

const TwillioSetting = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Twillio Setting</div>
				<div className='fs-6'>Edit your Twillio settings</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'>
					<form>
						<div className='d-flex justify-content-between my-3'>
							<FormGroup id='Twilio SID' label='Twilio SID' style={{ width: '31%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Twilio Token'
								label='Twilio Token'
								style={{ width: '31%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Twilio From'
								label='Twilio From'
								style={{ width: '31%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>
						<div className='fw-bold fs-5 my-4'>Module Settings</div>

						<div className='row my-3'>
							<FormGroup
								id='New Customer'
								label='New Customer'
								className='d-flex justify-content-between mx-3 p-2'
								style={{ border: '1px solid #f1f1f1', width: '22%' }}>
								<Checks
									checked
									id=''
									name=''
									type='switch'

									//   onChange={}
								/>
							</FormGroup>
							<FormGroup
								id='New Invoice'
								label='New Invoice'
								className='d-flex justify-content-between mx-3 p-2'
								style={{ border: '1px solid #f1f1f1', width: '22%' }}>
								<Checks
									checked
									id=''
									name=''
									type='switch'

									//   onChange={}
								/>
							</FormGroup>
							<FormGroup
								id='New Bill'
								label='New Bill'
								className='d-flex justify-content-between mx-3 p-2'
								style={{ border: '1px solid #f1f1f1', width: '22%' }}>
								<Checks
									checked
									id=''
									name=''
									type='switch'

									//   onChange={}
								/>
							</FormGroup>
							<FormGroup
								id='New Vendor'
								label='New Vendor'
								className='d-flex justify-content-between mx-3 p-2'
								style={{ border: '1px solid #f1f1f1', width: '22%' }}>
								<Checks
									checked
									id=''
									name=''
									type='switch'

									//   onChange={}
								/>
							</FormGroup>
						</div>

						<div className='row my-3'>
							<FormGroup
								id='New Revenue'
								label='New Revenue'
								className='d-flex justify-content-between mx-3 p-2'
								style={{ border: '1px solid #f1f1f1', width: '22%' }}>
								<Checks
									checked
									id=''
									name=''
									type='switch'

									//   onChange={}
								/>
							</FormGroup>
							<FormGroup
								id='New Proposal'
								label='New Proposal'
								className='d-flex justify-content-between mx-3 p-2'
								style={{ border: '1px solid #f1f1f1', width: '22%' }}>
								<Checks
									checked
									id=''
									name=''
									type='switch'

									//   onChange={}
								/>
							</FormGroup>
							<FormGroup
								id='New Payment'
								label='New Payment'
								className='d-flex justify-content-between mx-3 p-2'
								style={{ border: '1px solid #f1f1f1', width: '22%' }}>
								<Checks
									checked
									id=''
									name=''
									type='switch'

									//   onChange={}
								/>
							</FormGroup>
							<FormGroup
								id='Invoice Reminder'
								label='Invoice Reminder'
								className='d-flex justify-content-between mx-3 p-2'
								style={{ border: '1px solid #f1f1f1', width: '22%' }}>
								<Checks
									checked
									id=''
									name=''
									type='switch'

									//   onChange={}
								/>
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

export default TwillioSetting;
