import React, { useState } from 'react';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Page from '../../../../layout/Page/Page';
import COLORS from '../../../../common/data/enumColors';
import Board from '../../../../components/Board/Board';
import USERS from '../../../../common/data/userDummyData';

import TAGS from '../../../../common/data/boardTagsData';
import useDarkMode from '../../../../hooks/useDarkMode';

const ProjectManagementsProject = () => {
	const { darkModeStatus } = useDarkMode();
	const data = [
		{
			id: 'lane1',
			title: 'To Do',
			color: darkModeStatus ? COLORS.LIGHT.name : COLORS.DARK.name,
			icon: '',
			cards: [
				{
					id: 'Card1',
					title: 'Task 3',
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
					title: 'Task 2',
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
			title: 'Review',
			color: COLORS.INFO.name,
			icon: '',
			cards: [],
		},
		{
			id: 'lane3',
			title: 'In Progress',
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
			id: 'lane4',
			title: 'Done',
			color: COLORS.INFO.name,
			icon: '',
			cards: [],
		},
	];
	const [boardData, setBoardData] = useState(data);

	return (
		<PageWrapper title=''>
			<Page container='fluid'>
				<Board data={boardData} setData={setBoardData} />
			</Page>
		</PageWrapper>
	);
};

export default ProjectManagementsProject;
