import React from 'react';
import { useFormik } from 'formik';
import Card from '../../../../components/bootstrap/Card';
import Input from '../../../../components/bootstrap/forms/Input';
import Select from '../../../../components/bootstrap/forms/Select';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Page from '../../../../layout/Page/Page';

import showNotification from '../../../../components/extras/showNotification';
import Icon from '../../../../components/icon/Icon';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';

const EditWizardPage = () => {
	const formik = useFormik({
		initialValues: {
			firstName: 'John',
			lastName: 'Doe',
			displayName: 'johndoe',
			emailAddress: 'johndoe@site.com',
			phoneNumber: '',
			addressLine: '',
			addressLine2: '',
			city: '',
			state: '',
			zip: '',
			emailNotification: ['2'],
			pushNotification: ['1', '2', '3'],
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

	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Create Job' />
			<Page container='fluid'>
				<div className='d-flex'>
					<div className='w-50 mx-3'>
						<Card className='p-4'>
							<div>
								<label htmlFor='job title'>Job Title</label>
								<Input id='job title' />
							</div>
							<div className='d-flex justify-content-between my-3'>
								<div style={{ width: '48%' }}>
									<label htmlFor='job title'>Branch</label>
									<Select
										id='branch'
										ariaLabel='Board select'
										placeholder='All'
										onChange={formik.handleChange}
										// value={formik.values.groupId}
									>
										{/* {data.map((group) => (
										<Option key={group.id} value={group.id}>
										{group.title}
										</Option>
									))} */}
									</Select>
								</div>
								<div style={{ width: '48%' }}>
									<label htmlFor='job title'>Job Category</label>
									<Select
										id='branch'
										ariaLabel='Board select'
										placeholder='--'
										onChange={formik.handleChange}
										// value={formik.values.groupId}
									>
										{/* {data.map((group) => (
										<Option key={group.id} value={group.id}>
										{group.title}
										</Option>
									))} */}
									</Select>
								</div>
							</div>
							<div className='d-flex justify-content-between my-3'>
								<div style={{ width: '48%' }}>
									<label htmlFor='job title'>Positions</label>
									<Select
										id='branch'
										ariaLabel='Board select'
										placeholder='Select group'
										onChange={formik.handleChange}
										// value={formik.values.groupId}
									>
										{/* {data.map((group) => (
										<Option key={group.id} value={group.id}>
										{group.title}
										</Option>
									))} */}
									</Select>
								</div>
								<div style={{ width: '48%' }}>
									<label htmlFor='job title'>Status</label>
									<Select
										id='branch'
										ariaLabel='Board select'
										placeholder='Select group'
										onChange={formik.handleChange}
										// value={formik.values.groupId}
									>
										{/* {data.map((group) => (
										<Option key={group.id} value={group.id}>
										{group.title}
										</Option>
									))} */}
									</Select>
								</div>
							</div>
							<div className='d-flex justify-content-between my-3'>
								<div style={{ width: '48%' }}>
									<label htmlFor='job title'>Start Date</label>
									<Input type='date' />
								</div>
								<div style={{ width: '48%' }}>
									<label htmlFor='job title'>End Date</label>
									<Input type='date' />
								</div>
							</div>
							<div>
								<label htmlFor='job title'>Job Title</label>
								<Input placeholder='Skill' id='job title' />
							</div>
						</Card>
					</div>
					<div className='w-50 mx-3'>
						<Card className='p-4'>Duration :</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EditWizardPage;
