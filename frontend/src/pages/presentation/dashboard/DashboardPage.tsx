import React, { useEffect, useState } from 'react';
import { useTour } from '@reactour/tour';
import useDarkMode from '../../../hooks/useDarkMode';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { TABS, TTabs } from './common/helper';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';

import CommonAvatarTeam from '../../../common/other/CommonAvatarTeam';

import CommonDashboardAlert from './common/CommonDashboardAlert';
import Card, { CardBody, CardFooter, CardHeader } from '../../../components/bootstrap/Card';
import Badge from '../../../components/bootstrap/Badge';
import Icon from '../../../components/icon/Icon';
import Progress from '../../../components/bootstrap/Progress';
import TasksOverview from '../../../widgets/TasksOverview';
import TimesheetLoggedHours from './TimesheetLoggedHours';
import ListGroup, { ListGroupItem } from '../../../components/bootstrap/ListGroup';
import TableWidget from '../../../widgets/Table';

const DashboardPage = () => {
	/**
	 * Tour Start
	 */
	const { setIsOpen } = useTour();
	useEffect(() => {
		if (localStorage.getItem('tourModalStarted') !== 'shown') {
			setTimeout(() => {
				setIsOpen(true);
				localStorage.setItem('tourModalStarted', 'shown');
			}, 3000);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { themeStatus } = useDarkMode();

	const [activeTab, setActiveTab] = useState<TTabs>(TABS.YEARLY);

	return (
		<PageWrapper title={''}>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Dashboard</span>
					<SubheaderSeparator />
					<ButtonGroup>
						{Object.keys(TABS).map((key) => (
							<Button
								key={key}
								color={activeTab === TABS[key] ? 'success' : themeStatus}
								onClick={() => setActiveTab(TABS[key])}>
								{TABS[key]}
							</Button>
						))}
					</ButtonGroup>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonAvatarTeam>
						<strong>Marketing</strong> Team
					</CommonAvatarTeam>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-12'>
						<CommonDashboardAlert />
					</div>

					<div className='col-xl-4'>
						<Card className='p-3' stretch>
							<div className='d-flex align-items-center justify-content-between'>
								<div className='d-flex'>
									<Badge className='p-3 mx-2' color='success'>
										<Icon size='lg' icon='Cast' />
									</Badge>
									<div>
										<span className='text-muted'>Total</span>
										<h5>Tickets</h5>
									</div>
								</div>
								<h4 className='mx-3'>5</h4>
							</div>
							<div></div>
							<CardFooter className='my-0 py-0'>
								<span>
									<b className='text-success'>13%</b> completed
								</span>
							</CardFooter>
						</Card>
					</div>
					<div className='col-xl-4'>
						<Card className='p-3' stretch>
							<div className='d-flex align-items-center justify-content-between'>
								<div className='d-flex'>
									<Badge className='p-3 mx-2' color='info'>
										<Icon size='lg' icon='Activity' />
									</Badge>
									<div>
										<span className='text-muted'>Total</span>
										<h5>Tickets</h5>
									</div>
								</div>
								<h4 className='mx-3'>5</h4>
							</div>
							<div></div>
							<CardFooter className='my-0 py-0'>
								<span>
									<b className='text-success'>20%</b> completed
								</span>
							</CardFooter>
						</Card>
					</div>
					<div className='col-xl-4'>
						<Card className='p-3' stretch>
							<div className='d-flex align-items-center justify-content-between'>
								<div className='d-flex'>
									<Badge className='p-3 mx-2' color='danger'>
										<Icon size='lg' icon='Cash' />
									</Badge>
									<div>
										<span className='text-muted'>Total</span>
										<h5>Tickets</h5>
									</div>
								</div>
								<h4 className='mx-3'>5</h4>
							</div>
							<div></div>
							<CardFooter className='my-0 py-0'>
								<span>
									<b className='text-success'>21%</b> expense
								</span>
							</CardFooter>
						</Card>
					</div>

					<div className='col-xxl-4'>
						<Card className='p-3' stretch>
							<CardHeader>
								<h4>Project Status</h4>
							</CardHeader>
							<CardBody>
								<div className='d-flex'>
									<div className='w-50 p-4'>
										<div>
											<span className='text-muted'>On Hold</span>
											<h4 className='text-success'>75%</h4>
											<Progress
												className=' my-2'
												isAutoColor
												value={75}
												style={{
													height: 5,
												}}
											/>
										</div>
										<div>
											<span className='text-muted'>Complete</span>
											<h4 className='text-danger'>13%</h4>
											<Progress
												className='my-2'
												isAutoColor
												value={13}
												style={{
													height: 5,
												}}
											/>
										</div>
									</div>
									<div className='w-50 p-4'>
										<div>
											<span className='text-muted'>In Progress</span>
											<h4 className='text-warning'>25%</h4>
											<Progress
												className=' my-2'
												isAutoColor
												value={25}
												style={{
													height: 5,
												}}
											/>
										</div>
										<div>
											<span className='text-muted'>Cancelled</span>
											<h4 className='text-warning'>41%</h4>
											<Progress
												className=' my-2'
												isAutoColor
												value={41}
												style={{
													height: 5,
												}}
											/>
										</div>
									</div>
								</div>

								<div></div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xxl-8'>
						<TasksOverview />
					</div>
					<div className='col-xxl-6'>
						<TableWidget
							hideTableActions
							title='Top Due Projects'
							displayPagintaion={false}
							data={
								[
									{ id: '', asasi: '', ahsb: '' },
									{ id: '', asasi: '', ahsb: '' },
									{ id: '', asasi: '', ahsb: '' },
									{ id: '', asasi: '', ahsb: '' },
									{ id: '', asasi: '', ahsb: '' },
									{ id: '', asasi: '', ahsb: '' },
									{ id: '', asasi: '', ahsb: '' },
									{ id: '', asasi: '', ahsb: '' },
									{ id: '', asasi: '', ahsb: '' },
									{ id: '', asasi: '', ahsb: '' },
									{ id: '', asasi: '', ahsb: '' },
								] as any
							}
							displaySearch={false}
							displayLoadMore={false}
						/>
					</div>

					<div className='col-xxl-6'>
						<TimesheetLoggedHours />
					</div>
					<div className='col-xxl-12 col-xl-12'>
						<Card>
							<CardHeader>
								<h4>Top Due Tasks</h4>
							</CardHeader>
							<CardBody>
								<ListGroup isFlush>
									<ListGroupItem>
										<div className='d-flex justify-content-between'>
											<div>
												<span className='text-muted'>Task:</span>
												<h6>Create the app's wireframe</h6>
											</div>
											<div>
												<span className='text-muted'>Project:</span>
												<h6>Newsletter Templates</h6>
											</div>
											<div>
												<span className='text-muted'>Stage:</span>
												<div className='d-flex'>
													<Icon icon='CircleFill' color='success' />
													<h6 className='mx-2'>Medium</h6>
												</div>
											</div>
											<div>
												<span className='text-muted'>Completion</span>
												<h6>80%</h6>
											</div>
										</div>
									</ListGroupItem>

									<ListGroupItem>
										<div className='d-flex justify-content-between'>
											<div>
												<span className='text-muted'>Task:</span>
												<h6>Create the app's wireframe</h6>
											</div>
											<div>
												<span className='text-muted'>Project:</span>
												<h6>Newsletter Templates</h6>
											</div>
											<div>
												<span className='text-muted'>Stage:</span>
												<div className='d-flex'>
													<Icon icon='CircleFill' color='warning' />
													<h6 className='mx-2'>Medium</h6>
												</div>
											</div>
											<div>
												<span className='text-muted'>Completion</span>
												<h6>50%</h6>
											</div>
										</div>
									</ListGroupItem>
									<ListGroupItem>
										<div className='d-flex justify-content-between'>
											<div>
												<span className='text-muted'>Task:</span>
												<h6>Create the app's wireframe</h6>
											</div>
											<div>
												<span className='text-muted'>Project:</span>
												<h6>Newsletter Templates</h6>
											</div>
											<div>
												<span className='text-muted'>Stage:</span>
												<div className='d-flex'>
													<Icon icon='CircleFill' color='info' />
													<h6 className='mx-2'>Medium</h6>
												</div>
											</div>
											<div>
												<span className='text-muted'>Completion</span>
												<h6>40%</h6>
											</div>
										</div>
									</ListGroupItem>
									<ListGroupItem>
										<div className='d-flex justify-content-between'>
											<div>
												<span className='text-muted'>Task:</span>
												<h6>Create the app's wireframe</h6>
											</div>
											<div>
												<span className='text-muted'>Project:</span>
												<h6>Newsletter Templates</h6>
											</div>
											<div>
												<span className='text-muted'>Stage:</span>
												<div className='d-flex'>
													<Icon icon='CircleFill' color='danger' />
													<h6 className='mx-2'>Medium</h6>
												</div>
											</div>
											<div>
												<span className='text-muted'>Completion</span>
												<h6>0%</h6>
											</div>
										</div>
									</ListGroupItem>
								</ListGroup>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
