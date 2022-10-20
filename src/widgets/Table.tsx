import React, { useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../components/bootstrap/Card';
import CommonTableRow from '../pages/common/CommonTableRow';
import dummyData, { ITableData } from '../common/data/dummyProductData';
import useSelectTable from '../hooks/useSelectTable';
import PaginationButtons from '../components/PaginationButtons';
import Input from '../components/bootstrap/forms/Input';
import Button from '../components/bootstrap/Button';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface ITableProps {
	title?: string;
	tableColumns?: { name: string; key?: string; customColumn?: boolean }[];
	data?: ITableData[] | { id: string }[];
	displayPagintaion?: boolean;
	displayLoadMore?: boolean;
	displaySearch?: boolean;
	customTableActions?: any;
	hideTableActions?: boolean;
	getTableDataUrl?: string;
	// -->>>buttonsRowId is passed to each row actions so that we can keep track of the
	//Node ids to apply action in the cache.
	//When user edits a particular column in the table we need to find the
	//The redundant node in the cache and make necessary changes to it.
	rowActions?: (buttonsRowId?: number) => JSX.Element;
	customColumnItems?: { key: string; component: JSX.Element }[];
}

const TableWidget = ({
	title,
	tableColumns,
	data,
	displayPagintaion = true,
	displaySearch = true,
	customTableActions,
	displayLoadMore = false,
	hideTableActions = false,
	getTableDataUrl = '',
	rowActions,
	customColumnItems,
}: ITableProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const filteredData = data ?? dummyData;
	const { selectTable } = useSelectTable(filteredData);

	const shouldShowHeader = title || displayPagintaion || displaySearch || customTableActions;
	const shouldShowHeaderActions = customTableActions || (shouldShowHeader && !hideTableActions);

	const tableNames = tableColumns ?? [{ name: 'Name' }, { name: 'END DATE' }, { name: 'STATUS' }];
	const getTableData = () => axios.get(getTableDataUrl);
	const {
		data: tableData,
		error,
		isLoading,
	} = useQuery([getTableDataUrl?.replace('/', '')], getTableData);
	console.log(tableData?.data, error, isLoading);
	const cardFooter = displayLoadMore && (
		<CardFooter className='justify-content-center'>
			<Button color='dark' className='px-5 py-3'>
				Load More
			</Button>
		</CardFooter>
	);
	const cardHeader = shouldShowHeader && (
		<CardHeader>
			{title && <CardTitle>{title}</CardTitle>}
			{shouldShowHeaderActions && (
				<CardActions className='d-flex justify-content-between align-items-center w-100'>
					{displayPagintaion && (
						<div>
							<PaginationButtons
								data={filteredData}
								label='items'
								setCurrentPage={setCurrentPage}
								currentPage={currentPage}
								perPage={perPage}
								setPerPage={setPerPage}
							/>
						</div>
					)}
					{displaySearch && (
						<div>
							<Input placeholder='Search' />
						</div>
					)}
					{customTableActions && customTableActions}
				</CardActions>
			)}
		</CardHeader>
	);

	if (error) {
		return (
			<Card stretch>
				{cardHeader}
				<CardBody className='table-responsive' isScrollable>
					<h6 className='mx-auto'>Oops ! Something went wrong!</h6>
				</CardBody>
				{cardFooter}
			</Card>
		);
	}

	if (isLoading) {
		return (
			<Card stretch>
				{cardHeader}
				<CardBody className='table-responsive' isScrollable>
					<table className='table table-modern table-hover'>
						<thead>
							<tr className='table-body-row'>
								{tableColumns &&
									tableColumns.map((i, index) => (
										<th scope='col' key={index}>
											{i.name}
										</th>
									))}
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				</CardBody>
				{cardFooter}
			</Card>
		);
	}
	return (
		<>
			<Card stretch>
				{cardHeader}
				<CardBody className='table-responsive' isScrollable>
					<table className='table table-modern table-hover'>
						<thead>
							<tr className='table-body-row'>
								{tableNames.map((i) => (
									<th scope='col' key={i.name}>
										{i.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{tableData?.data?.data &&
								tableData?.data?.data.map((i: any) => (
									<CommonTableRow
										key={i.id + JSON.stringify(Math.random() * Math.random())}
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...i}
										data={tableColumns?.map((column) => {
											const customCol = customColumnItems?.find(
												(item) => item?.key === column?.key,
											)?.component;
											return customColumnItems && column?.customColumn
												? customCol
												: column?.key
												? i[column?.key!]
												: rowActions && rowActions(i?.id);
										})}
										selectName='selectedList'
										selectOnChange={selectTable.handleChange}
										selectChecked={selectTable.values.selectedList.includes(
											i?.id?.toString() as never,
										)}
									/>
								))}
						</tbody>
					</table>
				</CardBody>
				{cardFooter}
			</Card>
		</>
	);
};

export default TableWidget;
