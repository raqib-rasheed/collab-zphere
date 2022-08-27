import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Card, { CardHeader } from '../../../components/bootstrap/Card';

const TimesheetLoggedHours = () => {
	const colors = [
		'rgba(62, 201, 214, 0.85)',
		'rgba(62, 201, 214, 0.85)',
		'rgba(62, 201, 214, 0.85)',
		'rgba(62, 201, 214, 0.85)',
		'rgba(62, 201, 214, 0.85)',
		'rgba(62, 201, 214, 0.85)',
		'rgba(62, 201, 214, 0.85)',
	];
	const state = {
		count: [
			{
				data: [12, 23, 21, 41, 12, 41, 11],
			},
		],
		options: {
			// title: getChartTitle("Top organisations mentioned with news"),
			chart: {
				toolbar: {
					show: false,
				},
				type: 'bar',
			},
			colors: colors,
			plotOptions: {
				bar: {
					borderRadius: 10,
					distributed: true,
					horizontal: true,
				},
			},
			grid: {
				show: false,
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: false,
			},
			xaxis: {
				axisBorder: {
					show: false,
				},
				axisTicks: { show: false },
				categories: ['sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			},

			tooltip: {
				y: {
					formatter: undefined,
					title: {
						formatter: () => 'Mentions :',
					},
				},
			},
			yaxis: {
				labels: {
					show: true,
					categories: ['Amazon', 'Facebook', 'Apple', 'Twitter', 'Cvs', 'Kroger', 'Best'],
					style: {
						colors: [],
						fontSize: '13px',
						fontFamily: 'Helvetica, Arial, sans-serif',
						fontWeight: 300,
						cssClass: 'apexcharts-xaxis-label',
					},
					offsetX: 0,
					offsetY: 0,
				},
			},
		},
	};

	return (
		<Card stretch style={{ minHeight: '350px' }}>
			<CardHeader>
				<h4>Timesheet Logged Hours</h4>
			</CardHeader>
			<ReactApexChart
				options={state.options as any}
				series={state.count}
				type='bar'
				height='100%'
				width='90%'
				style={{ marginLeft: '20px', minHeight: '350px' }}
			/>
		</Card>
	);
};

export default TimesheetLoggedHours;
