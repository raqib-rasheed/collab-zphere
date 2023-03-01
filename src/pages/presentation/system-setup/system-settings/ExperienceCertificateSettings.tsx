import React from 'react';
import Card, { CardBody, CardHeader } from '../../../../components/bootstrap/Card';
import { Editor } from 'react-draft-wysiwyg';

const ExperienceCertificateSettings = () => {
	return (
		<>
			<CardHeader size={'sm'} borderSize={1} className='d-block'>
				<div className='fw-bold fs-5'>Experience Certificate Settings</div>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'>
					<div>
						<h5>Placeholders</h5>
						<Card>
							<CardBody>
								<div className=' my-2 d-flex'>
									<div>
										<div className='my-2'>Company Name : {'{app_name}'}</div>
										<div className='my-2'>Designation : {'{designation}'}</div>
										<div className='my-2'>Start Time : {'{start_time}'}</div>
									</div>
									<div className='mx-5'>
										<div className='my-2'>
											Employee Name : {'{employee_name}'}
										</div>
										<div className='my-2'>Start Date : {'{start_date}'}</div>
										<div className='my-2'>End Time : {'{end_time}'}</div>
									</div>
									<div>
										<div className='my-2'>Date of Issuance : {'{date}'}</div>
										<div className='my-2'>Branch : {'{branch}'}</div>
										<div className='my-2'>
											Number of Hours : {'{total_hours}'}
										</div>
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

export default ExperienceCertificateSettings;
