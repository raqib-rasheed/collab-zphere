import React, { useMemo, useState } from 'react';
import Card from '../../../../../components/bootstrap/Card';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../../../components/icon/Icon';
import Select from '../../../../../components/bootstrap/forms/Select';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../../../components/bootstrap/Breadcrumb';
import Button from '../../../../../components/bootstrap/Button';
import { useFormik } from 'formik';
import showNotification from '../../../../../components/extras/showNotification';
import useSubHeaderBreadCrumpList from '../../../../../hooks/useSubHeaderBreadCrumpList';
import TableWidget from '../../../../../widgets/Table';
import { TABS } from '../../../dashboard/common/helper';

const Payroll = () => {
	const breadcrumbLists = useSubHeaderBreadCrumpList();
	const [activeTab, setActiveTab] = useState(TABS.BUSINESS_SETTING);
	const formik = useFormik({
		initialValues: {
			firstName: 'John',
			lastName: 'Doe',
			displayName: 'johndoe',
			emailAddress: 'johndoe@site.com',
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's account details have been successfully updated.",
			);
		},
	});

	const formikAddress = useFormik({
		initialValues: {
			addressLine: '259 Street',
			addressLine2: '',
			city: 'New York',
			state: 'usa',
			zip: '35535',
		},
		validate: () => {},
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's address have been successfully updated.",
			);
		},
	});

	const tablecolumns = useMemo(() => {
		return [
			{ name: 'EMPLOYEE ID' },
			{ name: 'EMPLOYEE' },
			{ name: 'BRANCH' },
			{ name: 'DEPARTMENT' },
			{ name: 'ATTENDANCE' },
		];
	}, []);

	return (
		<PageWrapper title=''>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb list={breadcrumbLists} />
					<SubheaderSeparator />
					<span className='text-muted'>John Doe</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button
						color='dark'
						isLight
						icon='Add'
						onClick={() => {
							setActiveTab(TABS.BUSINESS_SETTING);
							formik.setValues({
								firstName: '',
								lastName: '',
								displayName: '',
								emailAddress: '',
								currentPassword: '',
								newPassword: '',
								confirmPassword: '',
							});
							formikAddress.setValues({
								addressLine: '',
								addressLine2: '',
								city: '',
								state: '',
								zip: '',
							});
						}}>
						Add New
					</Button>
					{TABS.BUSINESS_SETTING === activeTab && (
						<Button color='info' isOutline icon='Save' onClick={formik.handleSubmit}>
							Save
						</Button>
					)}
				</SubHeaderRight>
			</SubHeader>
			<Card className='p-5'>
				<form
					method='GET'
					action='https://demo.rajodiya.com/erpgo-saas/reports-payroll'
					acceptCharset='UTF-8'
					id='report_payroll'>
					<div className='d-flex align-items-center justify-content-end'>
						<div className='col-xl-10'>
							<div className='row'>
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
			<TableWidget tableColumns={tablecolumns} data={[{ id: 'dummy data' }]} />
		</PageWrapper>
	);
};

export default Payroll;
