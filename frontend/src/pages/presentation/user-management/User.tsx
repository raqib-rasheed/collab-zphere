import React from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import Icon from '../../../components/icon/Icon';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import USERS from '../../../common/data/userDummyData';
import Badge from '../../../components/bootstrap/Badge';
import Button from '../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import useTourStep from '../../../hooks/useTourStep';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';

const User = () => {
	useTourStep(18);
	const formik = useFormik({
		initialValues: {
			available: false,
			searchInput: '',
			services: [],
		},
		onSubmit: () => {
			// setFilterMenu(false);
			// alert(JSON.stringify(values, null, 2));
		},
	});

	const searchUsers = Object.keys(USERS)
		.filter(
			(key) =>
				USERS[key].username
					.toLowerCase()
					.includes(formik.values.searchInput.toLowerCase()) ||
				USERS[key].name.toLowerCase().includes(formik.values.searchInput.toLowerCase()) ||
				USERS[key].surname
					.toLowerCase()
					.includes(formik.values.searchInput.toLowerCase()) ||
				USERS[key].position.toLowerCase().includes(formik.values.searchInput.toLowerCase()),
		)
		.filter((key2) => (formik.values.available ? USERS[key2].isOnline : key2))
		.map((i) => USERS[i]);
	return (
		<PageWrapper title='Users Page'>
			<PresentaionPagesSubHeader showSubHeaderRight title='Find Employee Payslip' />
			<Page container='fluid'>
				<div className='row row-cols-xxl-3 row-cols-lg-3 row-cols-md-2'>
					{searchUsers.map((user) => (
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
																src={user.src}
																alt={user.name}
																width={100}
															/>
														</div>
													</div>
													{user.isOnline && (
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
																	{`${user.name} ${user.surname}`}
																</div>
																<small className='border border-success border-2 text-success fw-bold px-2 py-1 rounded-1'>
																	{user.position}
																</small>
															</div>

															<div className='text-muted'>
																@{user.username}
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
															{user?.services.map((service) => (
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
