import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../layout/SubHeader/SubHeader';
import Button from '../components/bootstrap/Button';
import Breadcrumb from '../components/bootstrap/Breadcrumb';
import useSubHeaderBreadCrumpList from '../hooks/useSubHeaderBreadCrumpList';
import { useFormik } from 'formik';
import showNotification from '../components/extras/showNotification';
import Icon from '../components/icon/Icon';
import classNames from 'classnames';

interface IPresentaionPagesSubHeaderProps {
	showSubHeaderRight?: boolean;
	title?: string;
	customSubHeaderRightActions?: any;
}

const PresentaionPagesSubHeader = ({
	showSubHeaderRight,
	title,
	customSubHeaderRightActions,
}: IPresentaionPagesSubHeaderProps) => {
	const breadcrumbLists = useSubHeaderBreadCrumpList();
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
			<SubHeaderLeft
				className={classNames({ 'd-flex flex-column align-items-start': title }, 'p-3')}>
				{title && <h4>{title}</h4>}
				<Breadcrumb list={breadcrumbLists} />
			</SubHeaderLeft>
			{showSubHeaderRight && (
				<SubHeaderRight>
					{customSubHeaderRightActions ?? (
						<Button
							color='dark'
							isLight
							icon='Add'
							onClick={() => {
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
					)}
				</SubHeaderRight>
			)}
		</SubHeader>
	);
};

export default PresentaionPagesSubHeader;
