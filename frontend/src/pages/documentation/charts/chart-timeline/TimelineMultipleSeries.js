import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const TimelineMultipleSeries = () => {
	const [state] = useState({
		series: [
			// George Washington
			{
				name: 'George Washington',
				data: [
					{
						x: 'President',
						y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()],
					},
				],
			},
			// John Adams
			{
				name: 'John Adams',
				data: [
					{
						x: 'President',
						y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
					},
					{
						x: 'Vice President',
						y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()],
					},
				],
			},
			// Thomas Jefferson
			{
				name: 'Thomas Jefferson',
				data: [
					{
						x: 'President',
						y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
					},
					{
						x: 'Vice President',
						y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
					},
					{
						x: 'Secretary of State',
						y: [new Date(1790, 2, 22).getTime(), new Date(1793, 11, 31).getTime()],
					},
				],
			},
			// Aaron Burr
			{
				name: 'Aaron Burr',
				data: [
					{
						x: 'Vice President',
						y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()],
					},
				],
			},
			// George Clinton
			{
				name: 'George Clinton',
				data: [
					{
						x: 'Vice President',
						y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()],
					},
				],
			},
			// John Jay
			{
				name: 'John Jay',
				data: [
					{
						x: 'Secretary of State',
						y: [new Date(1789, 8, 25).getTime(), new Date(1790, 2, 22).getTime()],
					},
				],
			},
			// Edmund Randolph
			{
				name: 'Edmund Randolph',
				data: [
					{
						x: 'Secretary of State',
						y: [new Date(1794, 0, 2).getTime(), new Date(1795, 7, 20).getTime()],
					},
				],
			},
			// Timothy Pickering
			{
				name: 'Timothy Pickering',
				data: [
					{
						x: 'Secretary of State',
						y: [new Date(1795, 7, 20).getTime(), new Date(1800, 4, 12).getTime()],
					},
				],
			},
			// Charles Lee
			{
				name: 'Charles Lee',
				data: [
					{
						x: 'Secretary of State',
						y: [new Date(1800, 4, 13).getTime(), new Date(1800, 5, 5).getTime()],
					},
				],
			},
			// John Marshall
			{
				name: 'John Marshall',
				data: [
					{
						x: 'Secretary of State',
						y: [new Date(1800, 5, 13).getTime(), new Date(1801, 2, 4).getTime()],
					},
				],
			},
			// Levi Lincoln
			{
				name: 'Levi Lincoln',
				data: [
					{
						x: 'Secretary of State',
						y: [new Date(1801, 2, 5).getTime(), new Date(1801, 4, 1).getTime()],
					},
				],
			},
			// James Madison
			{
				name: 'James Madison',
				data: [
					{
						x: 'Secretary of State',
						y: [new Date(1801, 4, 2).getTime(), new Date(1809, 2, 3).getTime()],
					},
				],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'rangeBar',
			},
			plotOptions: {
				bar: {
					horizontal: true,
					barHeight: '50%',
					rangeBarGroupRows: true,
				},
			},
			colors: [
				'#008FFB',
				'#00E396',
				'#FEB019',
				'#FF4560',
				'#775DD0',
				'#3F51B5',
				'#546E7A',
				'#D4526E',
				'#8D5B4C',
				'#F86624',
				'#D7263D',
				'#1B998B',
				'#2E294E',
				'#F46036',
				'#E2C044',
			],
			fill: {
				type: 'solid',
			},
			xaxis: {
				type: 'datetime',
			},
			legend: {
				position: 'right',
			},
			tooltip: {
				custom(opts) {
					const fromYear = new Date(opts.y1).getFullYear();
					const toYear = new Date(opts.y2).getFullYear();
					const values = opts.ctx.rangeBar.getTooltipValues(opts);

					return (
						`${
							'<div class="apexcharts-tooltip-rangebar">' +
							'<div> <span class="series-name" style="color: '
						}${values.color}">${
							values.seriesName ? values.seriesName : ''
						}</span></div>` +
						`<div> <span class="category">${values.ylabel} </span> <span class="value start-value">${fromYear}</span> <span class="separator">-</span> <span class="value end-value">${toYear}</span></div>` +
						`</div>`
					);
				},
			},
		},
	});
	return (
		<div className='col-12'>
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
						height={350}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default TimelineMultipleSeries;
