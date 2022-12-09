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
import Select from '../../../../../components/bootstrap/forms/Select';
import { Options } from '../../../../../components/bootstrap/Option';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import moment from 'moment';
import Alert from '../../../../../components/bootstrap/Alert';

const CreateOrEditClientForm = (props: any) => {
	const addNewUser = useMutation(
		(newUser) => {
			return axios.post('/User-store', newUser);
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

	const updateExistUser = useMutation(
		(updatedUser) => {
			return axios.post('/User-edit', updatedUser);
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
			name: props?.initialValues?.name ?? '',
			email: props?.initialValues?.email ?? '',
			type: props?.initialValues?.type ?? '',
			dob: moment(props?.initialValues?.dob).format('YYYY-MM-DD') ?? '',
			password: '',
		},
		onSubmit: (value: any) => {
			// props.setAddNewModalVisible(false);
			if (props?.initialFormValue?.id) {
				// @ts-ignore comment to disable type checking for a line in TypeScript.
				updateExistUser.mutate({
					id: props?.initialValues?.id,
					name: value.name,
					email: value.email,
					dob: value.dob,
					type: '1',
				});
			} else {
				// @ts-ignore comment to disable type checking for a line in TypeScript.
				addNewUser.mutate({
					dob: value.dob,
					email: value.email,
					name: value.name,
					password: value.password,
					type: '1',
				});
			}
		},
	});

	return (
		<Modal
			titleId='upcomingEdit'
			isOpen={props.addNewModalVisible}
			setIsOpen={() => props.setAddNewModalVisible(true)}>
			<ModalHeader setIsOpen={() => props.setAddNewModalVisible(false)}>
				<OffCanvasTitle id='upcomingEdit'>Create new user</OffCanvasTitle>
			</ModalHeader>
			<form onSubmit={formik.handleSubmit}>
				<ModalBody>
					<div>
						<FormGroup isFloating>
							<div className='row my-3'>
								<div className='col-6'>
									<Input
										placeholder='Name'
										name='name'
										value={formik.values.name}
										onChange={formik.handleChange}
									/>
								</div>
								<div className='col-6'>
									<Input
										placeholder='Email'
										name='email'
										value={formik.values.email}
										onChange={formik.handleChange}
									/>
								</div>
							</div>

							<div className='row my-3'>
								<div className='col-6'>
									<Select
										id={'role'}
										name={'type'}
										placeholder={'Role'}
										value={formik.values.type}
										onChange={formik.handleChange}
										ariaLabel={'role'}>
										<Options
											list={[
												{ value: 1, text: 'Accountant' },
												{ value: 2, text: 'HR' },
												{ value: 3, text: 'Employee' },
											]}
										/>
									</Select>
								</div>
								{!props?.initialValues?.id && (
									<div className='col-6'>
										<Input
											placeholder='Password'
											name='password'
											value={formik.values.password}
											onChange={formik.handleChange}
										/>
									</div>
								)}
							</div>
							<div className='row my-3'>
								<div className='col-12'>
									<Input
										placeholder='dob'
										name='dob'
										value={formik.values.dob}
										onChange={formik.handleChange}
									/>
								</div>
							</div>
						</FormGroup>
					</div>
				</ModalBody>
				<ModalFooter className='bg-transparent'>
					<Button color='info' className='w-100' type='submit'>
						Save
					</Button>
				</ModalFooter>
			</form>
		</Modal>
	);
};

export default CreateOrEditClientForm;
