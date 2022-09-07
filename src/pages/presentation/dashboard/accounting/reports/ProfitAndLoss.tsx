import React from 'react';
import Button from '../../../../../components/bootstrap/Button';
import Card from '../../../../../components/bootstrap/Card';
import Input from '../../../../../components/bootstrap/forms/Input';
import Icon from '../../../../../components/icon/Icon';
import Page from '../../../../../layout/Page/Page';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../../widgets/PresentaionPagesSubHeader';
import CommonTableRow from '../../../../common/CommonTableRow';

const EmployeeAssetSetup = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			id: '01 Jul 2022',
			Name: 'Bicycle Clothing',
			Naasame: '1',
			Namase: 'Invoice',
			asName: '1 quantity sold in invoice #INVO00038',
		};

		const data = [];
		while (count > 0) {
			data?.push(dummyData);
			count--;
		}
		return data;
	}

	const columns = [
		{ name: 'DATE' },
		{ name: 'PRODUCT NAME' },
		{ name: 'QUANTITY' },
		{ name: 'TYPE' },
		{ name: 'DESCRIPTION' },
	];
	const customSubHeaderRightActions = () => (
		<Button color='dark' className='mx-1' icon='Download' />
	);
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader
				showSubHeaderRight
				showAddNewButton={false}
				customSubHeaderRightActions={customSubHeaderRightActions}
				title='Manage Form Builder'
			/>
			<Page container='fluid'>
				<Card className='p-3'>
					<div className='d-flex justify-content-end'>
						<div className='mx-4'>
							<label htmlFor='start month'>Start Month</label>
							<Input name='start month' type='month' />
						</div>
						<div>
							<Button className='mx-1 my-4' color='success' icon='search' />
							<Button className='mx-1 my-4' color='danger' icon='Trash' />
						</div>
					</div>
				</Card>
				<div className='w-100 d-flex justify-content-between'>
					<Card className='p-4' style={{ width: '48.75%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='ClipboardX' />
								</div>
								<div>
									<h6 className='text-muted'>Report :</h6>
									<h6>Profit && Loss Summary</h6>
								</div>
							</div>
						</div>
					</Card>
					<Card className='p-4' style={{ width: '48.75%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='Clock' />
								</div>
								<div>
									<h6 className='text-muted'>Duration :</h6>
									<h6>Jan-2022 to Dec-2022</h6>
								</div>
							</div>
						</div>
					</Card>
				</div>
				<Card className='p-4'>
					<h4 className='py-2'>Income</h4>
					<table className='table table-modern table-hover'>
						<thead>
							<tr className='table-body-row'>
								{columns?.map((i) => (
									<th scope='col' key={i.name}>
										{i.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{generateDummyData(10)?.map((i) => (
								<CommonTableRow
									key={i.id}
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...i}
									data={i}
									selectName='selectedList'
									// selectOnChange={selectTable.handleChange}
									// selectChecked={selectTable.values.selectedList.includes(
									// 	i.id.toString() as never,
									// )}
								/>
							))}
						</tbody>
					</table>
					<h4 className='py-2'>Expense</h4>
					<table className='table table-modern table-hover'>
						<thead>
							<tr className='table-body-row'>
								{columns?.map((i) => (
									<th scope='col' key={i.name}>
										{i.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{generateDummyData(10)?.map((i) => (
								<CommonTableRow
									key={i.id}
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...i}
									data={i}
									selectName='selectedList'
									// selectOnChange={selectTable.handleChange}
									// selectChecked={selectTable.values.selectedList.includes(
									// 	i.id.toString() as never,
									// )}
								/>
							))}
						</tbody>
					</table>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default EmployeeAssetSetup;
