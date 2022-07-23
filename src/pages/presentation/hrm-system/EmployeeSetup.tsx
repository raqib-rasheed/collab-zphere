import React from 'react';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import TableWidget from '../../../widgets/Table';

const EmployeeSetup = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			id: 'demo text',
			Name: 'Richard Atkinson',
			EMAIL: 'keanu2006@gmail.com	',
			BRANCH: 'India',
			DEPARTMENT: 'Industrials',
			DESIGNATION: 'demo text',
			'DATE OF JOINING': 'Jan 1, 2020	',
			'LAST LOGIN': 'demo text',
			ACTION: 'demo text',
		};

		const data = [];
		while (count > 0) {
			data?.push(dummyData);
			count--;
		}
		return data;
	}

	const columns = [
		{ name: 'EMPLOYEE ID' },
		{ name: 'Name' },
		{ name: 'EMAIL' },
		{ name: 'BRANCH' },
		{ name: 'DEPARTMENT' },
		{ name: 'DESIGNATION' },
		{ name: 'DATE OF JOINING' },
		{ name: 'LAST LOGIN' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<Page container='fluid'>
				<TableWidget data={generateDummyData(10)} tableColumns={columns} title='' />
			</Page>
		</PageWrapper>
	);
};

export default EmployeeSetup;
