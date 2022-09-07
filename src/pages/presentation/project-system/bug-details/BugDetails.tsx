import React, { useState } from 'react';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Page from '../../../../layout/Page/Page';
import COLORS from '../../../../common/data/enumColors';
import Board from '../../../../components/Board/Board';
import USERS from '../../../../common/data/userDummyData';

import TAGS from '../../../../common/data/boardTagsData';
import Button from '../../../../components/bootstrap/Button';
import useDarkMode from '../../../../hooks/useDarkMode';
import TableWidget from '../../../../widgets/Table';
import Icon from '../../../../components/icon/Icon';
import Avatar from '../../../../components/Avatar';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import { EProjectSystemTasksView } from '../../../../type/globalTypes';

const ProjectManagementsProject = () => {
	const { darkModeStatus } = useDarkMode();

	function generateDummyData(count: number) {
		const dummyData = {
			id: 'Starburst',
			Name: 'Laborum Iste aute c',
			Namaase: 'Revised',
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
					<Icon size='lg' className='mx-2' icon='Delete' color='info' />
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
		{ name: 'SUBJECT' },
		{ name: 'STAGE' },
		{ name: 'USERS' },
		{ name: 'ACTION' },
	];

	const data = [
		{
			id: 'lane1',
			title: 'Confirmed',
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
			],
		},
		{
			id: 'lane2',
			title: 'In Progress',
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
			],
		},
		{
			id: 'lane3',
			title: 'Unconfirmed',
			color: COLORS.INFO.name,
			icon: '',
			cards: [
				{
					id: 'Carsdad9',
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
		{
			id: 'lane4',
			title: 'Revised',
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
			title: 'Resolved',
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
		{
			id: 'lane5',
			title: 'Verified',
			color: COLORS.SUCCESS.name,
			icon: '',
			cards: [],
		},
	];
	const [view, handleView] = useState<EProjectSystemTasksView>(EProjectSystemTasksView.LIST);
	const [boardData, setBoardData] = useState(data);
	const SubHeaderActions = () => (
		<>
			<Button
				onClick={() =>
					handleView((prevState) =>
						prevState === EProjectSystemTasksView.LIST
							? EProjectSystemTasksView.GRID
							: EProjectSystemTasksView.LIST,
					)
				}
				color='dark'
				icon={view === EProjectSystemTasksView.LIST ? 'Grid1X2Fill' : 'CardList'}></Button>
		</>
	);

	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader
				showSubHeaderRight
				customSubHeaderRightActions={SubHeaderActions}
				title='Find Employee Payslip'
			/>
			<Page container='fluid'>
				{view === EProjectSystemTasksView.LIST ? (
					<TableWidget data={generateDummyData(7)} tableColumns={columns} title='' />
				) : (
					<Board data={boardData} setData={setBoardData} />
				)}
			</Page>
		</PageWrapper>
	);
};

export default ProjectManagementsProject;
