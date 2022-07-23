import React from 'react';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import TableWidget from '../../../widgets/Table';

const EmployeeAssetSetup = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			id: 'demo text',
			Name: 'Richard Atkinson',
			EMAIL: 'keanu2006@gmail.com	',
			BRANCH: 'India',
			BRAaCH: 'Tese DemoTese DemoTese DemoTese DemoTese Demo',
			BRAaCaa: 'Actions',
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
		{ name: 'PURCHASE DATE' },
		{ name: 'SUPPORTED DATE' },
		{ name: 'AMOUNT' },
		{ name: 'DESCRIPTION' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<Page container='fluid'>
				<TableWidget data={generateDummyData(3)} tableColumns={columns} title='' />
			</Page>
		</PageWrapper>
	);
};

export default EmployeeAssetSetup;
