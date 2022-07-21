import React, { useState } from 'react';
import moment from 'moment';
import { useFormik } from 'formik';
import { Calendar as DatePicker } from 'react-date-range';
import Button from '../components/bootstrap/Button';
import PageWrapper from '../layout/PageWrapper/PageWrapper';
import Page from '../layout/Page/Page';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../components/bootstrap/Card';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../components/bootstrap/Dropdown';
import CommonTableRow from '../pages/common/CommonTableRow';
import Popovers from '../components/bootstrap/Popovers';
import data from '../common/data/dummyProductData';
import useSelectTable from '../hooks/useSelectTable';
import useDarkMode from '../hooks/useDarkMode';

const TableWidget = () => {
	const { themeStatus } = useDarkMode();

	const [date, setDate] = useState(new Date());

	const formik = useFormik({
		initialValues: {
			minPrice: '',
			maxPrice: '',
			categoryName: '3D Shapes',
			companyA: true,
			companyB: true,
			companyC: true,
			companyD: true,
		},
		onSubmit: () => {
			// alert(JSON.stringify(values, null, 2));
		},
	});

	const filteredData = data.filter(
		(f) =>
			// Category
			f.category === formik.values.categoryName &&
			// Price
			formik.values.minPrice === '' &&
			formik.values.maxPrice === '' &&
			//	Company
			((formik.values.companyA ? f.store === 'Company A' : false) ||
				(formik.values.companyB ? f.store === 'Company B' : false) ||
				(formik.values.companyC ? f.store === 'Company C' : false) ||
				(formik.values.companyD ? f.store === 'Company D' : false)),
	);

	const { selectTable } = useSelectTable(filteredData);

	const tableNames = [
		{ name: '-' },
		{ name: '-' },
		{ name: 'Image' },
		{ name: 'Name' },
		{ name: 'Sales' },
		{ name: 'Stock' },
		{ name: 'Price' },
		{ name: 'Store' },
		{ name: 'Actions' },
	];

	return (
		<>
			<PageWrapper title=''>
				{/*<Page container='fluid'>
		 		<Card stretch>
			<CardHeader>
						<CardLabel icon='ShoppingCart' iconColor='info'>
							<CardTitle>
								Top Seller{' '}
								<small className='ms-2'>
									Item:{' '}
									{selectTable.values.selectedList.length
										? `${selectTable.values.selectedList.length} / `
										: null}
									{filteredData.length}
								</small>
							</CardTitle>
						</CardLabel>
						<CardActions>
							<Dropdown isButtonGroup>
								<Popovers
									desc={
										<DatePicker
											onChange={(item) => setDate(item)}
											date={date}
											color={process.env.REACT_APP_PRIMARY_COLOR}
										/>
									}
									placement='bottom-end'
									className='mw-100'
									trigger='click'>
									<Button color='success' isLight icon='WaterfallChart'>
										{moment(date).format('MMM Do')}
									</Button>
								</Popovers>
								<DropdownToggle>
									<Button color='success' isLight />
								</DropdownToggle>
								<DropdownMenu isAlignmentEnd>
									<DropdownItem>
										<span>Last Hour</span>
									</DropdownItem>
									<DropdownItem>
										<span>Last Day</span>
									</DropdownItem>
									<DropdownItem>
										<span>Last Week</span>
									</DropdownItem>
									<DropdownItem>
										<span>Last Month</span>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
							<Button
								color='info'
								icon='CloudDownload'
								isLight
								tag='a'
								to='/somefile.txt'
								target='_blank'
								download>
								Export
							</Button>
							<Dropdown className='d-inline'>
								<DropdownToggle hasIcon={false}>
									<Button color={themeStatus} icon='MoreHoriz' />
								</DropdownToggle>
								<DropdownMenu isAlignmentEnd>
									<DropdownItem>
										<Button icon='Edit'>Edit</Button>
									</DropdownItem>
									<DropdownItem>
										<Button icon='Delete'>Delete</Button>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</CardActions>
								</CardHeader> */}
				<CardBody className='table-responsive' isScrollable>
					<table className='table table-modern table-hover'>
						<thead>
							{/* <th scope='col' className='text-end'>
										Actions
									</th> */}
							<tr className='table-body-row'>
								{tableNames.map((i) => (
									<th scope='col' key={i.name}>
										{i.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{filteredData.map((i) => (
								<CommonTableRow
									key={i.id}
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...i}
									selectName='selectedList'
									selectOnChange={selectTable.handleChange}
									selectChecked={selectTable.values.selectedList.includes(
										i.id.toString() as never,
									)}
								/>
							))}
						</tbody>
					</table>
				</CardBody>
				{/*					<CardFooter className='justify-content-center'>
						<Button color='dark' className='px-5 py-3'>
							Load More
						</Button>
					</CardFooter>
				</Card>
			</Page>*/}
			</PageWrapper>
		</>
	);
};

export default TableWidget;
