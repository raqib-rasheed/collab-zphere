import React from 'react';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Trip = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Buffy Walter',
			Name: 'Jul 21, 2021',
			Namae: 'Jul 21, 2021',
			EMAIL: 'just talk',
			id: 'India',
			iasd: 'it is always very special.',
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
		{ name: 'START DATE' },
		{ name: 'END DATE' },
		{ name: 'PURPOSE OF TRIP' },
		{ name: 'COUNTRY' },
		{ name: 'DESCRIPTION' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title='Awards'>
			<PresentaionPagesSubHeader title='Manage Trip' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(5)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Trip;
