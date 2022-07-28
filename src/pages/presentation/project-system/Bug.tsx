import React, { useState } from 'react';
import Button from '../../../components/bootstrap/Button';
import Icon from '../../../components/icon/Icon';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';
import TableGridView from '../../../widgets/TableGridView';

enum EProjectSystemTasksView {
	LIST = 'list',
	GRID = 'grid',
}

const Bug = () => {
	const [view, handleView] = useState<EProjectSystemTasksView>(EProjectSystemTasksView.LIST);
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

	const SubHeaderActions = () => (
		<>
			<Button color='dark'>Status</Button>
			<Button
				onClick={() =>
					handleView((prevState) =>
						prevState === EProjectSystemTasksView.LIST
							? EProjectSystemTasksView.GRID
							: EProjectSystemTasksView.LIST,
					)
				}
				color='dark'
				icon={view === EProjectSystemTasksView.LIST ? 'Grid1X2Fill' : 'CardList'}></Button>
		</>
	);
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader
				showSubHeaderRight
				customSubHeaderRightActions={SubHeaderActions}
				title='Find Employee Payslip'
			/>

			<Page container='fluid'>
				{view === EProjectSystemTasksView?.LIST ? (
					<TableWidget data={generateDummyData(8)} tableColumns={columns} />
				) : (
					<TableGridView data={generateDummyData(8)} />
				)}
			</Page>
		</PageWrapper>
	);
};

export default Bug;
