import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-modern-calendar-datepicker';
// import { Dropdown } from 'bootstrap';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Badge from '../../../components/bootstrap/Badge';
import COLORS from '../../../common/data/enumColors';
import Board from '../../../components/Board/Board';
import USERS from '../../../common/data/userDummyData';

import Slide2 from '../../../assets/img/wanna/slide/scene-2.png';
import Slide4 from '../../../assets/img/wanna/slide/scene-4.png';
import Slide6 from '../../../assets/img/wanna/slide/scene-6.png';
import TAGS from '../../../common/data/boardTagsData';
import CommonAvatarTeam from '../../../common/other/CommonAvatarTeam';
import Button from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
// import Popovers from '../../../components/bootstrap/Popovers';
// import { DropdownItem, DropdownMenu, DropdownToggle } from '../../../components/bootstrap/Dropdown';

const ProjectManagementsProject = () => {
	const [isListView, setIsListView] = useState(false);
	const { darkModeStatus } = useDarkMode();
	// const navigate = useNavigate();

	const data = [
		{
			id: 'lane1',
			title: 'Backlog',
			color: darkModeStatus ? COLORS.LIGHT.name : COLORS.DARK.name,
			icon: 'RateReview',
			cards: [
				{
					id: 'Card1',
					title: 'Mail App',
					subtitle: 'Facit Themes',
					description: 'Mail application and screens will be added',
					label: '7 day left',
					user: USERS.JOHN,
					img: Slide2,
					tags: [TAGS.critical, TAGS.design, TAGS.code],
					tasks: [
						{ id: 1, text: 'Page UI & UX design', status: true },
						{ id: 2, text: 'HTML & SCSS coding', status: true },
						{ id: 3, text: 'React Components to do', status: false },
					],
					attachments: [
						{ id: 1, path: 'somefile.txt', file: 'TXT' },
						{ id: 2, path: 'somefile.txt', file: 'WORD' },
						{ id: 3, path: 'somefile.txt', file: 'PSD' },
					],
				},
				{
					id: 'Card2',
					title: 'Invoice',
					subtitle: 'Facit Themes',
					description: 'Invoice preview and new creation screens will be added',
					user: USERS.ELLA,
					label: '5 day left',
					tags: [TAGS.revise, TAGS.design],
					tasks: [
						{ id: 1, text: 'Lorem ipsum dolor', status: true },
						{ id: 2, text: 'Sit amet.', status: false },
					],
				},
			],
		},
		{
			id: 'lane2',
			title: 'To Do',
			color: COLORS.INFO.name,
			icon: 'DoneOutline',
			cards: [
				{
					id: 'Card3',
					title: 'Landing Page Update',
					subtitle: 'Omtanke Team',
					description: 'Will be redesigned',
					label: '5 day left',
					user: USERS.GRACE,
					tags: [TAGS.design, TAGS.code],
					tasks: [
						{ id: 1, text: 'Draft drawings will be made', status: true },
						{ id: 2, text: 'Page will be updated', status: false },
						{ id: 3, text: 'Will be sent for review.', status: false },
					],
					attachments: [{ id: 2, path: 'somefile.txt', file: 'WORD' }],
				},
				{
					id: 'Card4',
					title: 'Write Blog',
					subtitle: 'Facit Themes',
					description: 'Explain why it should be chosen',
					label: '7 day left',
					user: USERS.JOHN,
					img: Slide4,
					tags: [TAGS.design],
					tasks: [{ id: 1, text: 'Lorem ipsum dolor', status: true }],
					attachments: [{ id: 1, path: 'somefile.txt', file: 'TXT' }],
				},
			],
		},
		{
			id: 'lane3',
			title: 'Pending',
			color: COLORS.INFO.name,
			icon: 'PendingActions',
			cards: [],
		},
		{
			id: 'lane4',
			title: 'Run',
			color: COLORS.INFO.name,
			icon: 'DirectionsRun',
			cards: [
				{
					id: 'Card5',
					title: 'Bug Fix',
					subtitle: 'Facit Themes',
					description: 'Minor bugs will be fixed',
					label: '5 day left',
					user: USERS.GRACE,
					tags: [TAGS.review, TAGS.design, TAGS.code],
					tasks: [
						{ id: 1, text: 'Lorem ipsum dolor', status: true },
						{ id: 2, text: 'Sit amet.', status: false },
						{ id: 3, text: 'Aliquam quis varius turpis.', status: false },
					],
					attachments: [
						{ id: 1, path: 'somefile.txt', file: 'TXT' },
						{ id: 2, path: 'somefile.txt', file: 'WORD' },
						{ id: 3, path: 'somefile.txt', file: 'PSD' },
					],
				},
			],
		},
		{
			id: 'lane5',
			title: 'Done',
			color: COLORS.SUCCESS.name,
			icon: 'Verified',
			cards: [
				{
					id: 'Card6',
					title: 'Project App',
					subtitle: 'Facit Themes',
					description: 'Project tracking screen will be added',
					label: '1 day ago',
					user: USERS.JOHN,
					img: Slide6,
					tags: [TAGS.critical, TAGS.design],
					tasks: [
						{ id: 1, text: 'Lorem ipsum dolor', status: true },
						{ id: 2, text: 'Sit amet.', status: false },
						{ id: 3, text: 'Aliquam quis varius turpis.', status: false },
					],
					attachments: [
						{ id: 1, path: 'somefile.txt', file: 'TXT' },
						{ id: 2, path: 'somefile.txt', file: 'WORD' },
						{ id: 3, path: 'somefile.txt', file: 'PSD' },
					],
				},
			],
		},
	];
	const [boardData, setBoardData] = useState(data);

	return (
		<PageWrapper title=''>
			<SubHeader>
				<SubHeaderLeft>
					<Button
						color='info'
						isLink
						icon='CardList'
						onClick={() => setIsListView((prevState) => !prevState)}>
						{isListView ? 'Board view' : 'List view'}
					</Button>
					<SubheaderSeparator />
					<span>
						There are{' '}
						<Badge color='info' isLight>
							2 teams
						</Badge>{' '}
						you are in and{' '}
						<Badge color='success' isLight>
							5 projects
						</Badge>
						.
					</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonAvatarTeam>
						<strong>zphere</strong> Team
					</CommonAvatarTeam>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				{isListView ? (
					<Card stretch>
						<CardHeader>
							<CardLabel icon='ShoppingCart' iconColor='info'>
								<CardTitle>Top Seller </CardTitle>
							</CardLabel>
							<CardActions>
								{/* <Dropdown isButtonGroup>
									<Popovers
										desc={
											<DatePicker
												onChange={() => {}}
												date='a'
												color={process.env.REACT_APP_PRIMARY_COLOR}
											/>
										}
										placement='bottom-end'
										className='mw-100'
										trigger='click'>
										<Button color='success' isLight icon='WaterfallChart'>
											""
										</Button>
									</Popovers>
									<DropdownToggle>
										<Button color='success' isLight />
									</DropdownToggle>
									<DropdownMenu isAlignmentEnd>
										<DropdownItem>
											<span>Last Hour</span>
										</DropdownItem>
										<DropdownItem>
											<span>Last Day</span>
										</DropdownItem>
										<DropdownItem>
											<span>Last Week</span>
										</DropdownItem>
										<DropdownItem>
											<span>Last Month</span>
										</DropdownItem>
									</DropdownMenu>
								</Dropdown> */}
								<Button
									color='info'
									icon='CloudDownload'
									isLight
									tag='a'
									to='/somefile.txt'
									target='_blank'
									download>
									Export
								</Button>
								{/* <Dropdown className='d-inline'>
									<DropdownToggle hasIcon={false}>
										<Button color='primary' icon='MoreHoriz' />
									</DropdownToggle>
									<DropdownMenu isAlignmentEnd>
										<DropdownItem>
											<Button icon='Edit'>Edit</Button>
										</DropdownItem>
										<DropdownItem>
											<Button icon='Delete'>Delete</Button>
										</DropdownItem>
									</DropdownMenu>
								</Dropdown> */}
							</CardActions>
						</CardHeader>
						<CardBody className='table-responsive' isScrollable>
							<table className='table table-modern table-hover'>
								<thead>
									<tr>
										<th scope='col'>afszzj</th>
										<th scope='col'>#</th>
										<th scope='col'>Image</th>
										<th scope='col'>Name</th>
										<th scope='col'>Sales</th>
										<th scope='col'>Stock</th>
										<th scope='col'>Price</th>
										<th scope='col'>Store</th>
										<th scope='col' className='text-end'>
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									{/* {filteredData.map((i) => (
										<CommonTableRow
											key={i.id}
											// eslint-disable-next-line react/jsx-props-no-spreading
											{...i}
											selectName='selectedList'
											selectOnChange={selectTable.handleChange}
											selectChecked={selectTable.values.selectedList.includes(
												i.id.toString(),
											)}
										/>
									))} */}
								</tbody>
							</table>
						</CardBody>
						<CardFooter className='justify-content-center'>
							<Button color='dark' className='px-5 py-3'>
								Load More
							</Button>
						</CardFooter>
					</Card>
				) : (
					<Board data={boardData} setData={setBoardData} />
				)}
			</Page>
		</PageWrapper>
	);
};

export default ProjectManagementsProject;
