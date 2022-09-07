import React from 'react';
import Button from '../../../components/bootstrap/Button';
import Select from '../../../components/bootstrap/forms/Select';
import Option from '../../../components/bootstrap/Option';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../widgets/Table';

const ProductAndServices = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Bicycle Accessories',
			Name: 'BC008ACC',
			EMAIL: '9,000.00$',
			BRANCH: '6,000.00$',
			id: 'CGST',
			asid: 'Accessories',
			asasid: 'Mass',
			asaasid: '-5',
			aad: 'Service',
			actions: (
				<>
					<Button className='mx-2' icon='edit' color='info' />
					<Button className='mx-2' icon='trash' color='danger' />
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
		{ name: 'SALE PRICE' },
		{ name: 'PURCHASE PRICE' },
		{ name: 'TAX' },
		{ name: 'CATEGORY' },
		{ name: 'UNIT' },
		{ name: 'QUANTITY' },
		{ name: 'TYPE' },
		{ name: 'ACTION' },
	];
	const customSubHeaderRightActions = () => (
		<>
			<Select placeholder='Please select...' onChange={() => {}} ariaLabel='Employee select'>
				<Option key='Select Category' value='Select Category'>
					Select Category
				</Option>
				<Option key='Accessories' value='Accessories'>
					Accessories
				</Option>
				<Option key='Clothing' value='Clothing'>
					Clothing
				</Option>
				<Option key='Parts' value='Parts'>
					Parts
				</Option>
			</Select>
			<Button className='p-2' icon='search' color='success' />
			<Button className='p-2' icon='trash' color='danger' />
		</>
	);
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader
				showSubHeaderRight
				showAddNewButton
				customSubHeaderRightActions={customSubHeaderRightActions}
				title='Find Employee Payslip'
			/>
			<Page container='fluid'>
				<TableWidget data={generateDummyData(8)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default ProductAndServices;
