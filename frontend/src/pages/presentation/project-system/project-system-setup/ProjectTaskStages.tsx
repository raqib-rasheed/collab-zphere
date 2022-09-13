import React from 'react';
import Button from '../../../../components/bootstrap/Button';
import Card, { CardFooter } from '../../../../components/bootstrap/Card';
import ListGroup, { ListGroupItem } from '../../../../components/bootstrap/ListGroup';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';

const Bug = () => {
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader showSubHeaderRight title='Find Employee Payslip' />
			<div className='d-flex justify-content-center my-5'>
				<Card className='w-50 p-5'>
					<ListGroup>
						<ListGroupItem className='p-4'>
							<div className='fs-6 draggable-element d-flex justify-content-between'>
								To Do
								<div>
									<Button className='mx-1' color='info' icon='edit' />
									<Button className='mx-1' color='danger' icon='trash' />
								</div>
							</div>
						</ListGroupItem>
						<ListGroupItem className='p-4'>
							<div className='fs-6 draggable-element d-flex justify-content-between'>
								Review
								<div>
									<Button className='mx-1' color='info' icon='edit' />
									<Button className='mx-1' color='danger' icon='trash' />
								</div>
							</div>
						</ListGroupItem>
						<ListGroupItem className='p-4'>
							<div className='fs-6 draggable-element d-flex justify-content-between'>
								In Progress
								<div>
									<Button className='mx-1' color='info' icon='edit' />
									<Button className='mx-1' color='danger' icon='trash' />
								</div>
							</div>
						</ListGroupItem>
						<ListGroupItem className='p-4'>
							<div className='fs-6 draggable-element d-flex justify-content-between'>
								Done
								<div>
									<Button className='mx-1' color='info' icon='edit' />
									<Button className='mx-1' color='danger' icon='trash' />
								</div>
							</div>
						</ListGroupItem>
					</ListGroup>
					<CardFooter className='p-2 m-0'>
						<p>
							Note : You can easily change order of project task stage using drag &
							drop.
						</p>
					</CardFooter>
				</Card>
			</div>
		</PageWrapper>
	);
};

export default Bug;
