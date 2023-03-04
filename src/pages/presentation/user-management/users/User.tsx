import React from 'react';
import classNames from 'classnames';
import Badge from '../../../../components/bootstrap/Badge';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Icon from '../../../../components/icon/Icon';
import UserDropdownOptions from './UserDropdownOptions';

const User = (props: any) => {
	return (
		<div key={props.user.username} className='col'>
			<Card>
				<CardBody>
					<div className='row g-3'>
						<div className='col d-flex'>
							<div className='flex-shrink-0'>
								<div className='position-relative'>
									<div className='ratio ratio-1x1' style={{ width: 100 }}>
										<div
											className={classNames(
												`bg-l25-${props.user.color}`,
												'rounded-2',
												'd-flex align-items-center justify-content-center',
												'overflow-hidden',
												'shadow',
											)}>
											<img
												src={props.user.profile}
												alt={props.user.name}
												width={100}
											/>
										</div>
									</div>
									{props.user.isActive && (
										<span
											className='position-absolute 
															top-100 start-85 translate-middle badge border 
															border-2 border-light rounded-circle bg-success p-2'>
											<span className='visually-hidden'>Online user</span>
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
													{`${props.user.name}`}
												</div>
												<small
													className='border border-success border-2 text-success 
																	fw-bold px-2 py-1 rounded-1'>
													{props.user.position}
												</small>
											</div>

											<div className='text-muted'>@{props.user.name}</div>
										</div>
										<UserDropdownOptions user={props.user} />
									</div>
									{!!props.user?.services && (
										<div className='row g-2 mt-3'>
											{props.user?.services.map((service: any) => (
												<div key={service.name} className='col-auto'>
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
	);
};

export default User;
