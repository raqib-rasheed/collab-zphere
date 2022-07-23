import React from 'react';
import Button from '../../../../components/bootstrap/Button';
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
			<PresentaionPagesSubHeader title='Manage Employee Salary' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(8)} tableColumns={columns} title='' />
			</Page>
		</PageWrapper>
	);
};

export default SetSalary;
