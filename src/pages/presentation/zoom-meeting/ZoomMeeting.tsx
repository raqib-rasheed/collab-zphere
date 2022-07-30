import React from 'react';
import USERS from '../../../common/data/userDummyData';
import Avatar from '../../../components/Avatar';
import Badge from '../../../components/bootstrap/Badge';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';

const ProductAndServices = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'meeting 2',
			Name: 'Website Testing',
			EMAIL: <Avatar src={USERS.JANE.srcSet} size={25} />,
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
	const customSubHeaderRightActions = () => (
		<>
			<Button className='p-2' icon='CalendarDateFill' color='dark'>
				Calendar View
			</Button>
			<Button className='p-2' icon='trash' color='danger' />
		</>
	);
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader
				showSubHeaderRight
				showAddNewButton
				customSubHeaderRightActions={customSubHeaderRightActions}
				title='Find Employee Payslip'
			/>
			<Page container='fluid'>
				<TableWidget data={generateDummyData(8)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default ProductAndServices;
