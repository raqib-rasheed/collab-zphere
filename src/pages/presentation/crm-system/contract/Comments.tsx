import React from 'react';
import USERS from '../../../../common/data/userDummyData';
import Avatar from '../../../../components/Avatar';
import Card, { CardBody, CardHeader } from '../../../../components/bootstrap/Card';
import Textarea from '../../../../components/bootstrap/forms/Textarea';
import ListGroup, { ListGroupItem } from '../../../../components/bootstrap/ListGroup';
import Page from '../../../../layout/Page/Page';

const Comments = () => {
	return (
		<Page container='fluid'>
			<Card stretch={true} className='p-4'>
				<CardHeader size='lg'>Comments</CardHeader>
				<CardBody>
					<Textarea placeholder='Add a comment' />
					<ListGroup className='my-2' isFlush={true}>
						<ListGroupItem>
							<Avatar
								src={USERS.JOHN.src}
								color={'info'}
								className='rounded-circle'
								shadow='sm'
								size={40}
							/>
						</ListGroupItem>
					</ListGroup>
				</CardBody>
			</Card>
		</Page>
	);
};

export default Comments;
