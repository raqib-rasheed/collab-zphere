import React from 'react';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';

const ProductAndServices = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Bicycle Accessories',
			Name: 'BC008ACC',
			id: '-5',
			actions: (
				<>
					<Button className='mx-2' icon='plus' color='info' />
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
		{ name: 'NAME' },
		{ name: 'SKU' },
		{ name: 'CURRENT QUANTITY' },
		{ name: 'ACTION' },
	];

	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader
				showSubHeaderRight
				showAddNewButton={false}
				title='Find Employee Payslip'
			/>
			<Page container='fluid'>
				<TableWidget data={generateDummyData(8)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default ProductAndServices;
