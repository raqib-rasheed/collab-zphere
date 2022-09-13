import React from 'react';
import Badge from '../components/bootstrap/Badge';
import Card, { CardHeader } from '../components/bootstrap/Card';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../components/bootstrap/Dropdown';
import Icon from '../components/icon/Icon';

interface ITableGridViewProps {
	data: { id: string }[];
}

const TableGridView = ({ data }: ITableGridViewProps) => {
	return (
		<div className='d-flex row p-4 justify-content-between'>
			{data?.map((item: any, index) => {
				return (
					<Card className='p-4' style={{ width: '22.5%' }} key={item?.id}>
						<CardHeader className='justify-content-end p-1'>
							<div className=''>
								<Dropdown direction={'down'}>
									<DropdownToggle>
										<Icon icon='ThreeDotsVertical' />
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem>
											<span>
												<Icon icon='Edit' />
												Edit
											</span>
										</DropdownItem>
										<DropdownItem>
											<span>
												<Icon icon='Trash' />
												Delete
											</span>
										</DropdownItem>
										<DropdownItem>
											<span>
												<Icon icon='Send' />
												Invite User
											</span>
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</div>
						</CardHeader>
						<Badge
							className='my-2 py-2'
							style={{ width: '6rem' }}
							color={index % 2 === 0 ? 'success' : 'info'}>
							{index % 2 === 0 ? 'Medium' : 'Low'}
						</Badge>
						<h5>Demo Content</h5>
						<p className='text-muted'>{Date.now()}</p>
					</Card>
				);
			})}
		</div>
	);
};
export default TableGridView;
