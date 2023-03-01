import React from 'react';
import {
	CardBody,
	CardFooter,
	CardFooterRight,
	CardHeader,
} from '../../../../components/bootstrap/Card';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import Button from '../../../../components/bootstrap/Button';
import Checks from '../../../../components/bootstrap/forms/Checks';

const SlackSetting = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Slack Setting</div>
				<div className='fs-6'>Edit your Slack settings</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'>
					<form>
						<FormGroup id='Slack Webhook URL' label='Slack Webhook URL'>
							<Input placeholder='' />
						</FormGroup>

						<div className='fw-bold fs-5 my-4'>Module Settings</div>
						<div className='row my-3'>
							<FormGroup
								id='New Lead'
								label='New Lead'
								className='d-flex justify-content-between mx-3 p-2'
								style={{ border: '1px solid #f1f1f1', width: '22%' }}>
								<Checks
									checked
									id='NewLead'
									name='New Lead'
									type='switch'

									//   onChange={}
								/>
							</FormGroup>
							<FormGroup
								id='Lead to Deal Conversion '
								label='Lead to Deal Conversion '
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
								id='New Project'
								label='New Project'
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
								id='Task Stage Updated '
								label='Task Stage Updated '
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
								id='New Deal'
								label='New Deal'
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
							<FormGroup
								id='New Task'
								label='New Task'
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
								id='New Task Comment'
								label='New Task Comment'
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
								id='New Monthly Payslip'
								label='New Monthly Payslip'
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
								id='New Announcement'
								label='New Announcement'
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
								id='New Meeting'
								label='New Meeting'
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
								id='New Holiday'
								label='New Holiday'
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
								id='New Event'
								label='New Event'
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
								id='New Company Policy'
								label='New Company Policy'
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
								id='New Budget'
								label='New Budget'
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
						</div>
						<div className='row my-3'>
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

export default SlackSetting;
