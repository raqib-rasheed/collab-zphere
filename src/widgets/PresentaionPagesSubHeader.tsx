import React, { useState } from 'react';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../layout/SubHeader/SubHeader';
import Button from '../components/bootstrap/Button';
import Breadcrumb from '../components/bootstrap/Breadcrumb';
import { TABS } from '../pages/presentation/dashboard/common/helper';
import useSubHeaderBreadCrumpList from '../hooks/useSubHeaderBreadCrumpList';
import { useFormik } from 'formik';
import showNotification from '../components/extras/showNotification';
import Icon from '../components/icon/Icon';

const PresentaionPagesSubHeader = () => {
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
	return (
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
	);
};

export default PresentaionPagesSubHeader;
