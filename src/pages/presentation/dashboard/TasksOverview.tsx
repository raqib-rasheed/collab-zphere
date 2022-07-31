import React from 'react';
import Card, { CardHeader } from '../../../components/bootstrap/Card';
const { default: ReactApexChart } = require('react-apexcharts');

const TasksOverview = () => {
	const data = [
		{
			category: 'twitter',
			data: [
				{
					date: '2022-04-04',
					count: 568,
				},
				{
					date: '2022-04-03',
					count: 2199,
				},
				{
					date: '2022-04-02',
					count: 2442,
				},
				{
					date: '2022-04-01',
					count: 2405,
				},
				{
					date: '2022-03-31',
					count: 1181,
				},
			],
		},
		{
			category: 'reddit',
			data: [
				{
					date: '2022-03-31',
					count: 113,
				},
				{
					date: '2022-04-01',
					count: 134,
				},
				{
					date: '2022-04-02',
					count: 99,
				},
				{
					date: '2022-04-03',
					count: 115,
				},
				{
					date: '2022-04-04',
					count: 127,
				},
			],
		},
	];
	const options = {
		chart: {
			type: 'area',
			fillOpacity: 3,
			toolbar: {
				show: false,
			},
		},
		grid: {
			show: false,
		},
		stroke: {
			width: 1,
			curve: 'smooth',
		},
		colors: ['rgba(62, 201, 214, 0.85)', 'rgba(62, 201, 214, 0.85)'],
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				type: 'horizontal',
				shadeIntensity: 0.5,
				gradientToColors: ['#B0DFFF', '#4AB6FF'],
				inverseColors: true,
				opacityFrom: 1.5,
				opacityTo: 1,
				stops: [0, 50, 100],
				colorStops: [],
			},
		},
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			type: 'datetime',
			categories: data[0]?.data.map((item) => item?.date),
			axisBorder: {
				show: false,
			},
			axisTicks: { show: false },
			labels: {
				style: {
					fontSize: '12px',
				},
				datetimeFormatter: {
					year: 'yy',
					month: "MMM 'yy",
					day: 'dd MMM',
					hour: 'HH:mm',
				},
			},
		},
		yaxis: {
			min: 0,
			logarithmic: true,
		},
		legend: {
			show: false,
		},
	};

	const series = [
		{
			name: 'Twitter',
			data: data[0]?.data.map((item) => item?.count),
		},
		{
			name: 'Reddit',
			data: data[1]?.data.map((item) => item?.count),
		},
	];

	return (
		<Card>
			<CardHeader>
				<h4>Tasks Overview</h4>
			</CardHeader>
			<ReactApexChart
				options={options}
				series={series}
				type='area'
				height='300px'
				width='100%'
			/>
		</Card>
	);
};

export default TasksOverview;
