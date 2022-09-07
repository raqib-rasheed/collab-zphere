import React from 'react';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Indicator = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			Name: 'Invoice Goal',
			EMAIL: 'testing',
			BRANCH: 'Greece',
			BRANCASH: '10000',
			BNCASH: 'Oct 1, 2020',
			BANCASH: 'May 30, 2021',
			asas: (
				<div>
					<Icon size='lg' className='mx-1' icon='Star' color='warning' />
					<Icon size='lg' className='mx-1' icon='Star' color='warning' />
					<Icon size='lg' className='mx-1' icon='Star' color='warning' />
				</div>
			),
			id: '44%',
			actions: (
				<div>
					<Icon size='lg' className='mx-1' icon='Edit' color='success' />
					<Icon size='lg' className='mx-1' icon='Trash' color='danger' />
				</div>
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
		{ name: 'GOAL TYPE' },
		{ name: 'SUBJECT' },
		{ name: 'BRANCH' },
		{ name: 'TARGET ACHIEVEMENT' },
		{ name: 'START DATE' },
		{ name: 'END DATE' },
		{ name: 'RATING' },
		{ name: 'PROGRESS' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader showSubHeaderRight title='Manage  Goal Tracking' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(5)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Indicator;
