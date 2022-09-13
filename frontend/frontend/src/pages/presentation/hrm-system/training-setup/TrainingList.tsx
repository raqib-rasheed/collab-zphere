import React from 'react';
import Button from '../../../../components/bootstrap/Button';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Indicator = () => {
	function generateDummyData(count: number) {
		const dummyData = (index: number) => ({
			Name: 'India',
			EMAIL: 'Job Training',
			asas: (
				<Button color={index % 2 === 0 ? 'success' : 'warning'}>
					{index % 2 === 0 ? 'Started' : 'pending'}
				</Button>
			),
			BRANCH: 'Richard Atkinson',
			asasas: 'Anabel',
			id: 'Jul 21, 2021 to Jul 21, 2021',
			idasfa: '$5,000.00',
			actions: (
				<div>
					<Icon size='lg' className='mx-1' icon='Eye' color='info' />
					<Icon size='lg' className='mx-1' icon='Edit' color='success' />
					<Icon size='lg' className='mx-1' icon='Trash' color='danger' />
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
		{ name: 'TRAINING TYPE' },
		{ name: 'STATUS' },
		{ name: 'EMPLOYEE' },
		{ name: 'TRAINER' },
		{ name: 'TRAINING DURATION' },
		{ name: 'COST' },
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
