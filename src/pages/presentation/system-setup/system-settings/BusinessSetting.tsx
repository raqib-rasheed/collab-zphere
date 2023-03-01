import React from 'react';
import useDarkMode from '../../../../hooks/useDarkMode';
import Card, {
	CardBody,
	CardFooter,
	CardFooterRight,
	CardHeader,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import Icon from '../../../../components/icon/Icon';
import Input from '../../../../components/bootstrap/forms/Input';
import Checks, { ChecksGroup } from '../../../../components/bootstrap/forms/Checks';

const BusinessSetting = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { themeStatus } = useDarkMode();

	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Business Setting</div>
				<div className='fs-6'>Edit details about your Company</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='d-flex justify-content-around'>
					<Card className='w-25'>
						<CardHeader size={'sm'} borderSize={1} className='d-block'>
							<div className='fw-bold fs-6'>Logo Dark</div>
						</CardHeader>
						<CardBody className='d-flex flex-column ' style={{ alignItems: 'center' }}>
							<img
								src=''
								alt=''
								style={{
									height: '60px',
									width: '120px',
									margin: '0 0 10px 0',
									backgroundColor: '#FEFEFE',
								}}
							/>

							<Button color='info'>
								<label htmlFor='file-upload' className='custom-file-upload'>
									<Icon icon='Upload' /> Choose file here
								</label>
								<input id='file-upload' type='file' />
							</Button>
						</CardBody>
					</Card>
					<Card className='w-25'>
						<CardHeader size={'sm'} borderSize={1} className='d-block'>
							<div className='fw-bold fs-6'>Logo light</div>
						</CardHeader>
						<CardBody className='d-flex flex-column ' style={{ alignItems: 'center' }}>
							<img
								src=''
								alt=''
								style={{
									height: '60px',
									width: '120px',
									margin: '0 0 10px 0',
									backgroundColor: '#FEFEFE',
								}}
							/>

							<Button color='info'>
								<label htmlFor='file-upload' className='custom-file-upload'>
									<Icon icon='Upload' /> Choose file here
								</label>
								<input id='file-upload' type='file' />
							</Button>
						</CardBody>
					</Card>
					<Card className='w-25'>
						<CardHeader size={'sm'} borderSize={1} className='d-block'>
							<div className='fw-bold fs-6'>Favicon</div>
						</CardHeader>
						<CardBody className='d-flex flex-column ' style={{ alignItems: 'center' }}>
							<img
								src=''
								alt=''
								style={{
									height: '60px',
									width: '120px',
									margin: '0 0 10px 0',
									backgroundColor: '#FEFEFE',
								}}
							/>

							<Button color='info'>
								<label htmlFor='file-upload' className='custom-file-upload'>
									<Icon icon='Upload' /> Choose file here
								</label>
								<input id='file-upload' type='file' />
							</Button>
						</CardBody>
					</Card>
				</div>
				<div className='d-flex'>
					<div className='w-50'>
						<label htmlFor='titletext' className='b'>
							<b>Title Text</b>
						</label>
						<Input
							name='titletext'
							placeholder='Title text'
							defaultValue={'ERPGo SaaS'}
							className='mt-1'
						/>
					</div>
					<div className='d-flex flex-column ms-5'>
						<b className='ms-1'>RTL</b>

						<Checks
							id='rtl'
							name='rtll'
							type='switch'
							className='mt-2'
							style={{ height: '25px', width: '50px' }}
						/>
					</div>
				</div>
				<div className='mt-4'>
					<p className='h5'>Theme Customizer</p>
					<div className='d-flex mt-3'>
						<div style={{ width: '30%' }}>
							<div
								style={{ borderBottom: '2px solid #E9E9E9', paddingBottom: '6px' }}>
								<Icon icon='LayoutSidebar' style={{ fontSize: '20px' }} />
								<b className='ms-2'>Primary color settings</b>
							</div>
							<div className='mt-3'>
								<ChecksGroup id={'ttt'} isInline>
									<Checks
										type='radio'
										style={{
											borderRadius: '10%',
											backgroundColor: '#784392',
											height: '25px',
											width: '32px',
										}}
									/>
									<Checks
										type='radio'
										style={{
											borderRadius: '10%',
											backgroundColor: '#3676B3',
											height: '25px',
											width: '32px',
										}}
									/>
									<Checks
										type='radio'
										style={{
											borderRadius: '10%',
											backgroundColor: '#6FD943',
											height: '25px',
											width: '32px',
										}}
									/>
									<Checks
										type='radio'
										style={{
											borderRadius: '10%',
											backgroundColor: '#6056DC',
											height: '25px',
											width: '32px',
										}}
									/>
								</ChecksGroup>
							</div>
						</div>
						<div className='ms-5 w-25'>
							<div
								style={{ borderBottom: '2px solid #E9E9E9', paddingBottom: '6px' }}>
								<Icon icon='LayoutTextWindowReverse' style={{ fontSize: '20px' }} />
								<b className='ms-2'>Sidebar settings</b>
							</div>
							<div className='d-flex mt-3'>
								<Checks
									id='rtl'
									name='rtll'
									type='switch'
									style={{ height: '18px', width: '35px' }}
								/>
								<div className='ms-2 mt-1'>Transparent layout</div>
							</div>
						</div>
						<div className='ms-5 w-25'>
							<div
								style={{ borderBottom: '2px solid #E9E9E9', paddingBottom: '6px' }}>
								<Icon icon='Sun' style={{ fontSize: '20px' }} />
								<b className='ms-2'>Layout settings</b>
							</div>
							<div className='d-flex mt-3'>
								<Checks
									id='rtl'
									name='rtll'
									type='switch'
									style={{ height: '18px', width: '35px' }}
								/>
								<div className='ms-2 mt-1'>Dark Layout</div>
							</div>
						</div>
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

export default BusinessSetting;
