import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import Button from '../../../../components/bootstrap/Button';
import Checks, { ChecksGroup } from '../../../../components/bootstrap/forms/Checks';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import { InputGroupText } from '../../../../components/bootstrap/forms/InputGroup';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../../../components/bootstrap/OffCanvas';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import { TColor } from '../../../../type/color';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const FormBuilder = () => {
	const [addNewModalVisible, setAddNewModalVisible] = useState(false);
	const [shouldRefetch, setShouldRefetch] = useState(false);
	const columns = [
		{ name: 'NAME', key: 'name' },
		{ name: 'RESPONSE', key: 'created_at' },
		{ name: 'ACTIONS' },
	];
	const rowActions = (buttonsRowId?: number) => {
		const commonProps = {
			className: 'mx-2',
			size: 'sm' as 'sm' | null | 'lg',
			color: 'info' as TColor | 'link' | 'brand' | 'brand-two' | 'storybook',
			id: `formBuilder-${buttonsRowId}`,
		};
		async function handleRemoveFormBuilderItem() {
			await axios.post('/del-FormBuilder?FormBuilder_id=' + buttonsRowId);
		}
		return (
			<div>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Button {...commonProps} icon='CenterFocusStrong' />
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Button {...commonProps} icon='Recycling' />
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Button {...commonProps} icon='FileCopy' />
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Button {...commonProps} icon='TableChart' />
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Button {...commonProps} icon='Eye' />
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Button {...commonProps} icon='Edit' />
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Button onClick={handleRemoveFormBuilderItem} {...commonProps} icon='Delete' />
			</div>
		);
	};
	const formik = useFormik({
		initialValues: {
			formActiveRadio: 'on',
			formName: '',
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: async (values) => {
			await axios.post('/FormBuilder-store', {
				name: values.formName,
				code: `LPK- ${Math.random()}`,
				is_active: values.formActiveRadio,
				user_id: 1,
			});
			setAddNewModalVisible(false);
			setShouldRefetch(true);
		},
	});
	const addNewModal = (
		<Modal
			setIsOpen={setAddNewModalVisible}
			isOpen={addNewModalVisible}
			titleId='upcomingEdit'
			size='sm'>
			<ModalHeader setIsOpen={setAddNewModalVisible}>
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
				<Button color='info' className='w-100' onClick={formik.handleSubmit}>
					Save
				</Button>
			</ModalFooter>
		</Modal>
	);
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader
				showSubHeaderRight
				showAddNewButton={true}
				title='Manage Form Builder'
				addNewModal={addNewModal}
				setAddNewModalVisible={setAddNewModalVisible}
			/>
			<Page container='fluid'>
				<TableWidget
					shouldRefetch={shouldRefetch}
					setShouldRefetch={setShouldRefetch}
					getTableDataUrl='/FormBuilder'
					tableColumns={columns}
					title=''
					rowActions={rowActions}
				/>
			</Page>
		</PageWrapper>
	);
};

export default FormBuilder;
