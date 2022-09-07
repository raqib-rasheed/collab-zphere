import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import Button from '../../../../../components/bootstrap/Button';
import Card, { CardBody, CardHeader } from '../../../../../components/bootstrap/Card';
import Input from '../../../../../components/bootstrap/forms/Input';
import Select from '../../../../../components/bootstrap/forms/Select';
import Icon from '../../../../../components/icon/Icon';
import Page from '../../../../../layout/Page/Page';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../../widgets/Table';
import BarBasic from '../../../../documentation/charts/chart-bar/BarBasic';

const InvoiceSummary = () => {
	const [activeButton, setactiveButton] = useState('Summary');
	const customSubHeaderRightActions = () => (
		<Button color='dark' className='mx-1' icon='Download' />
	);
	const columns = [
		{ name: 'INVOICE' },
		{ name: 'DATE' },
		{ name: 'CUSTOMER' },
		{ name: 'CATEGORY' },
		{ name: 'STATUS' },
		{ name: 'PAID AMOUNT' },
		{ name: 'DUE AMOUNT	' },
		{ name: 'PAYMENT DATE' },
		{ name: 'AMOUNT' },
	];

	const CardCustomHeader = useMemo(
		() => (
			<div>
				<Button
					onClick={() => setactiveButton('Summary')}
					className={classNames('text-success', {
						'bg-success text-white': activeButton === 'Summary',
					})}>
					{' '}
					Summary
				</Button>
				<Button
					onClick={() => setactiveButton('Invoices')}
					className={classNames('text-success', {
						'bg-success text-white': activeButton === 'Invoices',
					})}>
					Invoices
				</Button>
			</div>
		),
		[activeButton],
	);

	return (
		<PageWrapper title='project-1'>
			<PresentaionPagesSubHeader
				customSubHeaderRightActions={customSubHeaderRightActions}
				showSubHeaderRight
				showAddNewButton={false}
				title='Find Employee Payslip'
			/>
			<Page container='fluid'>
				<Card className='p-3'>
					<div className='d-flex justify-content-end'>
						<div className='mx-4'>
							<label htmlFor='start month'>Start Month</label>
							<Input name='start month' type='month' />
						</div>
						<div className='mx-4'>
							<label htmlFor='end month'>End Month</label>
							<Input name='end month' type='month' />
						</div>
						<div className='mx-4'>
							<label htmlFor='End date'>Customer</label>
							<Select
								ariaLabel='Select Customer'
								placeholder='Select Customer'
								name='End date'
							/>
						</div>
						<div className='mx-4'>
							<label htmlFor='End date'>Status</label>
							<Select
								ariaLabel='Select Status'
								placeholder='Select Status'
								name='End date'
							/>
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
									<h6>Invoice Summary</h6>
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
				<div className='w-100 d-flex justify-content-between'>
					<Card className='p-4' style={{ width: '31.75%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='CardList' />
								</div>
								<div>
									<h6 className='text-muted'>Total Invoice</h6>
									<h6>47,565.00$</h6>
								</div>
							</div>
						</div>
					</Card>
					<Card className='p-4' style={{ width: '31.75%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='CashCoin' />
								</div>
								<div>
									<h6 className='text-muted'>Total Paid</h6>
									<h6>40,370.00$</h6>
								</div>
							</div>
						</div>
					</Card>
					<Card className='p-4' style={{ width: '31.75%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='ClipboardX' />
								</div>
								<div>
									<h6 className='text-muted'>Total Due</h6>
									<h6>7,195.00$</h6>
								</div>
							</div>
						</div>
					</Card>
				</div>
				{activeButton === 'Summary' ? (
					<Card>
						<CardHeader>{CardCustomHeader}</CardHeader>
						<CardBody>
							<BarBasic customChartHeader={CardCustomHeader} colors={['#46bcaa']} />
						</CardBody>
					</Card>
				) : (
					<div style={{ minHeight: '400px' }}>
						<TableWidget
							customTableActions={CardCustomHeader}
							displayPagintaion={false}
							displaySearch={false}
							data={[{ id: '' }]}
							tableColumns={columns}
						/>
					</div>
				)}
			</Page>
		</PageWrapper>
	);
};

export default InvoiceSummary;
