import React from 'react';
import { Link } from 'react-router-dom';
import USERS from '../../../../common/data/userDummyData';
import Avatar from '../../../../components/Avatar';
import Button from '../../../../components/bootstrap/Button';
import Card from '../../../../components/bootstrap/Card';
import ListGroup, { ListGroupItem } from '../../../../components/bootstrap/ListGroup';
import Progress from '../../../../components/bootstrap/Progress';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';

const ProjectDetails = () => {
	const customSubHeaderRightActions = () => (
		<div>
			<Link to='/project-system/projects/id#1/gnatt-chart'>
				<Button color='dark' className='mx-1'>
					Gantt Chart
				</Button>
			</Link>
			<Link to='/project-system/projects/id#1/tracker'>
				<Button color='dark' className='mx-1'>
					Tracker
				</Button>
			</Link>
			<Link to='/project-system/projects/id#1/expense'>
				<Button color='dark' className='mx-1'>
					Expense
				</Button>
			</Link>
			<Link to='/project-system/projects/id#1/timesheet'>
				<Button color='dark' className='mx-1'>
					Timesheet
				</Button>
			</Link>
			<Link to='/project-system/projects/id#1/bug-report'>
				<Button color='dark' className='mx-1'>
					Bug Report
				</Button>
			</Link>
			<Link to='/project-system/tasks/id#1'>
				<Button color='dark' className='mx-1'>
					Task
				</Button>
			</Link>
			<Button color='dark' className='mx-1' icon='Edit' />
		</div>
	);
	return (
		<PageWrapper title='project-1'>
			<PresentaionPagesSubHeader
				customSubHeaderRightActions={customSubHeaderRightActions}
				showSubHeaderRight
				showAddNewButton={false}
				title='Find Employee Payslip'
			/>
			<Page container='fluid'>
				<div className='w-100 d-flex justify-content-between'>
					<Card className='p-4' style={{ width: '31%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='CardList' />
								</div>
								<div>
									<h6 className='text-muted'>Total Task</h6>
									<h6>8</h6>
								</div>
							</div>
							<div className=''>
								<h6>6</h6>
								<h6 className='text-muted'>Done Task</h6>
							</div>
						</div>
					</Card>
					<Card className='p-4' style={{ width: '31%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='CashCoin' />
								</div>
								<div>
									<h6 className='text-muted'>Total Task</h6>
									<h6>8</h6>
								</div>
							</div>
							<div className=''>
								<h6>6</h6>
								<h6 className='text-muted'>Done Task</h6>
							</div>
						</div>{' '}
					</Card>
					<Card className='p-4' style={{ width: '31%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='ClipboardX' />
								</div>
								<div>
									<h6 className='text-muted'>Total Task</h6>
									<h6>8</h6>
								</div>
							</div>
							<div className=''>
								<h6>6</h6>
								<h6 className='text-muted'>Done Task</h6>
							</div>
						</div>{' '}
					</Card>
				</div>
				<div className='w-100 d-flex justify-content-between'>
					<Card className='p-4' style={{ width: '31%' }}>
						<div className='justify-content-between'>
							<h5>Newsletter Templates</h5>
							<h6>Completed: : 75%</h6>
							<Progress
								className='flex-grow-1'
								isAutoColor
								value={75}
								style={{
									height: 5,
								}}
							/>
							<p className='my-4'>Test description</p>
						</div>
					</Card>
					<Card className='p-4' style={{ width: '31%' }}>
						<div className='d-flex'>
							<Icon className='mx-4' size='2x' icon='ClipboardData' />
							<div>
								<h6 className='text-muted'>Last 7 days task done</h6>
								<h4>0</h4>
							</div>
						</div>
						<Progress
							className='flex-grow-1 my-2'
							isAutoColor
							value={95}
							style={{
								height: 5,
							}}
						/>
						<Progress
							className='flex-grow-1 my-2'
							isAutoColor
							value={25}
							style={{
								height: 5,
							}}
						/>
						<Progress
							className='flex-grow-1 my-2'
							isAutoColor
							value={35}
							style={{
								height: 5,
							}}
						/>
					</Card>
					<Card className='p-4' style={{ width: '31%' }}>
						<div className='d-flex'>
							<Icon className='mx-4' size='2x' icon='ClipboardData' />
							<div>
								<h6 className='text-muted'>Last 7 days hours spent</h6>
								<h4>0</h4>
							</div>
						</div>
						<Progress
							className='flex-grow-1 my-2'
							isAutoColor
							value={95}
							style={{
								height: 5,
							}}
						/>
						<Progress
							className='flex-grow-1 my-2'
							isAutoColor
							value={85}
							style={{
								height: 5,
							}}
						/>
						<Progress
							className='flex-grow-1 my-2'
							isAutoColor
							value={75}
							style={{
								height: 5,
							}}
						/>
					</Card>
				</div>
				<div className='d-flex justify-content-between'>
					<Card className='p-4' style={{ width: '48%' }}>
						<h5>Members</h5>
						<ListGroup>
							<ListGroupItem className='py-4 d-flex justify-content-between'>
								<div className='d-flex'>
									<div className='mx-2'>
										<Avatar
											src={USERS.GRACE.src}
											srcSet={USERS.GRACE.srcSet}
											// @ts-ignore
											color={USERS.GRACE.color}
											size={40}
											userName={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
										/>
									</div>
									<div>
										<h6>Rajodiya Infotech</h6>
										<span className='text-muted'>company@example.com</span>
									</div>
								</div>
								<Button icon='trash' color='danger' />
							</ListGroupItem>
							<ListGroupItem className='py-4 d-flex justify-content-between'>
								<div className='d-flex'>
									<div className='mx-2'>
										<Avatar
											src={USERS.JANE.src}
											srcSet={USERS.JANE.srcSet}
											// @ts-ignore
											color={USERS.JANE.color}
											size={40}
											userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
										/>
									</div>
									<div>
										<h6>Richard Atkinson</h6>
										<span className='text-muted'>keanu2006@gmail.com</span>
									</div>
								</div>
								<Button icon='trash' color='danger' />
							</ListGroupItem>
						</ListGroup>
					</Card>
					<Card className='p-4' style={{ width: '48%' }}>
						<h5>Milestones (5)</h5>
						<ListGroup>
							<ListGroupItem>An item</ListGroupItem>
							<ListGroupItem>A second item</ListGroupItem>
							<ListGroupItem>A third item</ListGroupItem>
							<ListGroupItem>A fourth item</ListGroupItem>
							<ListGroupItem>A fifth item</ListGroupItem>
						</ListGroup>
					</Card>
				</div>
				<Card className='p-4'>
					<h5>Activity Log</h5>
					<ListGroup>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-2'>
									<Avatar
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										// @ts-ignore
										color={USERS.JANE.color}
										size={40}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									/>
								</div>
								<div>
									<h6>Move Task</h6>
									<p className='text-muted'>
										Rajodiya Infotech Moved the Task Lunch meeting from To Do to
										In Progress
									</p>
								</div>
							</div>
							<span className='text-muted'>2 months ago</span>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-2'>
									<Avatar
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										// @ts-ignore
										color={USERS.JANE.color}
										size={40}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									/>
								</div>
								<div>
									<h6>Move Task</h6>
									<p className='text-muted'>
										Rajodiya Infotech Moved the Task Lunch meeting from To Do to
										In Progress
									</p>
								</div>
							</div>
							<span className='text-muted'>2 months ago</span>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-2'>
									<Avatar
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										// @ts-ignore
										color={USERS.JANE.color}
										size={40}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									/>
								</div>
								<div>
									<h6>Move Task</h6>
									<p className='text-muted'>
										Rajodiya Infotech Moved the Task Lunch meeting from To Do to
										In Progress
									</p>
								</div>
							</div>
							<span className='text-muted'>2 months ago</span>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-2'>
									<Avatar
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										// @ts-ignore
										color={USERS.JANE.color}
										size={40}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									/>
								</div>
								<div>
									<h6>Move Task</h6>
									<p className='text-muted'>
										Rajodiya Infotech Moved the Task Lunch meeting from To Do to
										In Progress
									</p>
								</div>
							</div>
							<span className='text-muted'>2 months ago</span>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-2'>
									<Avatar
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										// @ts-ignore
										color={USERS.JANE.color}
										size={40}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									/>
								</div>
								<div>
									<h6>Move Task</h6>
									<p className='text-muted'>
										Rajodiya Infotech Moved the Task Lunch meeting from To Do to
										In Progress
									</p>
								</div>
							</div>
							<span className='text-muted'>2 months ago</span>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-2'>
									<Avatar
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										// @ts-ignore
										color={USERS.JANE.color}
										size={40}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									/>
								</div>
								<div>
									<h6>Move Task</h6>
									<p className='text-muted'>
										Rajodiya Infotech Moved the Task Lunch meeting from To Do to
										In Progress
									</p>
								</div>
							</div>
							<span className='text-muted'>2 months ago</span>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-2'>
									<Avatar
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										// @ts-ignore
										color={USERS.JANE.color}
										size={40}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									/>
								</div>
								<div>
									<h6>Move Task</h6>
									<p className='text-muted'>
										Rajodiya Infotech Moved the Task Lunch meeting from To Do to
										In Progress
									</p>
								</div>
							</div>
							<span className='text-muted'>2 months ago</span>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-2'>
									<Avatar
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										// @ts-ignore
										color={USERS.JANE.color}
										size={40}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									/>
								</div>
								<div>
									<h6>Move Task</h6>
									<p className='text-muted'>
										Rajodiya Infotech Moved the Task Lunch meeting from To Do to
										In Progress
									</p>
								</div>
							</div>
							<span className='text-muted'>2 months ago</span>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-2'>
									<Avatar
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										// @ts-ignore
										color={USERS.JANE.color}
										size={40}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									/>
								</div>
								<div>
									<h6>Move Task</h6>
									<p className='text-muted'>
										Rajodiya Infotech Moved the Task Lunch meeting from To Do to
										In Progress
									</p>
								</div>
							</div>
							<span className='text-muted'>2 months ago</span>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-2'>
									<Avatar
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										// @ts-ignore
										color={USERS.JANE.color}
										size={40}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									/>
								</div>
								<div>
									<h6>Move Task</h6>
									<p className='text-muted'>
										Rajodiya Infotech Moved the Task Lunch meeting from To Do to
										In Progress
									</p>
								</div>
							</div>
							<span className='text-muted'>2 months ago</span>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-2'>
									<Avatar
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										// @ts-ignore
										color={USERS.JANE.color}
										size={40}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									/>
								</div>
								<div>
									<h6>Move Task</h6>
									<p className='text-muted'>
										Rajodiya Infotech Moved the Task Lunch meeting from To Do to
										In Progress
									</p>
								</div>
							</div>
							<span className='text-muted'>2 months ago</span>
						</ListGroupItem>
					</ListGroup>
				</Card>
				<Card className='p-4'>
					<h5>Attachments</h5>
					<span className='text-muted'>Activity Log of this project</span>
					<ListGroup>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div>
									<h6>41594448981_large.jpg</h6>
									<p className='text-muted'>0.39 MB</p>
								</div>
							</div>
							<Button color='info' icon='Download'></Button>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div>
									<h6>41594448981_large.jpg</h6>
									<p className='text-muted'>0.39 MB</p>
								</div>
							</div>
							<Button color='info' icon='Download'></Button>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div>
									<h6>41594448981_large.jpg</h6>
									<p className='text-muted'>0.39 MB</p>
								</div>
							</div>
							<Button color='info' icon='Download'></Button>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div>
									<h6>41594448981_large.jpg</h6>
									<p className='text-muted'>0.39 MB</p>
								</div>
							</div>
							<Button color='info' icon='Download'></Button>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div>
									<h6>41594448981_large.jpg</h6>
									<p className='text-muted'>0.39 MB</p>
								</div>
							</div>
							<Button color='info' icon='Download'></Button>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div>
									<h6>41594448981_large.jpg</h6>
									<p className='text-muted'>0.39 MB</p>
								</div>
							</div>
							<Button color='info' icon='Download'></Button>
						</ListGroupItem>
						<ListGroupItem className='py-4 d-flex justify-content-between'>
							<div className='d-flex'>
								<div>
									<h6>41594448981_large.jpg</h6>
									<p className='text-muted'>0.39 MB</p>
								</div>
							</div>
							<Button color='info' icon='Download'></Button>
						</ListGroupItem>
					</ListGroup>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default ProjectDetails;
