import React from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Timeline, { TimelineItem } from '../../../components/extras/Timeline';
import moment from 'moment';
import Popovers from '../../../components/bootstrap/Popovers';
import Icon from '../../../components/icon/Icon';

const CommonDashboardRecentActivities = () => {
	return (
		<Card stretch>
			<CardHeader>
				<CardLabel icon='NotificationsActive' iconColor='warning'>
					<CardTitle tag='h4' className='h5'>
						Recent Activities
					</CardTitle>
					<CardSubTitle>last 2 weeks</CardSubTitle>
				</CardLabel>
			</CardHeader>
			<CardBody isScrollable>
				<Timeline>
					<TimelineItem label={moment().add(-0.25, 'hours').format('LT')} color='primary'>
						Extended license purchased from France.
					</TimelineItem>
					<TimelineItem label={moment().add(-4.54, 'hours').format('LT')} color='success'>
						<Popovers desc='5 stars' trigger='hover'>
							<span>
								<Icon icon='StarFill' color='warning' />
								<Icon icon='StarFill' color='warning' />
								<Icon icon='StarFill' color='warning' />
								<Icon icon='StarFill' color='warning' />
								<Icon icon='StarFill' color='warning' />
							</span>
						</Popovers>
						<b>, a new rating has been received.</b>
					</TimelineItem>
					<TimelineItem label={moment().add(-9.34, 'hours').format('LT')} color='warning'>
						Customer's problem solved.
					</TimelineItem>
					<TimelineItem label={moment().add(-1, 'day').fromNow()} color='primary'>
						Regular license purchased from United Kingdom.
					</TimelineItem>
					<TimelineItem label={moment().add(-1, 'day').fromNow()} color='primary'>
						Regular license purchased from Italy.
					</TimelineItem>
					<TimelineItem label={moment().add(-2, 'day').fromNow()} color='info'>
						<span className='text-muted'>
							New version released.{' '}
							<a href='/' className='fw-bold'>
								V12.1.0
							</a>
						</span>
					</TimelineItem>
					<TimelineItem label={moment().add(-3, 'day').fromNow()} color='danger'>
						Market research meeting for new product.
					</TimelineItem>
					<TimelineItem label={moment().add(-7, 'day').fromNow()} color='secondary'>
						Updating, compiling and going live the product introduction page.
					</TimelineItem>
					<TimelineItem label={moment().add(-8, 'day').fromNow()} color='primary'>
						Regular license purchased from Germany.
					</TimelineItem>
				</Timeline>
			</CardBody>
		</Card>
	);
};

export default CommonDashboardRecentActivities;
