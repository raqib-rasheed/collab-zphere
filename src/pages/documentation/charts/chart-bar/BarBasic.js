import React, { useState } from 'react';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const BarBasic = () => {
	const [state] = useState({
		series: [
			{
				data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: '100%',
				toolbar: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			},
		},
	});
	return (
		<Card stretch>
			<CardBody>
				<Chart series={state.series} options={state.options} type='bar' height={350} />
			</CardBody>
		</Card>
	);
};

export default BarBasic;
