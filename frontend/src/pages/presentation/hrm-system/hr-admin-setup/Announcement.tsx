import React from 'react';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Announcement = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'WE WANT TO EARN YOUR DEEPEST TRUST.',
			Namae: 'Jul 21, 2021',
			id: 'Jul 21, 2021',
			Name: 'I want the name "Doe Product" to be synonymous in your mind with quality.',
			actions: (
				<>
					<Icon size='lg' className='mx-2' icon='Edit' color='success' />
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
		{ name: 'TITLE' },
		{ name: 'START DATE' },
		{ name: 'END DATE' },
		{ name: 'DESCRIPTION' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title='Awards'>
			<PresentaionPagesSubHeader title='Manage Termination' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(3)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Announcement;
