import React, { useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Badge from '../../../../components/bootstrap/Badge';
import Button from '../../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import useTourStep from '../../../../hooks/useTourStep';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../../../components/bootstrap/OffCanvas';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
// import _ from 'lodash';
import Select from '../../../../components/bootstrap/forms/Select';
import { Options } from '../../../../components/bootstrap/Option';

// type FormValues = {
// 	name: String;
// 	email: String;
// 	type: String;
// 	password: String;
// 	dob: String;
// };

const User = () => {
	useTourStep(18);
	const [addNewModalVisible, setAddNewModalVisible] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			type: '',
			password: '',
			dob: '',
		},
		onSubmit: (value: any) => {
			// const alterVal = _.omit(value, ['type']);
			console.log(value, 'first');
			setAddNewModalVisible(false);
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

	// api call
	const getTableData = () => axios.get('/User');
	const {
		data: usersResponse,
		error: userErr,
		isLoading: userLoading,
	} = useQuery(['/User'], getTableData);

	// const addNewUser = () => axios.get('/User-store');
	// const {
	// 	data: addNewUserResponse,
	// 	error: addNewUserErr,
	// 	isLoading: addNewUserLoading,
	// } = useMutation(['/User-store'], addNewUser);

	const addNewUser = useMutation((newUser) => {
		return axios.post('/User-store', newUser);
	});

	const addNewUserModal = (
		<Modal
			// size='sm'
			titleId='upcomingEdit'
			isOpen={addNewModalVisible}
			setIsOpen={setAddNewModalVisible}>
			<ModalHeader setIsOpen={setAddNewModalVisible}>
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
									{/* <Input
										placeholder='User role'
										name='type'
										value={formik.values.type}
										onChange={formik.handleChange}
									/> */}
									<Select
										id={'role'}
										name={'type'}
										placeholder={'Role'}
										value={formik.values.type}
										onChange={formik.handleChange}
										ariaLabel={'role'} // onBlur={Function}
										// onFocus={Function}
										// onInput={Function}
										// onInvalid={Function}
										// onSelect={Function}
									>
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

	if (userLoading) {
		return <div>loading...</div>;
	}
	if (userErr) {
		return <div>error...</div>;
	}
	return (
		<PageWrapper title='Users Page'>
			<PresentaionPagesSubHeader
				showSubHeaderRight
				title='Manage User'
				addNewModal={addNewUserModal}
				setAddNewModalVisible={setAddNewModalVisible}
				showAddNewButton={true}
			/>
			<Page container='fluid'>
				<div className='row row-cols-xxl-3 row-cols-lg-3 row-cols-md-2'>
					{usersResponse?.data?.data?.map((user: any) => (
						<div key={user.username} className='col'>
							<Card>
								<CardBody>
									<div className='row g-3'>
										<div className='col d-flex'>
											<div className='flex-shrink-0'>
												<div className='position-relative'>
													<div
														className='ratio ratio-1x1'
														style={{ width: 100 }}>
														<div
															className={classNames(
																`bg-l25-${user.color}`,
																'rounded-2',
																'd-flex align-items-center justify-content-center',
																'overflow-hidden',
																'shadow',
															)}>
															<img
																src={user.profile}
																alt={user.name}
																width={100}
															/>
														</div>
													</div>
													{user.isActive && (
														<span className='position-absolute top-100 start-85 translate-middle badge border border-2 border-light rounded-circle bg-success p-2'>
															<span className='visually-hidden'>
																Online user
															</span>
														</span>
													)}
												</div>
											</div>
											<div className='flex-grow-1 ms-3 d-flex justify-content-between'>
												<div className='w-100'>
													<div className='row'>
														<div className='col'>
															<div className='d-flex align-items-center'>
																<div className='fw-bold fs-5 me-2'>
																	{/* {`${user.name} ${user.surname}`} */}
																	{`${user.name}`}
																</div>
																<small className='border border-success border-2 text-success fw-bold px-2 py-1 rounded-1'>
																	{user.position}
																</small>
															</div>

															<div className='text-muted'>
																@{user.name}
															</div>
														</div>
														<div className='col-auto'>
															<Dropdown direction='start'>
																<DropdownToggle hasIcon={false}>
																	<Button
																		icon='ThreeDotsVertical'
																		color='dark'
																		isLight
																		hoverShadow='sm'
																		data-tour={user.name}
																	/>
																</DropdownToggle>
																<DropdownMenu>
																	<DropdownItem className='p-2'>
																		<div>
																			<Icon
																				size='lg'
																				icon='edit'
																			/>
																			<span>Edit</span>
																		</div>
																	</DropdownItem>
																	<DropdownItem className='p-2'>
																		<div>
																			<Icon
																				size='lg'
																				icon='trash'
																			/>
																			<span>Delete</span>
																		</div>
																	</DropdownItem>
																	<DropdownItem className='p-2'>
																		<div>
																			<Icon
																				size='lg'
																				icon='settings'
																			/>
																			<span>
																				Reset Password
																			</span>
																		</div>
																	</DropdownItem>
																</DropdownMenu>
															</Dropdown>
														</div>
													</div>
													{!!user?.services && (
														<div className='row g-2 mt-3'>
															{user?.services.map((service: any) => (
																<div
																	key={service.name}
																	className='col-auto'>
																	<Badge
																		isLight
																		color={service.color}
																		className='px-3 py-2'>
																		<Icon
																			icon={service.icon}
																			size='lg'
																			className='me-1'
																		/>
																		{service.name}
																	</Badge>
																</div>
															))}
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
					))}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default User;
