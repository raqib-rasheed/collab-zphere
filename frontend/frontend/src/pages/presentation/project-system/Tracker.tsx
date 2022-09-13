import React from 'react';
import Icon from '../../../components/icon/Icon';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';

const Bug = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			id: 'Website Design set',
			Namase: 'Lunch meetingLunch meetingLunch meetingLunch meeting',
			Name: 'Newsletter Templates',
			Nadsfaame: '12:28:50',
			Nasame: '12:31:59',
			Naaaame: '00:03:09',
			EMAIL: (
				<>
					<Icon size='lg' className='mx-2' icon='Edit' color='info' />
					<Icon size='lg' className='mx-2' icon='Delete' color='info' />
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
		{ name: 'DESCRIPTION' },
		{ name: 'TASK' },
		{ name: 'BUPROJECT' },
		{ name: 'START TIME' },
		{ name: 'END TIME' },
		{ name: 'TOTAL TIME' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader showAddNewButton={false} title='Find Employee Payslip' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(5) as any} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Bug;
