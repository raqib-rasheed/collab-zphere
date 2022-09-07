import React from 'react';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Award = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Sonya Sims	',
			Name: ' Trophy',
			EMAIL: 'Jul 21, 2021',
			BRANCH: 'Pen',
			id: 'it is always very special.',
			actions: (
				<>
					<Icon size='lg' className='mx-2' icon='Edit' color='info' />
					<Icon size='lg' className='mx-2' icon='Trash' color='info' />
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
		{ name: 'EMPLOYEE' },
		{ name: 'AWARD TYPE' },
		{ name: 'DATE' },
		{ name: 'GIFT' },
		{ name: 'DESCRIPTION' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title='Awards'>
			<PresentaionPagesSubHeader title='Manage Award' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(8)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Award;
