import React from 'react';
import Button from '../../../../components/bootstrap/Button';
import Card from '../../../../components/bootstrap/Card';
// import Input from '../../../../components/bootstrap/forms/Input';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const SetSalary = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: (
				<Button color='success' isOutline>
					#6t3723t
				</Button>
			),
			Name: ' DemoTese',
			EMAIL: 'Hourly Payslip',
			BRANCH: '$100,000.00',
			id: '$113,410.00',
			actions: <Icon size='lg' className='mx-2' icon='Eye' color='info' />,
		};

		const data = [];
		while (count > 0) {
			data?.push(dummyData);
			count--;
		}
		return data;
	}

	const columns = [
		{ name: 'EMPLOYEE ID' },
		{ name: 'NAME' },
		{ name: 'PAYROLL TYPE' },
		{ name: 'SALARY' },
		{ name: 'NET SALARY' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Find Employee Payslip' />
			<Card className='py-4 px-2'>
				<div className='d-flex justify-content-end align-items-center'>
					<div className='btn-box mx-1'>
						<label htmlFor='month' className='form-label'>
							Select Month
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
							Select Year
						</label>
						<input
							className='month-btn form-control'
							name='month'
							type='month'
							value='2022-07'
							id='month'
						/>
					</div>
					<div>
						<Button className='mt-4' color='success'>
							Generate Payslip
						</Button>
					</div>
				</div>
			</Card>
			<Page container='fluid'>
				<TableWidget data={generateDummyData(8)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default SetSalary;
