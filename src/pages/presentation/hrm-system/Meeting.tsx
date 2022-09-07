import React from 'react';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import TableWidget from '../../../widgets/Table';

const Meeting = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			id: 'demo text',
			Name: 'Richard Atkinson',
			EMAIL: 'keanu2006@gmail.com	',
			BRANCH: 'India',
		};

		const data = [];
		while (count > 0) {
			data?.push(dummyData);
			count--;
		}
		return data;
	}

	const columns = [
		{ name: 'MEETING TITLE' },
		{ name: 'MEETING DATE' },
		{ name: 'MEETING TIME' },
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

export default Meeting;
