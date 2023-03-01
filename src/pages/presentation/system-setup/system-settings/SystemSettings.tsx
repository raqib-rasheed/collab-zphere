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
import Select from '../../../../components/bootstrap/forms/Select';
import Textarea from '../../../../components/bootstrap/forms/Textarea';
import Button from '../../../../components/bootstrap/Button';

const SystemSetting = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>System Settings</div>
				<div className='fs-6'>Edit your system details</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'>
					<form>
						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								formText='Note: Add currency code as per three-letter ISO code.'
								id='Currency'
								label='Currency'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Currency Symbol'
								label='Currency Symbol'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<FormGroup
							id='Currency Symbol Position'
							label='Currency Symbol Position'
							className=' my-4'
							style={{ width: '25%' }}>
							<div className='d-flex justify-content-between my-3'>
								<Checks
									checked={true}
									id='CurrencySymbolPositionPre'
									name='CurrencySymbolPositionPre'
									label='Pre'
									type='radio'
									value='pre'
									onChange={() => ''}
								/>
								<Checks
									checked={false}
									id='CurrencySymbolPositionPost'
									name='CurrencySymbolPositionPost'
									label='Post'
									type='radio'
									value='post'
									onChange={() => ''}
								/>
							</div>
						</FormGroup>

						<div className='d-flex justify-content-between my-4'>
							<FormGroup
								id='Date Format'
								label='Date Format'
								style={{ width: '48%' }}>
								<Select
									id='DateFormatSelect'
									ariaLabel='DateFormatSelect'
									placeholder='--'
									// onChange={formik.handleChange}
									// value={formik.values.groupId}
								>
									{/* {data.map((group) => (
										<Option key={group.id} value={group.id}>
										{group.title}
										</Option>
									))} */}
								</Select>
							</FormGroup>
							<FormGroup
								id='Time Format'
								label='Time Format'
								style={{ width: '48%' }}>
								<Select
									id='TimeFormatSelect'
									ariaLabel='TimeFormatSelect'
									placeholder='--'
									// onChange={formik.handleChange}
									// value={formik.values.groupId}
								>
									{/* {data.map((group) => (
										<Option key={group.id} value={group.id}>
										{group.title}
										</Option>
									))} */}
								</Select>
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								id='Invoice Prefix'
								label='Invoice Prefix'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Proposal Prefix'
								label='Proposal Prefix'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								id='Bill Prefix'
								label='Bill Prefix'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Customer Prefix'
								label='Customer Prefix'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								id='Vendor Prefix'
								label='Vendor Prefix'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Purchase Prefix'
								label='Purchase Prefix'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup id='Pos Prefix' label='Pos Prefix' style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Invoice/Bill Footer Title'
								label='Invoice/Bill Footer Title'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								id='Decimal Number Format'
								label='Decimal Number Format'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Journal Prefix'
								label='Journal Prefix'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								formText='Application URL to log into the app.'
								id='Application URL'
								label='Application URL'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								formText='Image Screenshot Take Interval time ( 1 = 1 min)'
								id='Tracking Interval'
								label='Tracking Interval'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-4'>
							<FormGroup
								id='Display Shipping in Proposal / Invoice / Bill'
								label='Display Shipping in Proposal / Invoice / Bill'
								className=' my-4'
								style={{ width: '48%' }}>
								<Checks
									checked
									id='example'
									label='Switch'
									name='example'
									//   onChange={}
									type='switch'
									className='my1'
								/>
							</FormGroup>
							<FormGroup
								id='Invoice/Bill Footer Notes'
								label='Invoice/Bill Footer Notes'
								style={{ width: '48%' }}>
								<Textarea />
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

export default SystemSetting;
