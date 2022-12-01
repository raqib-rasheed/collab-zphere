import React, { useState } from 'react';
import classNames from 'classnames';
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
import { useQuery } from '@tanstack/react-query';
import CreateNewUserForm from './CreateNewUserForm';
import Spinner from '../../../../components/bootstrap/Spinner';
import RemoveUser from './RemoveUser';

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
	const [updateNewModalVisible, setUpdateNewModalVisible] = useState(false);

	// api call
	const getUsers = () => axios.get('/User');
	const {
		data: usersResponse,
		error: userErr,
		isLoading: userLoading,
	} = useQuery(['User'], getUsers);

	if (userLoading) {
		return (
			<div style={{ textAlign: 'center', width: '130vh' }}>
				<Spinner color={'primary'} />
			</div>
		);
	}
	if (userErr) {
		return <div>error...</div>;
	}
	return (
		<PageWrapper title='Users Page'>
			<PresentaionPagesSubHeader
				title='Manage User'
				showSubHeaderRight
				addNewModal={
					<CreateNewUserForm
						addNewModalVisible={addNewModalVisible}
						setAddNewModalVisible={setAddNewModalVisible}
					/>
				}
				setAddNewModalVisible={setAddNewModalVisible}
				// customSubHeaderRightActions={CreateNewUserForm}
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
																		<div
																			onClick={() =>
																				setAddNewModalVisible(
																					true,
																				)
																			}>
																			<Icon
																				size='lg'
																				icon='edit'
																			/>
																			<span>Edit</span>
																			<CreateNewUserForm
																				addNewModalVisible={
																					updateNewModalVisible
																				}
																				setAddNewModalVisible={
																					setUpdateNewModalVisible
																				}
																				initialValues={{
																					id: user?.id,
																					name: user?.name,
																					email: user?.email,
																					dob: user?.dob,
																					type: user?.type,
																				}}
																			/>
																		</div>
																	</DropdownItem>
																	<DropdownItem className='p-2'>
																		<RemoveUser
																			userId={user?.idddd}
																		/>
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
