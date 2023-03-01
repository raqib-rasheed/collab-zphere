import React from 'react';
import {
	CardBody,
	CardFooter,
	CardFooterRight,
	CardHeader,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import Accordion, { AccordionItem } from '../../../../components/bootstrap/Accordion';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import Checks from '../../../../components/bootstrap/forms/Checks';

const PaymentSetting = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Payment Setting</div>
				<div className='fs-6'>
					These details will be used to collect invoice payments. Each invoice will have a
					payment button based on the below configuration.
				</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'>
					<form>
						<Accordion id='payment-setting'>
							<AccordionItem id='stripe' title='Stripe'>
								<div className='d-flex justify-content-end'>
									<FormGroup id='stripeEnable'>
										<Checks
											checked
											id=''
											name=''
											label='enable'
											type='switch'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div className='d-flex justify-content-between my-3'>
									<FormGroup
										id='Public Key'
										label='Public Key'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
									<FormGroup
										id='Secret Key'
										label='Secret Key'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
								</div>
							</AccordionItem>
							<AccordionItem id='Paypal' title='Paypal'>
								<div className='d-flex justify-content-end'>
									<FormGroup id='paypalEnable'>
										<Checks
											checked
											id=''
											name=''
											label='enable'
											type='switch'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div className='my-3'>
									<h6>Paypal Mode</h6>
									<div className='d-flex'>
										<Checks
											checked
											id=''
											name=''
											label='Sandbox'
											type='radio'

											//   onChange={}
										/>
										<Checks
											checked
											id=''
											name=''
											label='Live'
											type='radio'
											className='mx-2'
											//   onChange={}
										/>
									</div>
								</div>
								<div className='d-flex justify-content-between my-3'>
									<FormGroup
										id='Client ID'
										label='Client ID'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
									<FormGroup
										id='Secret Key'
										label='Secret Key'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
								</div>
							</AccordionItem>
							<AccordionItem id='Paystack' title='Paystack'>
								<div className='d-flex justify-content-end'>
									<FormGroup id='paystackEnable'>
										<Checks
											checked
											id=''
											name=''
											label='enable'
											type='switch'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div className='d-flex justify-content-between my-3'>
									<FormGroup
										id='Public Key'
										label='Public Key'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
									<FormGroup
										id='Secret Key'
										label='Secret Key'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
								</div>
							</AccordionItem>
							<AccordionItem id='Flutterwave' title='Flutterwave'>
								<div className='d-flex justify-content-end'>
									<FormGroup id='fulutterWaveEnable'>
										<Checks
											checked
											id=''
											name=''
											label='enable'
											type='switch'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div className='d-flex justify-content-between my-3'>
									<FormGroup
										id='Public Key'
										label='Public Key'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
									<FormGroup
										id='Secret Key'
										label='Secret Key'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
								</div>
							</AccordionItem>
							<AccordionItem id='Razorpay' title='Razorpay'>
								<div className='d-flex justify-content-end'>
									<FormGroup id='razorpayEnable'>
										<Checks
											checked
											id=''
											name=''
											label='enable'
											type='switch'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div className='d-flex justify-content-between my-3'>
									<FormGroup
										id='Public Key'
										label='Public Key'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
									<FormGroup
										id='Secret Key'
										label='Secret Key'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
								</div>
							</AccordionItem>
							<AccordionItem id='MercadoPago' title='Mercado Pago'>
								<div className='d-flex justify-content-end'>
									<FormGroup id='marcadopagoEnable'>
										<Checks
											checked
											id=''
											name=''
											label='enable'
											type='switch'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div className='my-3'>
									<h6>Mercado Mode</h6>
									<div className='d-flex'>
										<Checks
											checked
											id=''
											name=''
											label='Sandbox'
											type='radio'

											//   onChange={}
										/>
										<Checks
											checked
											id=''
											name=''
											label='Live'
											type='radio'
											className='mx-2'
											//   onChange={}
										/>
									</div>
								</div>

								<FormGroup
									id='Access Token'
									label='Access Token'
									style={{ width: '48%' }}>
									<Input placeholder='' />
								</FormGroup>
							</AccordionItem>

							<AccordionItem id='paytm' title='Paytm'>
								<div className='d-flex justify-content-end'>
									<FormGroup id='paytmEnable'>
										<Checks
											checked
											id=''
											name=''
											label='enable'
											type='switch'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div className='my-3'>
									<h6>Paytm Environment</h6>
									<div className='d-flex'>
										<Checks
											checked
											id=''
											name=''
											label='Local'
											type='radio'

											//   onChange={}
										/>
										<Checks
											checked
											id=''
											name=''
											label='Production'
											type='radio'
											className='mx-2'
											//   onChange={}
										/>
									</div>
								</div>
								<FormGroup
									id='Access Token'
									label='Access Token'
									style={{ width: '48%' }}>
									<Input placeholder='' />
								</FormGroup>
							</AccordionItem>
							<AccordionItem id='Mollie' title='Mollie'>
								<div className='d-flex justify-content-end'>
									<FormGroup id='mollieWaveEnable'>
										<Checks
											checked
											id=''
											name=''
											label='enable'
											type='switch'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div className='d-flex justify-content-between my-3'>
									<FormGroup
										id='Mollie Api Key'
										label='Mollie Api Key'
										style={{ width: '32%' }}>
										<Input placeholder='' />
									</FormGroup>
									<FormGroup
										id='Mollie Profile ID'
										label='Mollie Profile ID'
										style={{ width: '32%' }}>
										<Input placeholder='' />
									</FormGroup>
									<FormGroup
										id='Mollie Partner ID'
										label='Mollie Partner ID'
										style={{ width: '32%' }}>
										<Input placeholder='' />
									</FormGroup>
								</div>
							</AccordionItem>

							<AccordionItem id='Skrill' title='Skrill'>
								<div className='d-flex justify-content-end'>
									<FormGroup id='skrillEnable'>
										<Checks
											checked
											id=''
											name=''
											label='enable'
											type='switch'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div className='d-flex justify-content-between my-3'>
									<FormGroup
										id='Skrill Email'
										label='Skrill Email'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
								</div>
							</AccordionItem>

							<AccordionItem id='CoinGate' title='CoinGate'>
								<div className='d-flex justify-content-end'>
									<FormGroup id='coinGateEnable'>
										<Checks
											checked
											id=''
											name=''
											label='enable'
											type='switch'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div className='my-3'>
									<h6>CoinGate Mode</h6>
									<div className='d-flex'>
										<Checks
											checked
											id=''
											name=''
											label='Sandbox'
											type='radio'

											//   onChange={}
										/>
										<Checks
											checked
											id=''
											name=''
											label='Live'
											type='radio'
											className='mx-2'
											//   onChange={}
										/>
									</div>
								</div>
								<div className='d-flex justify-content-between my-3'>
									<FormGroup
										id='CoinGate Auth Token'
										label='CoinGate Auth Token'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
								</div>
							</AccordionItem>

							<AccordionItem id='PaymentWall' title='PaymentWall'>
								<div className='d-flex justify-content-end'>
									<FormGroup id='skrillEnable'>
										<Checks
											checked
											id=''
											name=''
											label='enable'
											type='switch'
											//   onChange={}
										/>
									</FormGroup>
								</div>
								<div className='d-flex justify-content-between my-3'>
									<FormGroup
										id='Public Key'
										label='Public Key'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
									<FormGroup
										id='Private Key'
										label='Private Key'
										style={{ width: '48%' }}>
										<Input placeholder='' />
									</FormGroup>
								</div>
							</AccordionItem>
						</Accordion>
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

export default PaymentSetting;
