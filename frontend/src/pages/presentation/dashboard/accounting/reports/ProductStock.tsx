import React from 'react';
import Page from '../../../../../layout/Page/Page';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../../widgets/Table';

const EmployeeAssetSetup = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			id: '01 Jul 2022',
			Name: 'Bicycle Clothing',
			Naasame: '1',
			Namase: 'Invoice',
			asName: '1 quantity sold in invoice #INVO00038',
		};

		const data = [];
		while (count > 0) {
			data?.push(dummyData);
			count--;
		}
		return data;
	}

	const columns = [
		{ name: 'DATE' },
		{ name: 'PRODUCT NAME' },
		{ name: 'QUANTITY' },
		{ name: 'TYPE' },
		{ name: 'DESCRIPTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Manage Form Builder' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(3)} tableColumns={columns} title='' />
			</Page>
		</PageWrapper>
	);
};

export default EmployeeAssetSetup;
