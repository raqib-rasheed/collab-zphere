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
		{ key: 'project', name: 'PROJECT' },
		{ key: 'type', name: 'CONTRACT TYPE' },
		{ key: 'value', name: 'CONTRACT VALUE' },
		{ key: 'start_date', name: 'START DATE' },
		{ key: 'end_date', name: 'END DATE' },
		{ name: 'ACTION' },
	];
	const rowActions = () => (
		<>
			<Button size='sm' className='mx-2' icon='FileCopy' color='info' />
			<Button size='sm' className='mx-2' icon='Eye' color='info' />
			<Button size='sm' className='mx-2' icon='Edit' color='info' />
			<Button size='sm' className='mx-2' icon='Delete' color='info' />
		</>
	);
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Manage Contract' />
			<Page container='fluid'>
				<TableWidget
					getTableDataUrl='/contract'
					rowActions={rowActions}
					tableColumns={columns}
					title=''
				/>
			</Page>
		</PageWrapper>
	);
};

export default Contract;
