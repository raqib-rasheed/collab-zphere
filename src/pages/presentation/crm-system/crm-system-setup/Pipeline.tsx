import React, { useState } from 'react';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../../../components/bootstrap/Modal';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import { OffCanvasTitle } from '../../../../components/bootstrap/OffCanvas';
import { InputGroupText } from '../../../../components/bootstrap/forms/InputGroup';
import Checks, { ChecksGroup } from '../../../../components/bootstrap/forms/Checks';
import Button from '../../../../components/bootstrap/Button';
import TableWidget from '../../../../widgets/Table';
import { useFormik } from 'formik';

const Pipeline = () => {
	const [editModalVisible, setEditModalVisible] = useState(false);
	const formik = useFormik({
		initialValues: {
			formActiveRadio: 'on',
			formName: '',
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: (values) => {
			// console.log(JSON.stringify(values, null, 2));
		},
	});
	const editModal = (
		<Modal
			setIsOpen={setEditModalVisible}
			isOpen={editModalVisible}
			titleId='upcomingEdit'
			size='sm'>
			<ModalHeader setIsOpen={setEditModalVisible}>
				<OffCanvasTitle id='upcomingEdit'>Create New Form</OffCanvasTitle>
			</ModalHeader>
			<ModalBody>
				<div className='row g-4'>
					<div className='col-12'>
						<FormGroup id='formName' label='Name' isFloating>
							<Input
								placeholder='Name'
								value={formik.values.formName}
								onChange={formik.handleChange}
							/>
						</FormGroup>
					</div>
					<div className='col-12'>
						<FormGroup defaultChecked label='Active'>
							<InputGroupText>
								<ChecksGroup className='d-flex'>
									<div className='me-2'>
										<Checks
											id='formActiveOn'
											name='formActiveRadio'
											type='radio'
											onChange={formik.handleChange}
											value='on'
											checked={formik.values.formActiveRadio === 'on'}
											label='On'
										/>
									</div>
									<Checks
										id='formActiveOff'
										name='formActiveRadio'
										type='radio'
										onChange={formik.handleChange}
										value='off'
										checked={formik.values.formActiveRadio === 'off'}
										label='Off'
									/>
								</ChecksGroup>
							</InputGroupText>
						</FormGroup>
					</div>
				</div>
			</ModalBody>
			<ModalFooter className='bg-transparent'>
				<Button color='info' className='w-100' onClick={() => {}}>
					Save
				</Button>
			</ModalFooter>
		</Modal>
	);

	const commonRowActions = () => {
		return (
			<>
				<Button onClick={() => setEditModalVisible(true)} icon='Edit' />
				<Button className='mx-2' icon='Delete' />
			</>
		);
	};
	return (
		<>
			<TableWidget
				rowActions={commonRowActions}
				getTableDataUrl='/pipeline'
				tableColumns={[{ name: 'PIPELINE', key: 'name' }, { name: 'ACTION' }]}
			/>
			{editModalVisible && editModal}
		</>
	);
};

export default Pipeline;
