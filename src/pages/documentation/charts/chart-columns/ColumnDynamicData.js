import React, { useState } from 'react';
import ApexCharts from 'apexcharts';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import './custom.scss';

const ColumnDynamicData = () => {
	const dynamicDataOptions = {
		chart: {
			toolbar: {
				show: false,
			},
		},
		tooltip: {
			shared: false,
		},
		legend: {
			show: false,
		},
	};

	const colors = [
		process.env.REACT_APP_INFO_COLOR,
		process.env.REACT_APP_SUCCESS_COLOR,
		process.env.REACT_APP_WARNING_COLOR,
		'#FF4560',
		process.env.REACT_APP_PRIMARY_COLOR,
		process.env.REACT_APP_SECONDARY_COLOR,
		process.env.REACT_APP_DANGER_COLOR,
	];

	/**
	 * Randomize array element order in-place.
	 * Using Durstenfeld shuffle algorithm.
	 */
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i -= 1) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	const arrayData = [
		{
			y: 400,
			quarters: [
				{
					x: 'Q1',
					y: 120,
				},
				{
					x: 'Q2',
					y: 90,
				},
				{
					x: 'Q3',
					y: 100,
				},
				{
					x: 'Q4',
					y: 90,
				},
			],
		},
		{
			y: 430,
			quarters: [
				{
					x: 'Q1',
					y: 120,
				},
				{
					x: 'Q2',
					y: 110,
				},
				{
					x: 'Q3',
					y: 90,
				},
				{
					x: 'Q4',
					y: 110,
				},
			],
		},
		{
			y: 448,
			quarters: [
				{
					x: 'Q1',
					y: 70,
				},
				{
					x: 'Q2',
					y: 100,
				},
				{
					x: 'Q3',
					y: 140,
				},
				{
					x: 'Q4',
					y: 138,
				},
			],
		},
		{
			y: 470,
			quarters: [
				{
					x: 'Q1',
					y: 150,
				},
				{
					x: 'Q2',
					y: 60,
				},
				{
					x: 'Q3',
					y: 190,
				},
				{
					x: 'Q4',
					y: 70,
				},
			],
		},
		{
			y: 540,
			quarters: [
				{
					x: 'Q1',
					y: 120,
				},
				{
					x: 'Q2',
					y: 120,
				},
				{
					x: 'Q3',
					y: 130,
				},
				{
					x: 'Q4',
					y: 170,
				},
			],
		},
		{
			y: 580,
			quarters: [
				{
					x: 'Q1',
					y: 170,
				},
				{
					x: 'Q2',
					y: 130,
				},
				{
					x: 'Q3',
					y: 120,
				},
				{
					x: 'Q4',
					y: 160,
				},
			],
		},
	];

	const makeData = () => {
		const dataSet = shuffleArray(arrayData);

		const dataYearSeries = [
			{
				x: '2011',
				y: dataSet[0].y,
				color: colors[0],
				quarters: dataSet[0].quarters,
			},
			{
				x: '2012',
				y: dataSet[1].y,
				color: colors[1],
				quarters: dataSet[1].quarters,
			},
			{
				x: '2013',
				y: dataSet[2].y,
				color: colors[2],
				quarters: dataSet[2].quarters,
			},
			{
				x: '2014',
				y: dataSet[3].y,
				color: colors[3],
				quarters: dataSet[3].quarters,
			},
			{
				x: '2015',
				y: dataSet[4].y,
				color: colors[4],
				quarters: dataSet[4].quarters,
			},
			{
				x: '2016',
				y: dataSet[5].y,
				color: colors[5],
				quarters: dataSet[5].quarters,
			},
		];

		return dataYearSeries;
	};

	const updateQuarterChart = (sourceChart, destChartIDToUpdate) => {
		let series = [];
		const seriesIndex = 0;
		// eslint-disable-next-line @typescript-eslint/no-shadow
		const colors = [];

		if (sourceChart.w.globals.selectedDataPoints[0]) {
			const selectedPoints = sourceChart.w.globals.selectedDataPoints;
			for (let i = 0; i < selectedPoints[seriesIndex].length; i += 1) {
				const selectedIndex = selectedPoints[seriesIndex][i];
				const yearSeries = sourceChart.w.config.series[seriesIndex];
				series.push({
					name: yearSeries.data[selectedIndex].x,
					data: yearSeries.data[selectedIndex].quarters,
				});
				colors.push(yearSeries.data[selectedIndex].color);
			}

			if (series.length === 0)
				series = [
					{
						data: [],
					},
				];

			return ApexCharts.exec(destChartIDToUpdate, 'updateOptions', {
				series,
				colors,
				fill: {
					colors,
				},
			});
		}
		return null;
	};

	const [dynamicData] = useState({
		series: [
			{
				data: makeData(),
			},
		],
		options: {
			...dynamicDataOptions,
			chart: {
				id: 'barYear',
				height: 400,
				width: '100%',
				type: 'bar',
				events: {
					dataPointSelection(e, chart, opts) {
						const quarterChartEl = document.querySelector('#chart-quarter');
						const yearChartEl = document.querySelector('#chart-year');

						if (opts.selectedDataPoints[0].length === 1) {
							if (quarterChartEl.classList.contains('active')) {
								updateQuarterChart(chart, 'barQuarter');
							} else {
								yearChartEl.classList.add('chart-quarter-activated');
								quarterChartEl.classList.add('active');
								updateQuarterChart(chart, 'barQuarter');
							}
						} else {
							updateQuarterChart(chart, 'barQuarter');
						}

						if (opts.selectedDataPoints[0].length === 0) {
							yearChartEl.classList.remove('chart-quarter-activated');
							quarterChartEl.classList.remove('active');
						}
					},
					updated(chart) {
						updateQuarterChart(chart, 'barQuarter');
					},
				},
			},
			plotOptions: {
				bar: {
					distributed: true,
					horizontal: true,
					barHeight: '75%',
					dataLabels: {
						position: 'bottom',
					},
				},
			},
			dataLabels: {
				enabled: true,
				textAnchor: 'start',
				style: {
					colors: ['#fff'],
				},
				formatter(val, opt) {
					return opt.w.globals.labels[opt.dataPointIndex];
				},
				offsetX: 0,
				dropShadow: {
					enabled: true,
				},
			},

			colors,

			states: {
				normal: {
					filter: {
						type: 'desaturate',
					},
				},
				active: {
					allowMultipleDataPointsSelection: true,
					filter: {
						type: 'darken',
						value: 1,
					},
				},
			},
			tooltip: {
				x: {
					show: false,
				},
				y: {
					title: {
						formatter(val, opts) {
							return opts.w.globals.labels[opts.dataPointIndex];
						},
					},
				},
			},
			title: {
				text: 'Yearly Results',
				offsetX: 15,
			},
			subtitle: {
				text: '(Click on bar to see details)',
				offsetX: 15,
			},
			yaxis: {
				labels: {
					show: false,
				},
			},
		},

		seriesQuarter: [
			{
				data: [],
			},
		],
		optionsQuarter: {
			...dynamicDataOptions,
			chart: {
				id: 'barQuarter',
				height: 400,
				width: '100%',
				type: 'bar',
				stacked: true,
			},
			plotOptions: {
				bar: {
					columnWidth: '50%',
					horizontal: false,
				},
			},
			legend: {
				show: false,
			},
			grid: {
				yaxis: {
					lines: {
						show: false,
					},
				},
				xaxis: {
					lines: {
						show: true,
					},
				},
			},
			yaxis: {
				labels: {
					show: false,
				},
			},
			title: {
				text: 'Quarterly Results',
				offsetX: 10,
			},
			tooltip: {
				x: {
					formatter(val, opts) {
						return opts.w.globals.seriesNames[opts.seriesIndex];
					},
				},
				y: {
					title: {
						formatter(val, opts) {
							return opts.w.globals.labels[opts.dataPointIndex];
						},
					},
				},
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='BarChart'>
						<CardTitle>
							type <small>bar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody style={{ position: 'relative' }}>
					<Chart
						id='chart-year'
						series={dynamicData.series}
						options={dynamicData.options}
						type='bar'
						height={400}
					/>
					<Chart
						id='chart-quarter'
						series={dynamicData.seriesQuarter}
						options={dynamicData.optionsQuarter}
						type='bar'
						height={400}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default ColumnDynamicData;
