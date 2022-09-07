import React from 'react';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Termintaion = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Richard Atkinson',
			Name: 'Test Termination',
			Namae: 'Jul 21, 2021',
			id: 'Jul 21, 2021',
			idas: <Icon size='lg' className='mx-2' icon='ChatFill' color='success' />,
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
		{ name: 'EMPLOYEE NAME' },
		{ name: 'TERMINATION TYPE' },
		{ name: 'NOTICE DATE' },
		{ name: 'TERMINATION DATE' },
		{ name: 'DESCRIPTION' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title='Awards'>
			<PresentaionPagesSubHeader title='Manage Termination' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(4)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Termintaion;
