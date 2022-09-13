import React from 'react';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';

const Contract = () => {
	const columns = [
		{ key: 'subject', name: 'SUBJECT' },
		{ key: 'client_name', name: 'CLIENT' },
		{ key: 'type', name: 'CONTRACT TYPE' },
		{ key: 'value', name: 'CONTRACT VALUE' },
		{ key: 'start_date', name: 'START DATE' },
		{ key: 'end_date', name: 'END DATE' },
		{ key: 'description', name: 'DESCRIPTION', customColumn: true },
		{ name: 'ACTION' },
	];
	const customColumns = [
		{
			key: 'description',
			component: <Button size='sm' className='mx-2' icon='ChatFill' color='info' />,
		},
	];
	const rowActions = () => (
		<>
			<Button size='sm' className='mx-2' icon='Edit' color='info' />
			<Button size='sm' className='mx-2' icon='Delete' color='info' />
		</>
	);
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Manage Form Builder' />
			<Page container='fluid'>
				<TableWidget
					getTableDataUrl='/contract'
					rowActions={rowActions}
					tableColumns={columns}
					title=''
					customColumnItems={customColumns}
				/>
			</Page>
		</PageWrapper>
	);
};

export default Contract;
