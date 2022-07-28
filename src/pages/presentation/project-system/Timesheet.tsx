import React from 'react';
import Button from '../../../components/bootstrap/Button';
import Input from '../../../components/bootstrap/forms/Input';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import Table from '../../../widgets/Table';

const Timesheet = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			id: 'Newsletter Templates',
			Name: <Button color='light'>-</Button>,
			EMAIL: <Button color='light'>-</Button>,
			BRANCH: <Button color='light'>-</Button>,
			aid: <Button color='light'>-</Button>,
			actions: <Button color='light'>-</Button>,
			actionas: <Button color='light'>-</Button>,
			aactionas: <Button color='light'>-</Button>,
			actioans: <Button color='light'>00:00</Button>,
		};

		const data = [];
		while (count > 0) {
			data?.push(dummyData);
			count--;
		}
		return data;
	}

	const columns = [
		{ name: ' ' },
		{ name: 'MON 15 AUG' },
		{ name: 'MON 16 AUG' },
		{ name: 'MON 17 AUG' },
		{ name: 'MON 18 AUG' },
		{ name: 'MON 19 AUG' },
		{ name: 'MON 20 AUG' },
		{ name: 'MON 21 AUG' },
		{ name: 'MON 22 AUG' },
	];
	const customTableActions = (
		<>
			<div className='d-flex'>
				<div className='mx-2'>
					<label htmlFor='start date'>Start Date</label>
					<Input name='start date' type='date' />
				</div>
				<div>
					<label htmlFor='End date'>End Date</label>
					<Input name='End date' type='date' />
				</div>
			</div>
			<div>
				<h5>TIME LOGGED : 00:00 HOURS</h5>
			</div>
		</>
	);

	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Timesheet List' />
			<Page container='fluid'>
				<Table
					customTableActions={customTableActions}
					displaySearch={false}
					data={generateDummyData(8)}
					tableColumns={columns}
				/>
			</Page>
		</PageWrapper>
	);
};

export default Timesheet;
