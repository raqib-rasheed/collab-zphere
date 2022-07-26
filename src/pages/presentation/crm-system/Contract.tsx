import React from 'react';
import Icon from '../../../components/icon/Icon';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';

const Contract = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			id: 'Install The Product',
			Naame: 'Mick Aston',
			Naaame: 'Marketing',
			Namase: '$4,400.00',
			asa: 'Aug 5, 1978',
			aasa: 'Aug 5, 1978',
			adsfssa: <Icon size='lg' className='mx-2' icon='ChatFill' color='info' />,
			actions: (
				<>
					<Icon size='lg' className='mx-2' icon='Edit' color='info' />
					<Icon size='lg' className='mx-2' icon='Delete' color='info' />
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
		{ name: 'SUBJECT' },
		{ name: 'CLIENT' },
		{ name: 'CONTRACT TYPE' },
		{ name: 'CONTRACT VALUE' },
		{ name: 'START DATE' },
		{ name: 'END DATE' },
		{ name: 'DESCRIPTION' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Manage Form Builder' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(3)} tableColumns={columns} title='' />
			</Page>
		</PageWrapper>
	);
};

export default Contract;
