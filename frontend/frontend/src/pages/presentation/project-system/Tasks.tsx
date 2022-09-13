import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import USERS from '../../../common/data/userDummyData';
import Avatar from '../../../components/Avatar';
import Badge from '../../../components/bootstrap/Badge';
import Button from '../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';
import TableGridView from '../../../widgets/TableGridView';

enum EProjectSystemTasksView {
	LIST = 'list',
	GRID = 'grid',
}

const Tasks = () => {
	const [view, handleView] = useState<EProjectSystemTasksView>(EProjectSystemTasksView.LIST);
	function generateDummyData(count: number) {
		const dummyData = {
			id: (
				<Link
					className='text-dark text-decoration-underline'
					to='/project-system/tasks/id#1'>
					<h6>task 3 Website Launch</h6>
					<span className='text-muted'>Website Launch</span>
				</Link>
			),
			Namase: (
				<Badge className='my-2 py-2' style={{ width: '6rem' }} color='success'>
					Owner
				</Badge>
			),
			Name: 'To Do',
			EMAIL: 'Critical',
			BRANCH: <span className='text-danger'>21 Jul 2021</span>,
			BRANCaaH: <Avatar size={25} src={USERS.CHLOE.src} />,
			EMAILas: '0%',
			actions: (
				<>
					<Button size='sm' className='mx-2' icon='Paperclip' />0
					<Button size='sm' className='mx-2' icon='Message' />1
					<Button size='sm' className='mx-2' icon='ListCheck' />
					0/0
				</>
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
		{ name: ' ' },
		{ name: 'STAGE' },
		{ name: 'PRIORITY' },
		{ name: 'END DATE' },
		{ name: 'ASSIGNED TO' },
		{ name: 'COMPLETION' },
		{ name: ' ' },
	];

	const SubHeaderActions = () => (
		<>
			<Dropdown direction='start'>
				<DropdownToggle hasIcon={false}>
					<Button color='dark' icon='Funnel'></Button>
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem>
						<span>Newest</span>
					</DropdownItem>
					<DropdownItem>
						<span>Oldest</span>
					</DropdownItem>
					<DropdownItem>
						<span>From A-Z</span>
					</DropdownItem>
					<DropdownItem>
						<span>From Z-A</span>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Dropdown direction='start'>
				<DropdownToggle hasIcon={false}>
					<Button color='dark'>Status</Button>
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem>
						<span>Show All</span>
					</DropdownItem>
					<DropdownItem>
						<span>See My Tasks</span>
					</DropdownItem>
					<DropdownItem>
						<span>Critical</span>
					</DropdownItem>
					<DropdownItem>
						<span>High</span>
					</DropdownItem>
					<DropdownItem>
						<span>Medium</span>
					</DropdownItem>

					<DropdownItem>
						<span>Low</span>
					</DropdownItem>

					<DropdownItem>
						<span>Due Today</span>
					</DropdownItem>

					<DropdownItem>
						<span>Over Due</span>
					</DropdownItem>

					<DropdownItem>
						<span>Starred</span>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>

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
				showAddNewButton={false}
				showSubHeaderRight
				customSubHeaderRightActions={SubHeaderActions}
				title='Find Employee Payslip'
			/>
			<Page container='fluid'>
				{view === EProjectSystemTasksView?.LIST ? (
					<TableWidget
						displaySearch={false}
						data={generateDummyData(8) as any}
						tableColumns={columns}
					/>
				) : (
					<TableGridView data={generateDummyData(8) as any} />
				)}
			</Page>
		</PageWrapper>
	);
};

export default Tasks;
