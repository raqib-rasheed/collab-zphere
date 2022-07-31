import React from 'react';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, { CardBody, CardFooter, CardHeader } from '../../../components/bootstrap/Card';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import ListGroup, { ListGroupItem } from '../../../components/bootstrap/ListGroup';
import Badge from '../../../components/bootstrap/Badge';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import Avatar from '../../../components/Avatar';
import USERS from '../../../common/data/userDummyData';
import Button from '../../../components/bootstrap/Button';

const ListFluidPage = () => {
	return (
		<PageWrapper title='Support'>
			<PresentaionPagesSubHeader showSubHeaderRight showAddNewButton title='Support Reply' />
			<Page container='fluid'>
				<div className='row justify-content-between px-3'>
					<Card className='col-4'>
						<CardHeader>
							<h5>Rerum molestiae volu</h5>
						</CardHeader>
						<CardBody>
							<ListGroup>
								<ListGroupItem>
									<div className='d-flex justify-content-between'>
										<h6>Created By:</h6>
										<p>090117</p>
									</div>
								</ListGroupItem>

								<ListGroupItem>
									<div className='d-flex justify-content-between'>
										<h6>Ticket Code:</h6>
										<p>Rajodiya Infotech</p>
									</div>
								</ListGroupItem>

								<ListGroupItem>
									<div className='d-flex justify-content-between'>
										<h6>Priority:</h6>
										<Badge className='px-3 py-2' color='success'>
											Low
										</Badge>
									</div>
								</ListGroupItem>

								<ListGroupItem>
									<div className='d-flex justify-content-between'>
										<h6>Status:</h6>
										<Badge className='px-3 py-2' color='success'>
											Open
										</Badge>
									</div>
								</ListGroupItem>
							</ListGroup>
						</CardBody>
						<CardFooter>
							<div>
								<p className='text-muted my-1'>Start Date</p>
								<h6>Jan 10, 2022</h6>
							</div>
						</CardFooter>
					</Card>
					<Card className='col-7'>
						<CardHeader>
							<h5>Comments</h5>
						</CardHeader>
						<CardBody>
							<div className='d-flex flex-column'>
								<Textarea rows={5} placeholder='Your comment' />
								<div className='d-flex justify-content-end my-3'>
									<Button color='success'>Send</Button>
								</div>
							</div>
							<ListGroup>
								<ListGroupItem>
									<div className='d-flex'>
										<Avatar src={USERS.JOHN.src} className='mx-3' size={42} />
										<div>
											<h6 className='my-0'>Rajodiya Infotech</h6>
											<p className='my-0'>gdfgfdgdfdg</p>
											<span className='text-muted'>2022-03-23 11:17:47</span>
										</div>
									</div>
								</ListGroupItem>

								<ListGroupItem>
									<div className='d-flex'>
										<Avatar src={USERS.GRACE.src} className='mx-3' size={42} />
										<div>
											<h6 className='my-0'>Mick Aston</h6>
											<p className='my-0'>rttt</p>
											<span className='text-muted'>2022-05-12 07:10:45</span>
										</div>
									</div>
								</ListGroupItem>
							</ListGroup>
						</CardBody>
					</Card>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ListFluidPage;
