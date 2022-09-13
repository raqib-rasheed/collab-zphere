import React, { useMemo } from 'react';
import Card from '../../../../../components/bootstrap/Card';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../../../components/icon/Icon';
import Select from '../../../../../components/bootstrap/forms/Select';
import TableWidget from '../../../../../widgets/Table';
import PresentaionPagesSubHeader from '../../../../../widgets/PresentaionPagesSubHeader';
import Page from '../../../../../layout/Page/Page';

const Payroll = () => {
	const tablecolumns = useMemo(() => {
		return [
			{ name: 'EMPLOYEE' },
			{ name: 'DATE' },
			{ name: 'STATUS' },
			{ name: 'CLOCK IN' },
			{ name: 'CLOCK OUT' },
			{ name: 'LATE' },
			{ name: 'EARLY LEAVING' },
			{ name: 'OVERTIME' },
			{ name: 'ACTION' },
		];
	}, []);

	return (
		<PageWrapper title=''>
			<Page container='fluid'>
				<PresentaionPagesSubHeader title='Manage Attendance List' />
				<Card className='p-4 my-4'>
					<form
						method='GET'
						action='https://demo.rajodiya.com/erpgo-saas/reports-payroll'
						acceptCharset='UTF-8'
						id='report_payroll'>
						<div className='row align-items-center justify-content-end'>
							<div className='col-xl-10'>
								<div className='row'>
									<div className='col-3 mt-2'>
										{/* eslint-disable-next-line jsx-a11y/label-has-associated-control  */}
										<label className='form-label'>Type</label> <br />
										<div className='form-check form-check-inline form-group'>
											<input
												type='radio'
												id='monthly'
												value='monthly'
												name='type'
												className='form-check-input'
												checked
											/>
											<label className='form-check-label' htmlFor='monthly'>
												Monthly
											</label>
										</div>
										<div className='form-check form-check-inline form-group'>
											<input
												type='radio'
												id='daily'
												value='daily'
												name='type'
												className='form-check-input'
											/>
											<label className='form-check-label' htmlFor='daily'>
												Daily
											</label>
										</div>
									</div>

									<div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 month d-block'>
										<div className='btn-box'>
											<label htmlFor='month' className='form-label'>
												Month
											</label>
											<input
												className='month-btn form-control'
												name='month'
												type='month'
												value='2022-07'
												id='month'
											/>
										</div>
									</div>
									<div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 year d-none'>
										<div className='btn-box'>
											<label htmlFor='year' className='form-label'>
												Year
											</label>
											<Select
												size='sm'
												ariaLabel='Per'
												onChange={(e: {
													target: { value: string };
												}) => {}}></Select>
										</div>
									</div>
									<div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'>
										<div className='btn-box'>
											<label htmlFor='branch' className='form-label'>
												Branch
											</label>
											<Select
												size='sm'
												ariaLabel='Per'
												onChange={(e: {
													target: { value: string };
												}) => {}}></Select>
										</div>
									</div>
									<div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'>
										<div className='btn-box'>
											<label htmlFor='department' className='form-label'>
												Department
											</label>
											<Select
												size='sm'
												ariaLabel='Per'
												onChange={(e: {
													target: { value: string };
												}) => {}}></Select>
										</div>
									</div>
								</div>
							</div>
							<div className='col-auto mt-4'>
								<div className='row'>
									<div className='col-auto'>
										<a
											href='https://asasf/afasf/a'
											className='btn btn-sm mx-1 btn-primary'
											onClick={() => {}}
											data-bs-toggle='tooltip'
											title=''
											data-original-title='apply'
											data-bs-original-title='Apply'>
											<span className='btn-inner--icon'>
												<Icon icon='Search' />
											</span>
										</a>

										<a
											href='https://demo.rajodiya.com/erpgo-saas/reports-payroll'
											className='btn btn-sm mx-1 btn-danger '
											data-bs-toggle='tooltip'
											title=''
											data-original-title='Reset'
											data-bs-original-title='Reset'>
											<span className='btn-inner--icon'>
												<Icon icon='TrashFill' />
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</form>
				</Card>
			</Page>
			<TableWidget tableColumns={tablecolumns} data={[{ id: 'dummy data' }]} />
		</PageWrapper>
	);
};

export default Payroll;
