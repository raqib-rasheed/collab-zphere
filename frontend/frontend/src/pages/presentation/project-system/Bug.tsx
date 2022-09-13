import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../../components/bootstrap/Badge';
import Button from '../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Icon from '../../../components/icon/Icon';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import { EProjectSystemTasksView } from '../../../type/globalTypes';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';
import TableGridView from '../../../widgets/TableGridView';

const Bug = () => {
	const [view, handleView] = useState<EProjectSystemTasksView>(EProjectSystemTasksView.LIST);
	function generateDummyData(count: number) {
		const dummyData = {
			id: (
				<Link className='text-dark text-decoration-underline' to='/project-system/bug/id#1'>
					<h6>project 1 Bug</h6>
					<span className='text-muted'>Newsletter Templates</span>
				</Link>
			),
			Namase: (
				<Badge className='my-2 py-2' style={{ width: '6rem' }} color='success'>
					Owner
				</Badge>
			),
			Name: 'In Progress',
			EMAIL: (
				<Badge className='my-2 py-2 bg-danger' style={{ width: '6rem' }} color='success'>
					High
				</Badge>
			),
		};

		const data = [];
		while (count > 0) {
			data?.push(dummyData);
			count--;
		}
		return data;
	}

	const columns = [{ name: 'NAME' }, { name: ' ' }, { name: 'BUG STATUS' }, { name: 'PRIORITY' }];

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

export default Bug;
