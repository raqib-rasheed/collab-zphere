import React from 'react';
import {
	CardBody,
	CardFooter,
	CardFooterRight,
	CardHeader,
} from '../../../../components/bootstrap/Card';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Button from '../../../../components/bootstrap/Button';
import Input from '../../../../components/bootstrap/forms/Input';
import Checks from '../../../../components/bootstrap/forms/Checks';

const CompanySetting = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Company Setting</div>
				<div className='fs-6'> Edit your company details</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'>
					<form>
						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								id='Company Name'
								label='Company Name'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup id='Address' label='Address' style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup id='City' label='City' style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup id='State' label='State' style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								id='Zip/Post Code'
								label='Zip/Post Code'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup id='Country' label='Country' style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup id='Telephone' label='Telephone' style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='System Email'
								label='System Email'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								id='Email (From Name)'
								label='Email (From Name)'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Company Registration Number'
								label='Company Registration Number'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								id='Company Start Time'
								label='Company Start Time'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
							<FormGroup
								id='Company End Time'
								label='Company End Time'
								style={{ width: '48%' }}>
								<Input placeholder='' />
							</FormGroup>
						</div>

						<FormGroup id='Timezone' label='Timezone'>
							<Input placeholder='' />
						</FormGroup>

						<div className='d-flex justify-content-between my-3'>
							<FormGroup
								id='Tax Number'
								label='Tax Number'
								className='d-flex'
								style={{ width: '48%' }}>
								<Checks
									checked
									id='TaxNumber'
									label='Switch'
									name='TaxNumber'
									//   onChange={}
									type='switch'
									className='mx-4'
								/>
							</FormGroup>
							<div style={{ width: '48%' }}>
								<div className='d-flex justify-content-between'>
									<FormGroup
										id='VAT Number'
										label='VAT Number'
										className='d-flex mx-1'>
										<Checks
											checked
											id='VATNumber'
											name='VAT Number'
											type='radio'
											className='mx-2'
											//   onChange={}
										/>
									</FormGroup>
									<FormGroup
										id='GST Number'
										label='GST Number'
										className='d-flex'
										style={{ marginRight: '12rem' }}>
										<Checks
											checked
											id='GSTNumber'
											name='GST Number'
											type='radio'
											className='mx-2'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div>
									<FormGroup id='taxNumber'>
										<Input placeholder='' />
									</FormGroup>
								</div>
							</div>
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

export default CompanySetting;
