import React from 'react';
import Button from '../../../../../components/bootstrap/Button';
import Card from '../../../../../components/bootstrap/Card';
import Input from '../../../../../components/bootstrap/forms/Input';
import Select from '../../../../../components/bootstrap/forms/Select';
import Icon from '../../../../../components/icon/Icon';
import Page from '../../../../../layout/Page/Page';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../../widgets/Table';

const ProjectDetails = () => {
	const customSubHeaderRightActions = () => (
		<Button color='dark' className='mx-1' icon='Download' />
	);
	const columns = [
		{ name: 'DATE' },
		{ name: 'ACCOUNT' },
		{ name: 'TYPE' },
		{ name: 'CATEGORY' },
		{ name: 'DESCRIPTION' },
		{ name: 'AMOUNT' },
	];
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
							<label htmlFor='start date'>Start Month</label>
							<Input name='start date' type='date' />
						</div>
						<div className='mx-4'>
							<label htmlFor='start date'>End Month</label>
							<Input name='start date' type='date' />
						</div>
						<div className='mx-4'>
							<label htmlFor='End date'>Account</label>
							<Select
								ariaLabel='Select Category'
								placeholder='Select Category'
								name='End date'
							/>
						</div>
						<div className='mx-4'>
							<label htmlFor='End date'>Category</label>
							<Select
								ariaLabel='Select Category'
								placeholder='Select Category'
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
									<Icon size='2x' icon='CardList' />
								</div>
								<div>
									<h6 className='text-muted'>Report :</h6>
									<h6>Transaction Summary</h6>
								</div>
							</div>
						</div>
					</Card>
					<Card className='p-4' style={{ width: '48.75%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='CashCoin' />
								</div>
								<div>
									<h6 className='text-muted'>Duration :</h6>
									<h6>Aug-2022 to Mar-2022</h6>
								</div>
							</div>
						</div>{' '}
					</Card>
				</div>
				<div className='w-100 d-flex justify-content-between'>
					<Card className='p-4' style={{ width: '23.75%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='Cash' />
								</div>
								<div>
									<h6>Stripe / Paypal</h6>
									<h6 className='text-muted'>1,250.00$</h6>
								</div>
							</div>
						</div>
					</Card>
					<Card className='p-4' style={{ width: '23.75%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='CashCoin' />
								</div>
								<div>
									<h6>Stripe / Paypal</h6>
									<h6 className='text-muted'>1,250.00$</h6>
								</div>
							</div>
						</div>{' '}
					</Card>
					<Card className='p-4' style={{ width: '23.75%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='ClipboardX' />
								</div>
								<div>
									<h6>cash -</h6>
									<h6 className='text-muted'>66,310.00$</h6>
								</div>
							</div>
						</div>{' '}
					</Card>
					<Card className='p-4' style={{ width: '23.75%' }}>
						<div className='d-flex justify-content-between'>
							<div className='d-flex'>
								<div className='mx-4'>
									<Icon size='2x' icon='Cash' />
								</div>
								<div>
									<h6>Benjamin Adams - ROUNDBANK</h6>
									<h6 className='text-muted'>367,546.00$</h6>
								</div>
							</div>
						</div>
					</Card>
				</div>
				<Card className='p-4' style={{ width: '23.75%' }}>
					<div className='d-flex justify-content-between'>
						<div className='d-flex'>
							<div className='mx-4'>
								<Icon size='2x' icon='Cash' />
							</div>
							<div>
								<h6>Chisom Latifat - COBIZ BANK</h6>
								<h6 className='text-muted'>30,152.00$</h6>
							</div>
						</div>
					</div>
				</Card>
				<TableWidget data={[{ id: '' } as any]} tableColumns={columns} title='' />
			</Page>
		</PageWrapper>
	);
};

export default ProjectDetails;
