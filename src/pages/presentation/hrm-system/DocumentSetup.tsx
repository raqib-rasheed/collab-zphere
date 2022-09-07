import React from 'react';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import TableWidget from '../../../widgets/Table';

const DocumentSetup = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			id: 'demo text',
			Name: 'Richard Atkinson',
			EMAIL: 'keanu2006@gmail.com	',
			BRANCH: 'India',
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
		{ name: 'DOCUMENT' },
		{ name: 'ROLE' },
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

export default DocumentSetup;
