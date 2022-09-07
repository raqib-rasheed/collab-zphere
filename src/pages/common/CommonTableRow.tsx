import React, { FC } from 'react';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames';
// import Checks from '../../components/bootstrap/forms/Checks';
// import Chart from '../../components/extras/Chart';
// import Badge from '../../components/bootstrap/Badge';
// import Button from '../../components/bootstrap/Button';
// import useDarkMode from '../../hooks/useDarkMode';
import { ApexOptions } from 'apexcharts';

interface ICommonTableRowProps {
	id: string | number;
	image?: string;
	name?: string;
	category?: string;
	series?: ApexOptions['series'];
	color?: string;
	stock?: string | number;
	price?: number;
	store?: string;
	selectOnChange?: any;
	selectChecked?: any;
	selectName?: string;
	data?: {};
}
const CommonTableRow: FC<ICommonTableRowProps> = ({
	id,
	image,
	name,
	category,
	series,
	color,
	stock,
	price,
	store,
	selectOnChange,
	selectChecked,
	selectName,
	data,
}) => {
	// const { darkModeStatus } = useDarkMode();

	// const dummyOptions: ApexOptions = {
	// 	colors: [color],
	// 	chart: {
	// 		type: 'line',
	// 		width: 100,
	// 		height: 35,
	// 		sparkline: {
	// 			enabled: true,
	// 		},
	// 	},
	// 	tooltip: {
	// 		theme: 'dark',
	// 		fixed: {
	// 			enabled: false,
	// 		},
	// 		x: {
	// 			show: false,
	// 		},
	// 		y: {
	// 			title: {
	// 				// eslint-disable-next-line @typescript-eslint/no-unused-vars
	// 				formatter(seriesName: string) {
	// 					return seriesName;
	// 				},
	// 			},
	// 		},
	// 	},
	// 	stroke: {
	// 		curve: 'smooth',
	// 		width: 2,
	// 	},
	// };
	return (
		<tr>
			{data &&
				Object?.entries(data)?.map((item: any) => {
					return (
						<td key={id}>
							<span>{item[1]}</span>
						</td>
					);
				})}
			{/* <th scope='row'>{id}</th>
			{image && (
				<td>
					<Link to={`afs`}>
						<img src={image} alt={name} width={54} height={54} />
					</Link>
				</td>
			)}
			<td>
				<div>
					<Link
						className={classNames('fw-bold', {
							'link-dark': !darkModeStatus,
							'link-light': darkModeStatus,
						})}
						to={'demo text'}>
						{name}
					</Link>
					<div className='text-muted'>
						<small>{category}</small>
					</div>
				</div>
			</td>
			<td>
				<Chart
					series={series}
					options={dummyOptions}
					type={dummyOptions.chart?.type}
					height={dummyOptions.chart?.height}
					width={dummyOptions.chart?.width}
				/>
			</td>
			<td>
				<span>{stock}</span>
			</td>
			<td>
				<span>
					{price?.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</span>
			</td>
			<td className='h5'>
				<Badge
					color={
						(store === 'Company A' && 'danger') ||
						(store === 'Company B' && 'warning') ||
						(store === 'Company C' && 'success') ||
						'info'
					}>
					{store}
				</Badge>
			</td>
			<td className='text-end'>
				<Button color='dark' isLight icon='Edit' tag='a' to={'demo text'} />
			</td> */}
		</tr>
	);
};

export default CommonTableRow;
