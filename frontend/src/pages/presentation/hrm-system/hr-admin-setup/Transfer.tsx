import React from 'react';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Transfer = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Richard Atkinson',
			Name: ' China',
			EMAIL: 'Financials',
			BRANCH: 'Jan 26, 2022',
			id: 'it is always very special.',
		};

		const data = [];
		while (count > 0) {
			data?.push(dummyData);
			count--;
		}
		return data;
	}

	const columns = [
		{ name: 'EMPLOYEE NAME' },
		{ name: 'BRANCH' },
		{ name: 'DEPARTMENT' },
		{ name: 'TRANSFER DATE' },
		{ name: 'DESCRIPTION' },
	];
	return (
		<PageWrapper title='Awards'>
			<PresentaionPagesSubHeader title='Manage Transfer' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(3)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Transfer;
