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
			Name: ' Richard Atkinson',
			EMAIL: 'Medical Leave',
			BRANCH: 'Jul 21, 2021',
			asas: 'Jul 21, 2021',
			asasas: 'Jul 11, 2021',
			id: '1',
			idasas: 'Emergency medical procedure',
			employeeid: (
				<Button color='success' isOutline>
					Approved
				</Button>
			),
			actions: (
				<div>
					<Icon size='lg' className='mx-1' icon='Play' color='info' />
					<Icon size='lg' className='mx-1' icon='Edit' color='success' />
					<Icon size='lg' className='mx-1' icon='Trash' color='danger' />
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

	const columns = [
		{ name: 'EMPLOYEE' },
		{ name: 'LEAVE TYPE' },
		{ name: 'APPLIED ON' },
		{ name: 'START DATE' },
		{ name: 'END DATE' },
		{ name: 'TOTAL DAYS' },
		{ name: 'LEAVE REASON' },
		{ name: 'STATUS' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Manage Leave' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(8)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default SetSalary;
