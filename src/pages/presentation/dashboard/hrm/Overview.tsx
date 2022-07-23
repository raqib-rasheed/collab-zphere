import classNames from 'classnames';
// import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import USERS from '../../../../common/data/userDummyData';
import Avatar, { AvatarGroup } from '../../../../components/Avatar';
import Button from '../../../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Popovers from '../../../../components/bootstrap/Popovers';
import {
	CalendarTodayButton,
	CalendarViewModeButtons,
	// getLabel,
	getUnitType,
	// getLabel,
	// getUnitType,
	getViews,
} from '../../../../components/extras/calendarHelper';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import PaginationButtons from '../../../../components/PaginationButtons';
// import useMinimizeAside from '../../../../hooks/useMinimizeAside';
import useSortableData from '../../../../hooks/useSortableData';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
// import EmployeeList from '../../appointment/EmployeeList';
import useDarkMode from '../../../../hooks/useDarkMode';
import Icon from '../../../../components/icon/Icon';
import eventList from '../../../../common/data/events';
import moment from 'moment';
// import '../../../../styles/components/bootstrap/_tables.scss';

const localizer = momentLocalizer(moment);

const MyEvent = (data: any) => {
	const { darkModeStatus } = useDarkMode();

	const { event } = data;
	return (
		<div className='row g-2'>
			<div className='col text-truncate'>
				{event?.icon && <Icon icon={event?.icon} size='lg' className='me-2' />}
				{event?.name}
			</div>
			{event?.user?.src && (
				<div className='col-auto'>
					<div className='row g-1 align-items-baseline'>
						<div className='col-auto'>
							<Avatar src={event?.user?.src} srcSet={event?.user?.srcSet} size={18} />
						</div>
						<small
							className={classNames('col-auto text-truncate', {
								'text-dark': !darkModeStatus,
								'text-white': darkModeStatus,
							})}>
							{event?.user?.name}
						</small>
					</div>
				</div>
			)}
			{event?.users && (
				<div className='col-auto'>
					<AvatarGroup size={18}>
						{event.users.map((user: any) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							<Avatar key={user.src} {...user} />
						))}
					</AvatarGroup>
				</div>
			)}
		</div>
	);
};

const MyWeekEvent = (data: any) => {
	const { darkModeStatus } = useDarkMode();

	const { event } = data;
	return (
		<div className='row g-2'>
			<div className='col-12 text-truncate'>
				{event?.icon && <Icon icon={event?.icon} size='lg' className='me-2' />}
				{event?.name}
			</div>
			{event?.user && (
				<div className='col-12'>
					<div className='row g-1 align-items-baseline'>
						<div className='col-auto'>
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<Avatar {...event?.user} size={18} />
						</div>
						<small
							className={classNames('col-auto text-truncate', {
								'text-dark': !darkModeStatus,
								'text-white': darkModeStatus,
							})}>
							{event?.user?.name}
						</small>
					</div>
				</div>
			)}
			{event?.users && (
				<div className='col-12'>
					<AvatarGroup size={18}>
						{event.users.map((user: any) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							<Avatar key={user.src} {...user} />
						))}
					</AvatarGroup>
				</div>
			)}
		</div>
	);
};

