import React, { useState } from 'react';
import moment from 'moment';
import { Calendar as DatePicker } from 'react-date-range';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../../layout/SubHeader/SubHeader';
import Icon from '../../../../components/icon/Icon';
import Button, { ButtonGroup } from '../../../../components/bootstrap/Button';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Popovers from '../../../../components/bootstrap/Popovers';
import useDarkMode from '../../../../hooks/useDarkMode';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import {
	CalendarTodayButton,
	CalendarViewModeButtons,
} from '../../../../components/extras/calendarHelper';
import { Calendar2 } from '../../../../components/icon/bootstrap';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../../components/bootstrap/OffCanvas';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import { Input } from '../../../../components/icon/material-icons';
import Checks from '../../../../components/bootstrap/forms/Checks';
import classNames from 'classnames';
import Select from '../../../../components/bootstrap/forms/Select';

const ListFluidPage = () => {
	const { themeStatus } = useDarkMode();

	const [date, setDate] = useState(new Date());

	return (
		<PageWrapper title='demo title'>
			<SubHeader>
				<SubHeaderLeft>
					<Icon icon='Info' className='me-2' size='2x' />
					<span className='text-muted'>
						You have <Icon icon='TaskAlt' color='success' className='mx-1' size='lg' />{' '}
						3 approved appointments and{' '}
						<Icon icon='Alarm' color='warning' className='mx-1' size='lg' /> 4 pending
						appointments for today.
					</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Popovers
						desc={
							<DatePicker
								onChange={(item) => setDate(item)}
								date={date}
								color={process.env.REACT_APP_PRIMARY_COLOR}
							/>
						}
						placement='bottom-end'
						className='mw-100'
						trigger='click'>
						<Button color={themeStatus}>
							{`${moment(date).startOf('weeks').format('MMM Do')} - ${moment(date)
								.endOf('weeks')
								.format('MMM Do')}`}
						</Button>
					</Popovers>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<Card stretch style={{ minHeight: 600 }}>
					<CardHeader>
						<CardActions>
							<Popovers
								desc={
									<DatePicker
										onChange={(item) => setDate(item)}
										date={date}
										color={process.env.REACT_APP_PRIMARY_COLOR}
									/>
								}
								placement='bottom-start'
								className='mw-100'
								trigger='click'>
								<Button color='light'>demo text</Button>
							</Popovers>
						</CardActions>
						<CardActions>
							<ButtonGroup isToolbar>
								<CalendarTodayButton
									unitType={''}
									date={date}
									setDate={setDate}
									viewMode={'day'}
								/>
								<CalendarViewModeButtons
									setViewMode={() => {}}
									viewMode={'agenda'}
								/>
							</ButtonGroup>
						</CardActions>
					</CardHeader>
					<CardBody isScrollable>
						<Calendar2
							selectable
							toolbar={false}
							localizer={''}
							date={date}
							onNavigate={(_date: string) => {}}
							scrollToTime={new Date(1970, 1, 1, 6)}
							defaultDate={new Date()}
							onSelectEvent={() => {}}
							eventPropGetter={''}
						/>
					</CardBody>

					<OffCanvas setOpen={() => {}} isOpen={true} titleId='canvas-title'>
						<OffCanvasHeader setOpen={() => {}} className='p-4'>
							<OffCanvasTitle id='canvas-title'>Edit Event</OffCanvasTitle>
						</OffCanvasHeader>
						<OffCanvasBody tag='form' onSubmit={() => {}} className='p-4'>
							<div className='row g-4'>
								<div className='col-12'>
									<FormGroup id='eventName' label='Name'>
										<Input size='lg' value={''} onChange={() => {}} />
									</FormGroup>
								</div>
								<div className='col-12'>
									<Card className='mb-0 bg-l10-info' shadow='sm'>
										<CardHeader className='bg-l25-info'>
											<CardLabel icon='DateRange' iconColor='info'>
												<CardTitle className='text-info'>
													Date Options
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											<div className='row g-3'>
												<div className='col-12'>
													<FormGroup id='eventAllDay'>
														<Checks
															type='switch'
															value='true'
															label='All day event'
															checked={true}
															onChange={() => {}}
														/>
													</FormGroup>
												</div>
												<div className='col-12'>
													<FormGroup id='eventStart' label={'Date'}>
														<Input
															type='date'
															value={'nill'}
															onChange={() => {}}
														/>
													</FormGroup>
												</div>

												{!true && (
													<div className='col-12'>
														<FormGroup id='eventEnd' label='End Date'>
															<Input
																type='date'
																value={'date'}
																onChange={() => {}}
															/>
														</FormGroup>
													</div>
												)}
											</div>
										</CardBody>
									</Card>
								</div>
								<div className='col-12'>
									<Card
										className={classNames('bg-l10-success', {
											'mb-4 shadow-3d-success': true,
										})}
										shadow='sm'>
										<CardHeader className='bg-l25-success'>
											<CardLabel icon='DateRange' iconColor='success'>
												<CardTitle className='text-success'>
													Date Options
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											<div className='row g-3'>
												<div className='col-12'>
													<FormGroup id='eventRecurring'>
														<Checks
															type='switch'
															value='true'
															label='This is a recurring event'
															checked={true}
															onChange={() => {}}
														/>
													</FormGroup>
												</div>
												{false && (
													<>
														<div className='col-12'>
															<FormGroup
																id='eventRepeat'
																label='Repeat Event'>
																<Select
																	value={'Mock valeu'}
																	onChange={() => {}}
																	ariaLabel='Repeat event'
																	list={[
																		{
																			value: 'daily',
																			text: 'Daily',
																		},
																		{
																			value: 'weekly',
																			text: 'Weekly',
																		},
																		{
																			value: 'monthly',
																			text: 'Monthly',
																		},
																	]}
																/>
															</FormGroup>
														</div>
														<div className='col-12'>
															<FormGroup
																id='eventUntilWhen'
																label='Until when?'>
																<Input
																	type='date'
																	value={'de,=mo value'}
																	onChange={() => {}}
																/>
															</FormGroup>
														</div>
													</>
												)}
											</div>
										</CardBody>
									</Card>
								</div>

								<div className='col'>
									<Button color='info' type='submit'>
										Save
									</Button>
								</div>
							</div>
						</OffCanvasBody>
					</OffCanvas>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default ListFluidPage;
