import React, { useState } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubheaderSeparator } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import ScrollspyNav from '../../../components/bootstrap/ScrollspyNav';

const PricingTablePage = () => {
	const [activeElementId, setActiveElementId] = useState(null);
	return (
		<PageWrapper title='Setup Subscription Plan'>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: 'Setup Subscription Plan',
								to: `/`,
							},
						]}
					/>
					<SubheaderSeparator />
					<ScrollspyNav
						items={['first', 'second', 'third']}
						setActiveId={setActiveElementId}
						offset={-500}
					/>
					<Button
						tag='a'
						to='#first'
						color='primary'
						isLight
						isActive={activeElementId === 'first'}>
						Design 1
					</Button>
					<Button
						tag='a'
						to='#second'
						color='primary'
						isLight
						isActive={activeElementId === 'second'}>
						Design 2
					</Button>
					<Button
						tag='a'
						to='#third'
						color='primary'
						isLight
						isActive={activeElementId === 'third'}>
						Design 3
					</Button>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div id='first' className='row scroll-margin'>
					<div className='col-12 mb-3'>
						<div className='display-4 fw-bold py-3'>
							{' '}
							<br />
						</div>
					</div>
					<div className='col-md-3'>
						<Card stretch className='bg-transparent' shadow='none'>
							<CardBody>
								<div className='h-100 d-flex align-items-center justify-content-center'>
									<div className='row text-center'>
										<div className='col-12 text-uppercase fw-light'>
											Per Month
										</div>
										<div className='col-12 text-uppercase h2 fw-bold mb-2'>
											Select Your Perfect Plan
										</div>
										<div className='col-12 mb-2'>
											Vivamus ut magna pharetra, ultricies nunc eu, dignissim
											lorem. Proin et est nec ante ultricies dignissim sit
											amet eget libero.
										</div>
										<Icon icon='Verified' size='5x' color='info' />
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-md-3'>
						<Card>
							<CardBody>
								<div className='row pt-5 g-4 text-center'>
									<div className='col-12'>
										<Icon icon='CustomRocketLaunch' size='7x' color='info' />
									</div>
									<div className='col-12'>
										<h2>Startup Company</h2>
									</div>
									<div className='col-12'>
										<h3 className='display-1 fw-bold'>
											<span className='display-4 fw-bold'>$</span>219
											<span className='display-6'>/mo</span>
										</h3>
									</div>
									<div className='col-12'>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Exclusive
											Workspace
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Internet
											Connection
										</div>
										<div className='lead text-muted'>
											<Icon icon='Close' color='danger' /> Meeting Room
										</div>
										<div className='lead text-muted'>
											<Icon icon='Close' color='danger' /> Small Rest Room
										</div>
									</div>
									<div className='col-12'>
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
									<div className='col-12'>
										<Button
											color='info'
											isLight
											className='w-100 py-3 text-uppercase'
											size='lg'>
											Select Plan
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-md-3'>
						<Card>
							<CardBody>
								<div className='row pt-5 g-4 text-center'>
									<div className='col-12'>
										<Icon icon='Maps Home Work' size='7x' color='success' />
									</div>
									<div className='col-12'>
										<h2>Mid-Size Company</h2>
									</div>
									<div className='col-12'>
										<h3 className='display-1 fw-bold'>
											<span className='display-4 fw-bold'>$</span>339
											<span className='display-6'>/mo</span>
										</h3>
									</div>
									<div className='col-12'>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Exclusive
											Workspace
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Internet
											Connection
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Five
											Meeting Room
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Small Rest
											Room
										</div>
									</div>
									<div className='col-12'>
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
									<div className='col-12'>
										<Button
											color='success'
											className='w-100 py-3 text-uppercase'
											size='lg'>
											Select Plan
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-md-3'>
						<Card>
							<CardBody>
								<div className='row pt-5 g-4 text-center'>
									<div className='col-12'>
										<Icon icon='CustomFactory' size='7x' color='info' />
									</div>
									<div className='col-12'>
										<h2>Large Company</h2>
									</div>
									<div className='col-12'>
										<h3 className='display-1 fw-bold'>
											<span className='display-4 fw-bold'>$</span>339
											<span className='display-6'>/mo</span>
										</h3>
									</div>
									<div className='col-12'>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Exclusive
											Workspace
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Internet
											Connection
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Five
											Meeting Room
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Large Rest
											Room
										</div>
									</div>
									<div className='col-12'>
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
									<div className='col-12'>
										<Button
											color='info'
											isLight
											className='w-100 py-3 text-uppercase'
											size='lg'>
											Select Plan
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default PricingTablePage;
