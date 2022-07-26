import React, { useState } from 'react';
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

import TAGS from '../../../common/data/boardTagsData';
import CommonAvatarTeam from '../../../common/other/CommonAvatarTeam';
import Button from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';
import TableWidget from '../../../widgets/Table';
import Icon from '../../../components/icon/Icon';
import Avatar from '../../../components/Avatar';
import Card from '../../../components/bootstrap/Card';

const ProjectManagementsProject = () => {
	const [isListView, setIsListView] = useState(false);
	const { darkModeStatus } = useDarkMode();

	function generateDummyData(count: number) {
		const dummyData = {
			id: 'Starburst',
			Name: '$40,000.00',
			Namaase: 'Close',
			Namasase: '3/1',
			Namaaase: (
				<>
					<Avatar
						size={25}
						srcSet={USERS.JOHN.srcSet}
						src={USERS.JOHN.src}
						color={USERS.JOHN.color}
					/>
					<Avatar
						size={25}
						srcSet={USERS.GRACE.srcSet}
						src={USERS.GRACE.src}
						color={USERS.GRACE.color}
					/>
				</>
			),
			actions: (
				<div>
					<Icon size='lg' className='mx-2' icon='Eye' color='info' />
					<Icon size='lg' className='mx-2' icon='Edit' color='info' />
					<Icon size='lg' className='mx-2' icon='Delete' color='danger' />
				</div>
			),
		};

		const data = [];
		while (count > 0) {
			data?.push(dummyData);
			count--;
		}
		return data;
	}

	const columns = [
		{ name: 'NAME' },
		{ name: 'PRICE' },
		{ name: 'STAGE' },
		{ name: 'TASKS' },
		{ name: 'USERS' },
		{ name: 'ACTION' },
	];

	const data = [
		{
			id: 'lane1',
			title: 'Initial Contact',
			color: darkModeStatus ? COLORS.LIGHT.name : COLORS.DARK.name,
			icon: '',
			cards: [
				{
					id: 'Card1',
					title: 'Mail App',
					subtitle: 'Facit Themes',
					description: 'Mail application and screens will be added',
					label: '7 day left',
					user: USERS.JOHN,
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
			title: 'Qualification',
			color: COLORS.INFO.name,
			icon: '',
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
					tags: [TAGS.design],
					tasks: [{ id: 1, text: 'Lorem ipsum dolor', status: true }],
					attachments: [{ id: 1, path: 'somefile.txt', file: 'TXT' }],
				},
				{
					id: 'Card7',
					title: 'Write Blog',
					subtitle: 'Facit Themes',
					description: 'Explain why it should be chosen',
					label: '7 day left',
					user: USERS.JOHN,
					tags: [TAGS.design],
					tasks: [{ id: 1, text: 'Lorem ipsum dolor', status: true }],
					attachments: [{ id: 1, path: 'somefile.txt', file: 'TXT' }],
				},
			],
		},
		{
			id: 'lane3',
			title: 'Meeting',
			color: COLORS.INFO.name,
			icon: '',
			cards: [],
		},
		{
			id: 'lane4',
			title: 'Proposal',
			color: COLORS.INFO.name,
			icon: '',
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
			title: 'Close',
			color: COLORS.SUCCESS.name,
			icon: '',
			cards: [
				{
					id: 'Card9',
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
				<div className='d-flex justify-content-between'>
					<Card className='p-4' style={{ width: '22.5%' }}>
						<span>Total Deals</span>
						<h5>$1,331,527.99</h5>
						<Icon color='info' icon='Back' size={'lg'} />
					</Card>
					<Card className='p-4' style={{ width: '22.5%' }}>
						<span>Total Deals</span>
						<h5>$1,331,527.99</h5>
						<Icon color='info' icon='Back' size={'lg'} />
					</Card>
					<Card className='p-4' style={{ width: '22.5%' }}>
						<span>Total Deals</span>
						<h5>$1,331,527.99</h5>
						<Icon color='info' icon='Back' size={'lg'} />
					</Card>
					<Card className='p-4' style={{ width: '22.5%' }}>
						<span>Total Deals</span>
						<h5>$1,331,527.99</h5>
						<Icon color='info' icon='Back' size={'lg'} />
					</Card>
				</div>
				{isListView ? (
					<TableWidget data={generateDummyData(7)} tableColumns={columns} title='' />
				) : (
					<Board data={boardData} setData={setBoardData} />
				)}
			</Page>
		</PageWrapper>
	);
};

export default ProjectManagementsProject;
