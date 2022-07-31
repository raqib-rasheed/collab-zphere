import React, { useState } from 'react';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card from '../../../components/bootstrap/Card';
import Icon from '../../../components/icon/Icon';
import Badge from '../../../components/bootstrap/Badge';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';
import Button from '../../../components/bootstrap/Button';
import { Link } from 'react-router-dom';
import TableGridView from '../../../widgets/TableGridView';
import { EProjectSystemTasksView } from '../../../type/globalTypes';

const ListFluidPage = () => {
	const [view, setView] = useState(EProjectSystemTasksView.LIST);
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Rajodiya Infotech',
			Name: (
				<div>
					<Link className='text-decoration-none text-dark' to='/support-system/ticket/1'>
						<h6>Rerum molestiae volue</h6>
					</Link>
					<Badge className='py-2 px-3'>Low</Badge>
				</div>
			),
			EMAIL: '090117',
			BRANCH: (
				<>
					<Button className='mx-2' icon='Download' color='success' />
					<Button className='mx-2' icon='BoxArrowUpRight' color='light' />
				</>
			),
			id: 'Mick Aston',
			iad: (
				<Badge color='success' className='py-2 px-3'>
					Open
				</Badge>
			),
			asid: 'Jan 10, 2022',
			actions: (
				<>
					<Button className='mx-2' icon='Arrow90DegLeft' color='warning' />
					<Button className='mx-2' icon='Edit' color='success' />
					<Button className='mx-2' icon='trash' color='danger' />
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
		{ name: 'CREATED BY' },
		{ name: 'TICKET' },
		{ name: 'CODE' },
		{ name: 'ATTACHEMENT' },
		{ name: 'ASSIGN USER' },
		{ name: 'STATUS' },
		{ name: 'CREATED AT' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title='demo title'>
			<PresentaionPagesSubHeader
				showSubHeaderRight
				showAddNewButton
				customSubHeaderRightActions={() => (
					<Button
						onClick={() =>
							setView((prevState) =>
								prevState === EProjectSystemTasksView.LIST
									? EProjectSystemTasksView.GRID
									: EProjectSystemTasksView.LIST,
							)
						}
						color='dark'
						icon={
							view === EProjectSystemTasksView.LIST ? 'Grid1X2Fill' : 'CardList'
						}></Button>
				)}
				title='Find Employee Payslip'
			/>
			<Page container='fluid'>
				<div className='row'>
					<div className='d-flex justify-content-between px-4'>
						<Card className='p-3' style={{ width: '23%' }} stretch>
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
						</Card>
						<Card className='p-3' style={{ width: '23%' }} stretch>
							<div className='d-flex align-items-center justify-content-between'>
								<div className='d-flex'>
									<Badge className='p-3 mx-2' color='info'>
										<Icon size='lg' icon='Cast' />
									</Badge>
									<div>
										<span className='text-muted'>Open</span>
										<h5>Tickets</h5>
									</div>
								</div>
								<h4 className='mx-3'>5</h4>
							</div>
							<div></div>
						</Card>
						<Card className='p-3' style={{ width: '23%' }} stretch>
							<div className='d-flex align-items-center justify-content-between'>
								<div className='d-flex'>
									<Badge className='p-3 mx-2' color='warning'>
										<Icon size='lg' icon='Cast' />
									</Badge>
									<div>
										<span className='text-muted'>On Hold</span>
										<h5>Tickets</h5>
									</div>
								</div>
								<h4 className='mx-3'>5</h4>
							</div>
							<div></div>
						</Card>
						<Card className='p-3' style={{ width: '23%' }} stretch>
							<div className='d-flex align-items-center justify-content-between'>
								<div className='d-flex'>
									<Badge className='p-3 mx-2' color='danger'>
										<Icon size='lg' icon='Cast' />
									</Badge>
									<div>
										<span className='text-muted'>Close</span>
										<h5>Tickets</h5>
									</div>
								</div>
								<h4 className='mx-3'>5</h4>
							</div>
							<div></div>
						</Card>
					</div>
				</div>
				{view === EProjectSystemTasksView?.LIST ? (
					<TableWidget data={generateDummyData(7)} tableColumns={columns} title='' />
				) : (
					<TableGridView data={generateDummyData(8) as any} />
				)}
			</Page>
		</PageWrapper>
	);
};

export default ListFluidPage;
