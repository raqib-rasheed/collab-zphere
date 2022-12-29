import React from 'react';
import Card from '../../../../components/bootstrap/Card';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';

const GeneralDetails = () => {
	return (
		<Page container='fluid'>
			<div className='w-100 d-flex justify-content-between'>
				<Card className='p-4 align-self-start' style={{ width: '20%' }}>
					<div className='d-flex justify-content-between'>
						<div className='d-flex'>
							<div className='mx-3'>
								<Icon size='2x' icon='AccountBox' />
							</div>
							<div>
								<h6 className='text-muted'>Attachment</h6>
								<h6>8</h6>
							</div>
						</div>
					</div>
				</Card>
				<Card className='p-4 align-self-start' style={{ width: '20%' }}>
					<div className='d-flex justify-content-between'>
						<div className='d-flex'>
							<div className='mx-3'>
								<Icon size='2x' icon='Comment' />
							</div>
							<div>
								<h6 className='text-muted'>Comments</h6>
								<h6>8</h6>
							</div>
						</div>
					</div>
				</Card>
				<Card className='p-4 align-self-start' style={{ width: '20%' }}>
					<div className='d-flex justify-content-between'>
						<div className='d-flex'>
							<div className='mx-3'>
								<Icon size='2x' icon='Note' />
							</div>
							<div>
								<h6 className='text-muted'>Notes</h6>
								<h6>8</h6>
							</div>
						</div>
					</div>
				</Card>
				<Card className='p-4' style={{ width: '27%' }}>
					<div className='d-flex justify-content-between'>
						<div className='d-flex flex-column'>
							<h6>
								Subject
								<span className='text-muted'>: 12</span>
							</h6>
							<h6>
								Project
								<span className='text-muted'>: 12</span>
							</h6>
							<h6>
								Value
								<span className='text-muted'>: 12</span>
							</h6>
							<h6>
								Type
								<span className='text-muted'>: 12</span>
							</h6>
							<h6>
								Status
								<span className='text-muted'>: 12</span>
							</h6>
							<h6>
								Start Date
								<span className='text-muted'>: 12</span>
							</h6>
							<h6>
								End Date
								<span className='text-muted'>: 12</span>
							</h6>
						</div>
					</div>
				</Card>
			</div>
			<textarea
				value={
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto facere magnam quos,et fuga cupiditate suscipit reiciendis veritatis fugit debitis architecto modisimilique assumenda ut aperiam vel, deleniti recusandae sint.'
				}
				rows={7}></textarea>
		</Page>
	);
};

export default GeneralDetails;
