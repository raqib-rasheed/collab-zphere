import React from 'react';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Indicator = () => {
	function generateDummyData(count: number) {
		const dummyData = (index: number) => ({
			Name: index % 2 === 1 ? 'India' : 'China',
			asasas: 'Teresa McRae',
			EMAIL: '78787878',
			id: 't1@example.com',
			actions: (
				<div>
					<Icon size='lg' className='mx-2' icon='Edit' color='success' />
					<Icon size='lg' className='mx-2' icon='Trash' color='danger' />
				</div>
			),
		});

		const data = [];
		while (count > 0) {
			data?.push(dummyData(count));
			count--;
		}
		return data;
	}

	const columns = [
		{ name: 'BRANCH' },
		{ name: 'FULL NAME' },
		{ name: 'CONTACT' },
		{ name: 'EMAIL' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader showSubHeaderRight title='Manage Training' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(6)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Indicator;
