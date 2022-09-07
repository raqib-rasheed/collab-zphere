import React from 'react';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Warning = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Sonya Sims',
			Name: 'Abel Callahan',
			Namae: 'Test Demo',
			EMAIL: 'Jul 21, 2021',
			id: 'Highly Competitive Fashion Jobs',
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
		{ name: 'WARNING BY' },
		{ name: 'WARNING TO' },
		{ name: 'SUBJECT' },
		{ name: 'WARNING DATE' },
		{ name: 'DESCRIPTION' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title='Awards'>
			<PresentaionPagesSubHeader title='Manage Complain' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(4)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Warning;
