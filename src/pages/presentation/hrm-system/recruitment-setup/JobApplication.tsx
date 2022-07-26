import React, { useState } from 'react';
import TAGS from '../../../../common/data/boardTagsData';
import COLORS from '../../../../common/data/enumColors';
import USERS from '../../../../common/data/userDummyData';
import Board from '../../../../components/Board/Board';
import Card from '../../../../components/bootstrap/Card';
import Select from '../../../../components/bootstrap/forms/Select';
// import Slide2 from '../../../../assets/img/wanna/slide/scene-2.png';
// import Input from '../../../../components/bootstrap/forms/Input';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import useDarkMode from '../../../../hooks/useDarkMode';

const JobApplication = () => {
	const { darkModeStatus } = useDarkMode();
	const data = [
		{
			id: 'lane1',
			title: 'Applied',
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
					img: '',
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
			title: 'Phone Screen',
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
			title: 'Rejected',
			color: COLORS.INFO.name,
			icon: 'PendingActions',
			cards: [],
		},
		{
			id: 'lane4',
			title: 'Hired',
			color: COLORS.INFO.name,
			icon: 'DirectionsRun',
			cards: [],
		},
		{
			id: 'lane5',
			title: 'Done',
			color: COLORS.SUCCESS.name,
			icon: 'Interview',
			cards: [],
		},
	];
	const [boardData, setBoardData] = useState(data);
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Find Employee Payslip' />
			<Card className='py-4 px-2'>
				<div className='d-flex justify-content-end align-items-center'>
					<div className='btn-box mx-1'>
						<label htmlFor='month' className='form-label'>
							Start Date
						</label>
						<input
							className='month-btn form-control'
							name='month'
							type='month'
							value='2022-07'
							id='month'
						/>
					</div>
					<div className='btn-box mx-1'>
						<label htmlFor='month' className='form-label'>
							End Date
						</label>
						<input
							className='month-btn form-control'
							name='month'
							type='month'
							value='2022-07'
							id='month'
						/>
					</div>
					<div className='btn-box mx-1'>
						<label htmlFor='month' className='form-label'>
							Job
						</label>
						<Select
							ariaLabel='job selector'
							className='month-btn form-control'
							name='month'
							value='2022-07'
							id='month'
							placeholder='All'
						/>
					</div>
					<div style={{ marginTop: '1.5rem' }} className='col-auto'>
						<a
							href='https://asasf/afasf/a'
							className='btn btn-sm mx-1 btn-primary'
							onClick={() => {}}
							data-bs-toggle='tooltip'
							title=''
							data-original-title='apply'
							data-bs-original-title='Apply'>
							<span className='btn-inner--icon'>
								<Icon icon='Search' />
							</span>
						</a>

						<a
							href='https://demo.rajodiya.com/erpgo-saas/reports-payroll'
							className='btn btn-sm mx-1 btn-danger '
							data-bs-toggle='tooltip'
							title=''
							data-original-title='Reset'
							data-bs-original-title='Reset'>
							<span className='btn-inner--icon'>
								<Icon icon='TrashFill' />
							</span>
						</a>
					</div>
				</div>
			</Card>
			<Page container='fluid'>
				<Card className='p-3'>
					<Board data={boardData} setData={setBoardData} />{' '}
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default JobApplication;
