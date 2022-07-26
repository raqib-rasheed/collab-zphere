import React from 'react';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Award = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Richard Atkinson',
			Name: ' Jul 21, 2021',
			EMAIL: 'Nov 21, 2021',
			id: 'Career Change',
			actions: (
				<>
					<Icon size='lg' className='mx-2' icon='Edit' color='info' />
					<Icon size='lg' className='mx-2' icon='Trash' color='danger' />
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
		{ name: 'EMPLOYEE NAME' },
		{ name: 'RESIGNATION DATE' },
		{ name: 'LAST WORKING DATE' },
		{ name: 'REASON' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title='Awards'>
			<PresentaionPagesSubHeader title='Manage Award' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(5)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Award;
