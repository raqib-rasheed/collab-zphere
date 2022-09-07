import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import USERS from '../../../common/data/userDummyData';
import Avatar, { AvatarGroup } from '../../../components/Avatar';
import Button from '../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Progress from '../../../components/bootstrap/Progress';
import Icon from '../../../components/icon/Icon';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';
import TableGridView from '../../../widgets/TableGridView';

enum EProjectSystemTasksView {
	LIST = 'list',
	GRID = 'grid',
}

const ProjectSystemTasks = () => {
	const [view, handleView] = useState<EProjectSystemTasksView>(EProjectSystemTasksView.GRID);
	function generateDummyData(count: number) {
		const dummyData = {
			id: (
				<Link to='/project-system/projects/id#1'>
					<span className='text-dark'>Newsletter Templates</span>
				</Link>
			),
			Name: <Button color='secondary'>On Hold</Button>,
			EMAIL: (
				<AvatarGroup>
					<Avatar
						src={USERS.GRACE.src}
						srcSet={USERS.GRACE.srcSet}
						// @ts-ignore
						color={USERS.GRACE.color}
						userName={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
					/>
					<Avatar
						src={USERS.JANE.src}
						srcSet={USERS.JANE.srcSet}
						// @ts-ignore
						color={USERS.JANE.color}
						userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
					/>
				</AvatarGroup>
			),
			BRANCH: (
				<Progress
					isStriped
					className='flex-grow-1'
					isAutoColor
					value={34}
					style={{
						height: 5,
					}}
				/>
			),
			actionsas: <span className='text-info fs-5'>34%</span>,
			actions: (
				<>
					<Button size='sm' className='mx-2' icon='Send' color='info' />
					<Button size='sm' className='mx-2' icon='Edit' color='info' />
					<Button size='sm' className='mx-2' icon='Trash' color='info' />
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
		{ name: 'PROJECT' },
		{ name: 'STATUS' },
		{ name: 'USERS' },
		{ name: 'COMPLETION' },
		{ name: ' ' },
		{ name: 'ACTION' },
	];

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
			<Dropdown direction='down'>
				<DropdownToggle hasIcon={false}>
					<Button color='dark'>Status</Button>
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem>
						<span>Show All</span>
					</DropdownItem>
					<DropdownItem>
						<span>On Hold</span>
					</DropdownItem>
					<DropdownItem>
						<span>In Progress</span>
					</DropdownItem>
					<DropdownItem>
						<span>Completed</span>
					</DropdownItem>
					<DropdownItem>
						<span>Cancelled</span>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Dropdown direction='start'>
				<DropdownToggle hasIcon={false}>
					<Button color='dark' icon='Funnel'></Button>
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem>
						<span>
							<Icon icon='Edit' />
							Edit
						</span>
					</DropdownItem>
					<DropdownItem>
						<span>
							<Icon icon='Trash' />
							Delete
						</span>
					</DropdownItem>
					<DropdownItem>
						<span>
							<Icon icon='Send' />
							Invite User
						</span>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
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

export default ProjectSystemTasks;
