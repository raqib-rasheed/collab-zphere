import React from 'react';
import Card, { CardBody, CardHeader } from '../../../../components/bootstrap/Card';
import { Editor } from 'react-draft-wysiwyg';

const OfferLetterSettings = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Offer Letter Settings</div>
				<div className='fs-6'>Edit email notification settings</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'>
					<div>
						<h5>Placeholders</h5>
						<Card>
							<CardBody>
								<div className=' my-2 d-flex'>
									<div>
										<div className='my-2'>
											Applicant Name : {'{applicant_name}'}
										</div>
										<div className='my-2'>Job type : {'{job_type}'}</div>
										<div className='my-2'>
											Days Of Week : {'{days_of_week}'}
										</div>
										<div className='my-2'>
											Salary Duration : {'{salary_duration}'}
										</div>
									</div>
									<div className='mx-5'>
										<div className='my-2'>Company Name : {'{app_name}'}</div>
										<div className='my-2'>
											Proposed Start Date : {'{start_date}'}
										</div>
										<div className='my-2'>Salary : {'{salary}'}</div>
										<div className='my-2'>
											Offer Expiration Date : {'{offer_expiration_date}'}
										</div>
									</div>
									<div>
										<div className='my-2'>Job title : {'{job_title}'}</div>
										<div className='my-2'>
											Working Location : {'{workplace_location}'}
										</div>
										<div className='my-2'>Salary Type : {'{salary_type}'}</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div>
						<h5 className='my-4'>Format</h5>
						<Editor
							editorState={undefined}
							toolbarClassName='toolbarClassName'
							wrapperClassName='wrapperClassName'
							editorClassName='editorClassName'
							onEditorStateChange={() => {}}
						/>
					</div>
				</div>
			</CardBody>
		</>
	);
};

export default OfferLetterSettings;
