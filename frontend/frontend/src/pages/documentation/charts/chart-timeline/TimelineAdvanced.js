import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const TimelineAdvanced = () => {
	const [state] = useState({
		series: [
			{
				name: 'Bob',
				data: [
					{
						x: 'Design',
						y: [new Date('2019-03-05').getTime(), new Date('2019-03-08').getTime()],
					},
					{
						x: 'Code',
						y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()],
					},
					{
						x: 'Code',
						y: [new Date('2019-03-05').getTime(), new Date('2019-03-07').getTime()],
					},
					{
						x: 'Test',
						y: [new Date('2019-03-03').getTime(), new Date('2019-03-09').getTime()],
					},
					{
						x: 'Test',
						y: [new Date('2019-03-08').getTime(), new Date('2019-03-11').getTime()],
					},
					{
						x: 'Validation',
						y: [new Date('2019-03-11').getTime(), new Date('2019-03-16').getTime()],
					},
					{
						x: 'Design',
						y: [new Date('2019-03-01').getTime(), new Date('2019-03-03').getTime()],
					},
				],
			},
			{
				name: 'Joe',
				data: [
					{
						x: 'Design',
						y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()],
					},
					{
						x: 'Test',
						y: [new Date('2019-03-06').getTime(), new Date('2019-03-16').getTime()],
					},
					{
						x: 'Code',
						y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()],
					},
					{
						x: 'Deployment',
						y: [new Date('2019-03-20').getTime(), new Date('2019-03-22').getTime()],
					},
					{
						x: 'Design',
						y: [new Date('2019-03-10').getTime(), new Date('2019-03-16').getTime()],
					},
				],
			},
			{
				name: 'Dan',
				data: [
					{
						x: 'Code',
						y: [new Date('2019-03-10').getTime(), new Date('2019-03-17').getTime()],
					},
					{
						x: 'Validation',
						y: [new Date('2019-03-05').getTime(), new Date('2019-03-09').getTime()],
					},
				],
			},
		],
		options: {
			chart: {
				height: 450,
				type: 'rangeBar',
			},
			plotOptions: {
				bar: {
					horizontal: true,
					barHeight: '80%',
				},
			},
			xaxis: {
				type: 'datetime',
			},
			stroke: {
				width: 1,
			},
			fill: {
				type: 'solid',
				opacity: 0.6,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'left',
			},
			tooltip: { theme: 'dark' },
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='WaterfallChart'>
						<CardTitle>
							type <small>rangeBar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={state.series}
						options={state.options}
						type='rangeBar'
						height={450}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default TimelineAdvanced;
