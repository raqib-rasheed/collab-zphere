import React from 'react';
import Badge from '../../../components/bootstrap/Badge';
// import Input from '../../../components/bootstrap/forms/Input';
import Icon from '../../../components/icon/Icon';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';

const SetSalary = () => {
	function generateDummyData(count: number) {
		function getRoles() {
			let i = 185;
			const roles = ['role 186'];
			while (i >= 0) {
				roles.push(`role${i}`);
				i--;
			}
			return roles?.map((item, index) => {
				return (
					<Badge className='py-1 px-3 mx-1' color='success' key={index}>
						{item}
					</Badge>
				);
			});
		}
		const dummyData = {
			id: 'DemoTese',
			EMAIL: getRoles(),
			actions: (
				<div className='d-flex'>
					<Icon size='lg' className='mx-2' icon='edit' color='info' />
					<Icon size='lg' className='mx-2' icon='trash' color='info' />
				</div>
			),
		};

		const data = [];
		while (count > 0) {
			data?.push(dummyData);
			count--;
		}
		return data;
	}

	const columns = [{ name: 'ROLE' }, { name: 'PERMISSIONS' }, { name: 'ACTION' }];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Find Employee Payslip' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(8)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default SetSalary;
