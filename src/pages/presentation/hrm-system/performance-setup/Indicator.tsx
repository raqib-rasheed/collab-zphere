import React from 'react';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Indicator = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			Name: 'China',
			EMAIL: 'Financials',
			BRANCH: 'Chartered',
			asas: (
				<div>
					<Icon size='lg' className='mx-1' icon='Star' color='warning' />
					<Icon size='lg' className='mx-1' icon='Star' color='warning' />
					<Icon size='lg' className='mx-1' icon='Star' color='warning' />
				</div>
			),
			asasas: 'Rajodiya Infotech',
			id: 'Jul 21, 2021',
			actions: (
				<div>
					<Icon size='lg' className='mx-1' icon='Eye' color='info' />
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
		{ name: 'BRANCH' },
		{ name: 'DEPARTMENT' },
		{ name: 'DESIGNATION' },
		{ name: 'OVERALL RATING' },
		{ name: 'ADDED BY' },
		{ name: 'CREATED AT' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Manage Indicator' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(8)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Indicator;
