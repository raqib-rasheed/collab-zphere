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
import TasksOverview from '../../../../../widgets/TasksOverview';

const ProjectDetails = () => {
	const customSubHeaderRightActions = () => (
		<Button color='dark' className='mx-1' icon='Download' />
	);
	const columns = [
		{ name: 'TYPE' },
		{ name: 'JANUARY' },
		{ name: 'FEBRUARY' },
		{ name: 'MARCH' },
		{ name: 'APRIL' },
		{ name: 'MAY' },
		{ name: 'JUNE' },
		{ name: 'JULY' },
		{ name: 'AUGUST' },
		{ name: 'SEPTEMBER' },
		{ name: 'OCTOBER' },
		{ name: 'NOVEMBER' },
		{ name: 'DECEMBER' },
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
							<label htmlFor='start date'>Year</label>
							<Input name='start date' type='date' />
						</div>
						<div className='mx-4'>
							<label htmlFor='End date'>Category</label>
							<Select
								ariaLabel='Select Category'
								placeholder='Select Category'
								name='End date'
							/>
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
							<label htmlFor='End date'>Vendor</label>
							<Select placeholder='Select Vendor' ariaLabel='' name='End date'>
								<option></option>
							</Select>
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
									<h6>Income Vs Expense Summary</h6>
								</div>
							</div>
							<div className=''>
								<h6>6</h6>
								<h6 className='text-muted'>Done Task</h6>
							</div>
						</div>{' '}
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
							<div className=''>
								<h6>6</h6>
								<h6 className='text-muted'>Done Task</h6>
							</div>
						</div>{' '}
					</Card>
				</div>
				<TasksOverview colors={['#fea41e', '#efa26d']} />
				<TableWidget
					displayPagintaion={false}
					displaySearch={false}
					data={[{ id: '' } as any]}
					tableColumns={columns}
					title=''
				/>
			</Page>
		</PageWrapper>
	);
};

export default ProjectDetails;
