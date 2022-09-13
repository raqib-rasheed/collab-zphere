import moment, { Moment } from 'moment';

const data: {
	id: number;
	name: string;
	type: string;
	price: number;
	count: number;
	date: Moment;
}[] = [
	{
		id: 1,
		name: 'React Admin Template',
		type: 'Sales',
		price: 36,
		count: 982,
		date: moment(),
	},
	{
		id: 2,
		name: 'Omtanke Mobile UI Kit',
		type: 'Sales',
		price: 32,
		count: 423,
		date: moment().add(-1, 'day'),
	},
	{
		id: 3,
		name: 'Presentation Slides',
		type: 'Sales',
		price: 24,
		count: 678,
		date: moment().add(-1, 'day'),
	},
	{
		id: 4,
		name: '3D Animation',
		type: 'Sales',
		price: 24,
		count: 532,
		date: moment().add(-2, 'day'),
	},
	{
		id: 5,
		name: 'Travel Shopping UI Kit',
		type: 'Sales',
		price: 74,
		count: 235,
		date: moment().add(-3, 'day'),
	},
	{
		id: 6,
		name: 'Crypto 3D Icon Set',
		type: 'Sales',
		price: 58,
		count: 547,
		date: moment().add(-3, 'day'),
	},
	{
		id: 7,
		name: 'E-Learning App UI Kit',
		type: 'Sales',
		price: 39,
		count: 149,
		date: moment().add(-4, 'day'),
	},
	{
		id: 8,
		name: 'Dashboard App UI Kit',
		type: 'Sales',
		price: 36,
		count: 132,
		date: moment().add(-4, 'day'),
	},
	{
		id: 9,
		name: 'Angular Dashboard Template',
		type: 'Sales',
		price: 78,
		count: 120,
		date: moment().add(-5, 'day'),
	},
	{
		id: 10,
		name: 'React Bootstrap Template',
		type: 'Sales',
		price: 89,
		count: 112,
		date: moment().add(-7, 'day'),
	},
	{
		id: 11,
		name: 'Dashboard UI Kit',
		type: 'Sales',
		price: 24,
		count: 90,
		date: moment().add(-7, 'day'),
	},
	{
		id: 12,
		name: 'Bank App UI Kit',
		type: 'Sales',
		price: 12,
		count: 63,
		date: moment().add(-9, 'day'),
	},
];
export default data;
