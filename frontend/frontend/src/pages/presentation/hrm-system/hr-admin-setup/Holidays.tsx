import React from 'react';
import Card from '../../../../components/bootstrap/Card';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const Holidays = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'From Company',
			Name: ' Feb 10, 2021',
			id: 'Jan 1, 1970',
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
		{ name: 'OCASSION' },
		{ name: 'START DATE' },
		{ name: 'END DATE' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Find Employee Payslip' />
			<Card className='py-4 px-2'>
				<div className='d-flex justify-content-end align-items-center'>
					<div className='btn-box mx-1'>
						<label htmlFor='month' className='form-label'>
							Select Date
						</label>
						<input
							className='month-btn form-control'
							name='month'
							type='month'
							value='2022-07'
							id='month'
						/>
					</div>
					<div className='btn-box mx-1'>
						<label htmlFor='month' className='form-label'>
							End Date
						</label>
						<input
							className='month-btn form-control'
							name='month'
							type='month'
							value='2022-07'
							id='month'
						/>
					</div>
					<div style={{ margin: '0 1rem', marginTop: '1.5rem' }}>
						<Icon size='lg' className='mx-1' icon='search' />
						<Icon size='lg' className='mx-1' icon='trash' />
					</div>
				</div>
			</Card>
			<Page container='fluid'>
				<TableWidget data={generateDummyData(8)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default Holidays;
