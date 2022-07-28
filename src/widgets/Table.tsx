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

interface ITableProps {
	title?: string;
	tableColumns?: { name: string }[];
	data?: ITableData[] | { id: string }[];
	displayPagintaion?: boolean;
	displayLoadMore?: boolean;
	displaySearch?: boolean;
	customTableActions?: any;
}

const TableWidget = ({
	title,
	tableColumns,
	data,
	displayPagintaion,
	displaySearch = true,
	customTableActions,
}: ITableProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const filteredData = data ?? dummyData;
	const { selectTable } = useSelectTable(filteredData);

	const shouldShowHeader = title || displayPagintaion || displaySearch;

	const tableNames = tableColumns ?? [
		{ name: '-' },
		{ name: '#' },
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
			<Card stretch>
				{shouldShowHeader && (
					<CardHeader>
						{title && <CardTitle>{title}</CardTitle>}
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
					</CardHeader>
				)}
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
							{filteredData.map((i) => (
								<CommonTableRow
									key={i.id}
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...i}
									data={i}
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
				{displayPagintaion && (
					<CardFooter className='justify-content-center'>
						<Button color='dark' className='px-5 py-3'>
							Load More
						</Button>
					</CardFooter>
				)}
			</Card>
		</>
	);
};

export default TableWidget;
