import React from 'react';
import {
	CardBody,
	CardFooter,
	CardFooterRight,
	CardHeader,
} from '../../../../components/bootstrap/Card';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Checks from '../../../../components/bootstrap/forms/Checks';
import Button from '../../../../components/bootstrap/Button';

const EmailNotificationSetting = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Email Notification Setting</div>
				<div className='fs-6'>Edit email notification settings</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'>
					<div className='row my-3'>
						<FormGroup
							id='New User'
							label='New User'
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
							id='New Client'
							label='New Client'
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
							id='New Support Ticket'
							label='New Support Ticket'
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
							id='Lead Assigned'
							label='Lead Assigned'
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
							id='Deal Assigned'
							label='Deal Assigned'
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
							id='New Award'
							label='New Award'
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
							id='Customer Invoice Sent'
							label='Customer Invoice Sent'
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
							id='New Invoice Payment'
							label='New Invoice Payment'
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
							id='New Payment Reminder'
							label='New Payment Reminder'
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
							id='New Bill Payment'
							label='New Bill Payment'
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
							id='Bill Resent'
							label='Bill Resent'
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
							id='Proposal Sent'
							label='Proposal Sent'
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
							id='Complaint Resent'
							label='Complaint Resent'
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
							id='Leave Action Sent'
							label='Leave Action Sent'
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
							id='Payslip Sent'
							label='Payslip Sent'
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
							id='Promotion Send'
							label='Promotion Send'
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
							id='Resignation Sent'
							label='Resignation Sent'
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
							id='Termination Sent'
							label='Termination Sent'
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
							id='Transfer Sent'
							label='Transfer Sent'
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
							id='Trip Sent'
							label='Trip Sent'
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
							id='Vender Bill Sent'
							label='Vender Bill Sent'
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
							id='Warning Sent'
							label='Warning Sent'
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
							id='New Contract'
							label='New Contract'
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

export default EmailNotificationSetting;
