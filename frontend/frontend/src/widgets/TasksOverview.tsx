import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Card, { CardHeader } from '../components/bootstrap/Card';
interface IAreaChartProps {
	colors?: string[];
	title?: string;
}
const AreaChart = (props: IAreaChartProps) => {
	const data = [1, 2.4, 2, 3, 2, 6, 5, 2, 4, 3, 7, 3];
	const series = [
		{
			name: 'Popularity ',
			data,
		},
	];
	const options = {
		// title: getChartTitle("Google search popularity over time"),
		chart: {
			type: 'line',
			toolbar: {
				autoSelected: 'pan',
				show: false,
			},
		},
		labels: [
			'01 Jan 21',
			'02 Jan 21',
			'03 Jan 21',
			'04 Jan 21',
			'05 Jan 21',
			'06 Jan 21',
			'07 Jan 21',
			'08 Jan 21',
			'09 Jan 21',
			'10 Jan 21',
			'11 Jan 21',
			'12 Jan 21',
		],
		xaxis: {
			type: 'datetime',
			axisBorder: {
				show: false,
			},
			axisTicks: { show: false },
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		markers: {
			size: 4,
			colors: undefined,
			strokeColors: '#fff',
			strokeWidth: 0,
			strokeOpacity: 0,
			strokeDashArray: 0,
			fillOpacity: 1,
			discrete: [],
			shape: 'circle',
			radius: 2,
			showNullDataPoints: true,
		},
		stroke: {
			width: 2,
			curve: 'smooth',
		},
		colors: props?.colors ?? ['#3E8EF7'],
	};
	return (
		<Card className='p-2'>
			{props?.title && (
				<CardHeader>
					<h4>{props?.title}</h4>
				</CardHeader>
			)}
			<ReactApexChart
				options={options as any}
				series={series}
				type='area'
				height='350px'
				width='100%'
			/>
		</Card>
	);
};

export default AreaChart;
