import React from 'react';
import Button from '../../../../components/bootstrap/Button';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const JobOnBoarding = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			id: 'What Do You Consider to Be Your Weaknesses?	',
			EMAIL: <Button color='danger'>No</Button>,
			iad: (
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

	const columns = [{ name: 'QUESTION' }, { name: 'IS REQUIRED' }, { name: 'ACTION' }];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Manage Archive Application' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(3)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default JobOnBoarding;
