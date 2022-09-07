import React from 'react';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Complaints = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Abel Callahan',
			Name: 'Richard Atkinson',
			Namae: 'tEST dEMO',
			EMAIL: 'Jul 21, 2021',
			id: 'it is always very special. it is always very special.',
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
		{ name: 'COMPLAINT FROM' },
		{ name: 'COMPLAINT AGAINST' },
		{ name: 'TITLE' },
		{ name: 'COMPLAINT DATE' },
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

export default Complaints;
