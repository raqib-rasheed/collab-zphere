import React from 'react';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card from '../../../components/bootstrap/Card';
import Icon from '../../../components/icon/Icon';
import Badge from '../../../components/bootstrap/Badge';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';
import Button from '../../../components/bootstrap/Button';

const ListFluidPage = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'meeting 2',
			Name: 'Website Testing',
			EMAIL: 'saf',
			BRANCH: 'Emilia Fox',
			iad: '2021-12-28 12:00:00',
			id: '60 Minutes',
			asid: '-',
			asasid: (
				<Badge className='py-2 px-3' color='danger'>
					End
				</Badge>
			),
			actions: (
				<>
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
		{ name: 'TITLE' },
		{ name: 'PROJECT' },
		{ name: 'USER' },
		{ name: 'CLIENT' },
		{ name: 'MEETING TIME' },
		{ name: 'DURATION' },
		{ name: 'JOIN URL' },
		{ name: 'STATUS' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title='demo title'>
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
				<PresentaionPagesSubHeader
					showSubHeaderRight
					showAddNewButton
					title='Find Employee Payslip'
				/>
				<TableWidget data={generateDummyData(8)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default ListFluidPage;
