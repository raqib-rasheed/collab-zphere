import React from 'react';
import { useFormik } from 'formik';
import Button from '../../../../components/bootstrap/Button';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../../../components/bootstrap/OffCanvas';
import Select from '../../../../components/bootstrap/forms/Select';
import { Options } from '../../../../components/bootstrap/Option';

const EditUserForm = (props: any) => {
	// const [addNewModalVisible, setAddNewModalVisible] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: 'test',
			email: 'test@email.com',
			type: '1',
			password: 'vaisakh123',
			dob: '1999-10-23',
		},
		onSubmit: (value: any) => {
			props.setAddNewModalVisible(false);
			// @ts-ignore comment to disable type checking for a line in TypeScript.
			addNewUser.mutate({
				dob: value.dob,
				email: value.email,
				name: value.name,
				password: value.password,
				type: '1',
			});
		},
	});

	return (
		<Modal
			// size='sm'
			titleId='upcomingEdit'
			isOpen={props.addNewModalVisible}
			setIsOpen={props.setAddNewModalVisible}>
			<ModalHeader setIsOpen={props.setAddNewModalVisible}>
				<OffCanvasTitle id='upcomingEdit'>Create new user</OffCanvasTitle>
			</ModalHeader>
			<form onSubmit={formik.handleSubmit}>
				<ModalBody>
					<div>
						<FormGroup isFloating>
							<div className='row '>
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

							<div className='row'>
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
								<div className='col-6'>
									<Input
										placeholder='Password'
										name='password'
										value={formik.values.password}
										onChange={formik.handleChange}
									/>
								</div>
							</div>
							<div className='row'>
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

export default EditUserForm;
