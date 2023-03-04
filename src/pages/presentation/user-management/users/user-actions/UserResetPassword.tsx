import React from 'react';
import { useFormik } from 'formik';
import Button from '../../../../../components/bootstrap/Button';
import FormGroup from '../../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../../components/bootstrap/forms/Input';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
} from '../../../../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../../../../components/bootstrap/OffCanvas';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Alert from '../../../../../components/bootstrap/Alert';
import Spinner from '../../../../../components/bootstrap/Spinner';

interface IResetPassword {
	userId: string;
	userPassword: string;
	resetPasswordModalVisible: boolean;
	setResetPasswordModalVisible: any;
}

const UserResetPassword = (props: IResetPassword) => {
	const userPasswordUpdate = useMutation(
		(updatedUser) => {
			return axios.post('/User-password-update', updatedUser);
		},
		{
			onSuccess: () => {
				<Alert
					className=''
					color='success'
					icon='CheckCircleOutline'
					isDismissible
					isLight
					shadow='md'>
					A simple alert—check it out!
				</Alert>;
				props.setResetPasswordModalVisible(false);
			},
			onError: () => {
				<Alert
					className=''
					color='danger'
					icon='InfoOutline'
					isDismissible
					isLight
					shadow='md'>
					Something went wrong!
				</Alert>;
			},
		},
	);

	const formik = useFormik({
		initialValues: {
			oldPassword: '',
			newPassword: '',
		},
		onSubmit: (value: any) => {
			// @ts-ignore comment to disable type checking for a line in TypeScript.
			userPasswordUpdate.mutate({
				id: props.userId,
				oldPassword: value.oldPassword,
				newPassword: value.newPassword,
			});
		},
	});

	return (
		<Modal
			titleId='upcomingEdit'
			isOpen={props.resetPasswordModalVisible}
			setIsOpen={() => props.setResetPasswordModalVisible(true)}>
			<ModalHeader setIsOpen={() => props.setResetPasswordModalVisible(false)}>
				<OffCanvasTitle id='upcomingEdit'>Update User Passoerd</OffCanvasTitle>
			</ModalHeader>
			<form onSubmit={formik.handleSubmit}>
				<ModalBody>
					<div>
						<FormGroup isFloating>
							<div className='row my-3'>
								<div className='col-6'>
									<Input
										required
										placeholder='Old Password'
										name='oldPassword'
										value={formik.values.oldPassword}
										onChange={formik.handleChange}
									/>
								</div>
								<div className='col-6'>
									<Input
										required
										placeholder='New Password'
										name='newPassword'
										value={formik.values.newPassword}
										onChange={formik.handleChange}
									/>
								</div>
							</div>
						</FormGroup>
					</div>
				</ModalBody>
				<ModalFooter className='bg-transparent'>
					<Button color='info' className='w-100' type='submit'>
						{userPasswordUpdate.isLoading && (
							<Spinner color='primary' inButton isSmall />
						)}
						Save
					</Button>
				</ModalFooter>
			</form>
		</Modal>
	);
};

export default UserResetPassword;
