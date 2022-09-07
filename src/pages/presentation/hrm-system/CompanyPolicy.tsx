import React from 'react';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import TableWidget from '../../../widgets/Table';

const EmployeeAssetSetup = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			id: 'China',
			Name: ' DemoTese DemoTese DemoTese Demo',
			EMAIL: 'Employment Contracts.Employment Contracts.	',
			BRANCH: 'No Attachement',
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
		{ name: 'BRANCH' },
		{ name: 'TITLE' },
		{ name: 'DESCRIPTION' },
		{ name: 'ATTACHMENT' },
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
