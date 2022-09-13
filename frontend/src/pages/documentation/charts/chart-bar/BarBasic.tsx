import React, { useState } from 'react';
import Chart from '../../../../components/extras/Chart';

interface IBarBasicChartProps {
	colors?: string[];
	customChartHeader?: JSX.Element;
}

const BarBasic = (props: IBarBasicChartProps) => {
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
			colors: props?.colors ?? ['#3E8EF7'],
		},
	});
	return <Chart series={state.series} options={state.options as any} type='bar' height={300} />;
};

export default BarBasic;
