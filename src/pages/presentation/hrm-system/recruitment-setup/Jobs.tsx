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
			title: 'The Great Versatility of Business Jobs	',
			EMAIL: 'Jul 21, 2021',
			BRANCH: 'Nov 21, 2022',
			asas: (
				<Button className='text-center' color={index % 2 === 0 ? 'success' : 'danger'}>
					{index % 2 === 0 ? 'Active' : 'In Active'}
				</Button>
			),
			id: 'Jul 21, 2021',
			actions: (
				<div>
					{index % 2 === 0 && (
						<Icon size='lg' className='mx-1' icon='Link' color='info' />
					)}
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
		{ name: 'TITLE' },
		{ name: 'START DATE' },
		{ name: 'END DATE' },
		{ name: 'STATUS' },
		{ name: 'CREATED AT' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader showSubHeaderRight title='Manage Job' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(6)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Indicator;
