import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const ColumnWithDataLabels = () => {
	const [columnWithDataLabels] = useState({
		series: [
			{
				name: 'Inflation',
				data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'bar',
			},
			plotOptions: {
				bar: {
					dataLabels: {
						position: 'top', // top, center, bottom
					},
				},
			},
			dataLabels: {
				enabled: true,
				formatter(val) {
					return `${val}%`;
				},
				offsetY: -20,
				style: {
					fontSize: '12px',
					colors: ['#304758'],
				},
			},

			xaxis: {
				categories: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec',
				],
				position: 'top',
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				crosshairs: {
					fill: {
						type: 'gradient',
						gradient: {
							colorFrom: '#D8E3F0',
							colorTo: '#BED1E6',
							stops: [0, 100],
							opacityFrom: 0.4,
							opacityTo: 0.5,
						},
					},
				},
				tooltip: {
					enabled: true,
				},
			},
			yaxis: {
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				labels: {
					show: false,
					formatter(val) {
						return `${val}%`;
					},
				},
			},
			title: {
				text: 'Monthly Inflation in Argentina, 2002',
				floating: true,
				offsetY: 330,
				align: 'center',
				style: {
					color: '#444',
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
				<CardBody>
					<Chart
						series={columnWithDataLabels.series}
						options={columnWithDataLabels.options}
						type='bar'
						height={350}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default ColumnWithDataLabels;
