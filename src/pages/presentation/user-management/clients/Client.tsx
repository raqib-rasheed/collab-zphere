import classNames from 'classnames';
import React from 'react';
import Badge from '../../../../components/bootstrap/Badge';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Icon from '../../../../components/icon/Icon';
import ClientDropdownOptions from './ClientDropdownOptions';

const Client = (props: any) => {
	return (
		<div key={props.client.username} className='col'>
			<Card>
				<CardBody>
					<div className='row g-3'>
						<div className='col d-flex'>
							<div className='flex-shrink-0'>
								<div className='position-relative'>
									<div className='ratio ratio-1x1' style={{ width: 100 }}>
										<div
											className={classNames(
												`bg-l25-${props.client.color}`,
												'rounded-2',
												'd-flex align-items-center justify-content-center',
												'overflow-hidden',
												'shadow',
											)}>
											<img
												src={props.client.profile}
												alt={props.client.name}
												width={100}
											/>
										</div>
									</div>
									{props.client.isActive && (
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
													{`${props.client.name}`}
												</div>
												<small
													className='border border-success border-2 text-success 
																	fw-bold px-2 py-1 rounded-1'>
													{props.client.position}
												</small>
											</div>

											<div className='text-muted'>@{props.client.name}</div>
										</div>
										<ClientDropdownOptions client={props.client} />
									</div>
									{!!props.client?.services && (
										<div className='row g-2 mt-3'>
											{props.client?.services.map((service: any) => (
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

export default Client;