const ProjectSystemTasks = () => {
	const now = new Date();
	const { darkModeStatus } = useDarkMode();
	const [
		toggleRightPanel,
		// setToggleRightPanel
	] = useState(true);
	// useMinimizeAside();

	const [
		employeeList,
		// setEmployeeList
	] = useState({
		[USERS.JOHN.username]: true,
		[USERS.ELLA.username]: true,
		[USERS.RYAN.username]: true,
		[USERS.GRACE.username]: true,
	});

	// BEGIN :: Calendar
	// Active employee
	// const [employeeList, setEmployeeList] = useState({
	// 	[USERS.JOHN.username]: true,
	// 	[USERS.ELLA.username]: true,
	// 	[USERS.RYAN.username]: true,
	// 	[USERS.GRACE.username]: true,
	// });
	// Events

	// FOR DEV
	// useEffect(() => {
	// 	setEvents(eventList);
	// 	return () => {};
	// }, []);

	// Selected Event
	const [
		,
		// eventItem
		setEventItem,
	] = useState(null);
	// Calendar View Mode
	// Calendar Date
	// Item edit panel status

	// Calendar Unit Type
	// Calendar Date Label

	// Change view mode
	// View modes; Month, Week, Work Week, Day and Agenda

	// New Event

	/**
	 * Calendar Item Container Style
	 * @param event
	 * @param start
	 * @param end
	 * @param isSelected
	 * @returns {{className: string}}
	 */
	// eslint-disable-next-line no-unused-vars
	// const eventStyleGetter = () => {
	// return {
	// 	className: classNames({
	// 		[`bg-l${darkModeStatus ? 'o25' : '10'}-${color} text-${color}`]: color,
	// 		'border border-success': isActiveEvent,
	// 		'opacity-50': isPastEvent,
	// 	}),
	// };
	// };

	//calendar
	// Selected Event
	// Calendar View Mode
	const [viewMode, setViewMode] = useState(Views.MONTH);
	// Calendar Date
	const [date, setDate] = useState(new Date());
	// Item edit panel status
	const [toggleInfoEventCanvas, setToggleInfoEventCanvas] = useState(false);
	const setInfoEvent = () => setToggleInfoEventCanvas(!toggleInfoEventCanvas);
	const [eventAdding, setEventAdding] = useState(false);

	// Calendar Unit Type
	const unitType = getUnitType(viewMode);
	// Calendar Date Label
	// const calendarDateLabel = getLabel(date, viewMode);
	const [
		events,
		// setEvents
	] = useState(eventList);

	// Change view mode
	const handleViewMode = (e: any) => {
		// setDate(moment(e)(._d as any);
		// setViewMode(Views.DAY);
	};

	// View modes; Month, Week, Work Week, Day and Agenda
	const views = getViews();

	// New Event
	const handleSelect = ({ start, end }: any) => {
		setEventAdding(true);
		setEventItem({ start, end } as any);
	};

	useEffect(() => {
		if (eventAdding) {
			setInfoEvent();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [eventAdding]);

	// const formik = useFormik({
	// 	initialValues: {
	// 		eventName: '',
	// 		eventStart: '',
	// 		eventEnd: '',
	// 		eventEmployee: '',
	// 	},
	// onSubmit: (values) => {
	// if (eventAdding) {
	// 	setEvents((prevEvents) => [
	// 		...prevEvents,
	// 		{
	// 			id: values.eventStart,
	// 			...getServiceDataWithServiceName(values.eventName),
	// 			end: values.eventEnd,
	// 			start: values.eventStart,
	// 			user: { ...getUserDataWithUsername(values.eventEmployee) },
	// 		},
	// 	]);
	// }
	// setToggleInfoEventCanvas(false);
	// setEventAdding(false);
	// setEventItem(null);
	// formik.setValues({});
	// 	},
	// });
	// eslint-disable-next-line no-unused-vars

	const eventStyleGetter = (event: any, start: any, end: any, isSelected: boolean) => {
		const isActiveEvent = start <= now && end >= now;
		const isPastEvent = end < now;
		const color = isActiveEvent ? 'success' : event.color;

		return {
			className: classNames({
				[`bg-l${darkModeStatus ? 'o25' : '10'}-${color} text-${color}`]: color,
				'border border-success': isActiveEvent,
				'opacity-50': isPastEvent,
			}),
		};
	};
	// useEffect(() => {
	// 	if (eventItem)
	// 		formik.setValues({
	// 			...formik.values,
	// 			eventId: eventItem.id || null,
	// 			eventName: eventItem.name,
	// 			eventStart: moment(eventItem.start).format(),
	// 			eventEnd: moment(eventItem.end).format(),
	// 			eventEmployee: eventItem?.user?.username,
	// 		});
	// 	return () => {};
	// 	//	eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [eventItem]);
	// END:: Calendar

	// const [toggleCalendar, setToggleCalendar] = useState(true);

	const data = [
		{ id: 1, firstName: 'John', lastName: 'Doe' },
		{ id: 2, firstName: 'Ella', lastName: 'Oliver' },
		{ id: 3, firstName: 'Sam', lastName: 'Roberts' },
		{ id: 4, firstName: 'Grace', lastName: 'Buckland' },
		{ id: 5, firstName: 'Jane', lastName: 'Lee' },
		{ id: 6, firstName: 'Chloe', lastName: 'Walker' },
		{ id: 7, firstName: 'Ryan', lastName: 'McGrath' },
	];

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const { items } = useSortableData(data);

	return (
		<PageWrapper title=''>
			<Page container='fluid'>
				<Card>
					<CardHeader className='bg-transparent'>
						<CardLabel>
							<CardTitle tag='h4' className='h5'>
								Today's Not Clock In
							</CardTitle>
							<CardSubTitle tag='h5' className='h6 text-muted'>
								There is a meeting at 12 o'clock.
							</CardSubTitle>
						</CardLabel>
						<CardActions>
							<Button
								icon='ArrowForwardIos'
								aria-label='Read More'
								hoverShadow='default'
								// color={darkModeStatus ? 'dark' : null}
								// onClick={handleOnClickToEmployeeListPage}
							/>
						</CardActions>
					</CardHeader>
					<CardBody>
						<div className='row mb-4 g-3'>
							{Object.keys(USERS).map((u) => (
								<div key={USERS[u].username} className='col-auto'>
									<Popovers
										trigger='hover'
										desc={
											<>
												<div className='h6'>{`${USERS[u].name} ${USERS[u].surname}`}</div>
												<div>
													<b>Event: </b>
												</div>
												<div>
													<b>Approved: </b>
												</div>
											</>
										}>
										<div className='position-relative'>
											<Avatar
												srcSet={USERS[u].srcSet}
												src={USERS[u].src}
												color={USERS[u].color}
												size={64}
												border={4}
												className='cursor-pointer'
											/>
										</div>
									</Popovers>
								</div>
							))}
						</div>
					</CardBody>
				</Card>
				<div className='row h-100'>
					<div
						className={classNames({
							'col-xxl-8': !toggleRightPanel,
							'col-12': toggleRightPanel,
						})}>
						<Card stretch style={{ minHeight: 600 }}>
							<CardHeader>
								<CardActions>
									<CalendarTodayButton
										unitType={unitType}
										date={date}
										setDate={setDate}
										viewMode={viewMode}
									/>
								</CardActions>
								<CardActions>
									<CalendarViewModeButtons
										setViewMode={setViewMode}
										viewMode={viewMode}
									/>
								</CardActions>
							</CardHeader>
							<CardBody isScrollable>
								<Calendar
									selectable
									toolbar={false}
									localizer={localizer}
									events={events.filter((i) => employeeList[i?.user?.username!])}
									defaultView={Views.WEEK}
									views={views}
									view={viewMode}
									date={date}
									onNavigate={(_date) => setDate(_date)}
									scrollToTime={new Date(1970, 1, 1, 6)}
									defaultDate={new Date()}
									onSelectEvent={() =>
										// event
										{
											// setInfoEvent();
											// setEventItem(event);
										}
									}
									onSelectSlot={handleSelect}
									onView={handleViewMode}
									onDrillDown={handleViewMode}
									components={{
										event: MyEvent, // used by each view (Month, Day, Week)
										week: {
											event: MyWeekEvent,
										},
										work_week: {
											event: MyWeekEvent,
										},
									}}
									eventPropGetter={eventStyleGetter}
								/>
							</CardBody>
						</Card>
					</div>
				</div>
				<div className='d-flex'>
					<Card className='w-50 mx-2'>
						<CardBody>
							<table className='table'>
								<thead>
									<tr>
										<th scope='col'>#</th>
										<th scope='col'>First</th>
										<th scope='col'>Last</th>
										<th scope='col'>Handle</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope='row'>1</th>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
									<tr>
										<th scope='row'>2</th>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<th scope='row'>3</th>
										<td colSpan={2}>Larry the Bird</td>
										<td>@twitter</td>
									</tr>
								</tbody>
							</table>
						</CardBody>
						<PaginationButtons
							data={items}
							label='items'
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
							perPage={perPage}
							setPerPage={setPerPage}
						/>
					</Card>
					<Card className='w-50 mx-2'>
						<CardBody>
							<table className='table'>
								<thead>
									<tr>
										<th scope='col'>#</th>
										<th scope='col'>First</th>
										<th scope='col'>Last</th>
										<th scope='col'>Handle</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope='row'>1</th>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
									<tr>
										<th scope='row'>2</th>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<th scope='row'>3</th>
										<td colSpan={2}>Larry the Bird</td>
										<td>@twitter</td>
									</tr>
								</tbody>
							</table>
						</CardBody>
						<PaginationButtons
							data={items}
							label='items'
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
							perPage={perPage}
							setPerPage={setPerPage}
						/>
					</Card>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ProjectSystemTasks;
