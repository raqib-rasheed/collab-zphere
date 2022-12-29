import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import Button from '../../../../components/bootstrap/Button';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../../../components/bootstrap/OffCanvas';
import Input from '../../../../components/bootstrap/forms/Input';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';
import Select from '../../../../components/bootstrap/forms/Select';
import { Calendar as DatePicker } from 'react-date-range';
import Popovers from '../../../../components/bootstrap/Popovers';
import useDarkMode from '../../../../hooks/useDarkMode';
import Textarea from '../../../../components/bootstrap/forms/Textarea';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Contract = () => {
	const { themeStatus } = useDarkMode();
	const [addNewModalVisible, setAddNewModalVisible] = useState(false);
	const [shouldRefetch, setShouldRefetch] = useState(false);
	const columns = [
		{ key: 'subject', name: 'SUBJECT' },
		{ key: 'client_name', name: 'CLIENT' },
		{ key: 'project', name: 'PROJECT' },
		{ key: 'type', name: 'CONTRACT TYPE' },
		{ key: 'value', name: 'CONTRACT VALUE' },
		{ key: 'start_date', name: 'START DATE' },
		{ key: 'end_date', name: 'END DATE' },
		{ name: 'ACTION' },
	];
	const rowActions = (id?: number) => (
		<>
			<Button size='sm' className='mx-2' icon='FileCopy' color='info' />
			<Link to={`/crm-system/contract/${id}`}>
				<Button size='sm' className='mx-2' icon='Eye' color='info' />
			</Link>
			<Button size='sm' className='mx-2' icon='Edit' color='info' />
			<Button size='sm' className='mx-2' icon='Delete' color='info' />
		</>
	);

	const formik = useFormik({
		initialValues: {
			formActiveRadio: 'on',
			formName: '',
			subject: '',
			client: '',
			projects: '',
			contractType: '',
			contractValue: '',
			startDate: new Date(),
			endDate: new Date(),
			description: '',
		},
		// validate: (values) => {
		// 	let errors = {} as any;
		// 	if (!values?.formName) {
		// 		errors.name = 'Required!';
		// 	}
		// 	if (!values.formActiveRadio) {
		// 		errors.email = 'Required!';
		// 	}
		// 	return errors;
		// },
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
			size='lg'>
			<ModalHeader setIsOpen={setAddNewModalVisible}>
				<OffCanvasTitle id='upcomingEdit'>Create New Contract</OffCanvasTitle>
			</ModalHeader>
			<ModalBody>
				<div className='row g-4'>
					<div className='col-12'>
						<FormGroup id='formSubject' label='Subject' isFloating>
							<Input
								value={formik.values.subject}
								onChange={formik.handleChange}
								required
							/>
						</FormGroup>
					</div>
					<div className='col-6'>
						<FormGroup id='formClient' label='Client' isFloating>
							<Select
								list={[
									{
										value: '',
										text: '',
										label: '',
									},
								]}
								ariaLabel='assssd'
								value={formik.values.client}
								onChange={formik.handleChange}
							/>
						</FormGroup>
					</div>
					<div className='col-6'>
						<FormGroup id='formProjrct' label='Projects' isFloating>
							<Select
								list={[
									{
										value: '',
										text: '',
										label: '',
									},
								]}
								ariaLabel='as'
								value={formik.values.projects}
								onChange={formik.handleChange}></Select>
						</FormGroup>
					</div>
					<div className='col-6'>
						<FormGroup id='formContractType' label='Contract Type' isFloating>
							<Select
								list={[
									{
										value: '',
										text: '',
										label: '',
									},
								]}
								ariaLabel='as'
								value={formik.values.contractType}
								onChange={formik.handleChange}
							/>
						</FormGroup>
					</div>
					<div className='col-6'>
						<FormGroup id='formContractValue' label='Contract Value' isFloating>
							<Input
								ariaLabel='as'
								value={formik.values.contractValue}
								onChange={formik.handleChange}
							/>
						</FormGroup>
					</div>
					<div className='col-6'>
						<FormGroup id='formStartDate' label='Start Date'>
							<Popovers
								desc={
									<DatePicker
										onChange={(item) => {}}
										date={formik.values.startDate}
										color={process.env.REACT_APP_PRIMARY_COLOR}
									/>
								}
								placement='bottom-start'
								className='mw-100'
								trigger='click'>
								<Button color={themeStatus}>
									{`${moment(new Date())
										.startOf('weeks')
										.format('MMM Do')} - ${moment(new Date())
										.endOf('weeks')
										.format('MMM Do')}`}
								</Button>
							</Popovers>
						</FormGroup>
					</div>
					<div className='col-6'>
						<FormGroup id='formEndDate' label='End Date'>
							<Popovers
								onClick={(e) => e.stopPropagation()}
								desc={
									<DatePicker
										onChange={(item) => {}}
										date={formik.values.endDate}
										color={process.env.REACT_APP_PRIMARY_COLOR}
									/>
								}
								placement='bottom-start'
								className='mw-100'
								trigger='click'>
								<Button color={themeStatus}>
									{`${moment(new Date())
										.startOf('weeks')
										.format('MMM Do')} - ${moment(new Date())
										.endOf('weeks')
										.format('MMM Do')}`}
								</Button>
							</Popovers>
						</FormGroup>
					</div>
					<div className='col-12'>
						<FormGroup id='formDescription' label='Description' isFloating>
							<Textarea
								placeholder='Type Subject'
								value={formik.values.description}
								onChange={formik.handleChange}
								rows={5}
							/>
						</FormGroup>
					</div>
				</div>
			</ModalBody>
			<ModalFooter className='bg-transparent'>
				<Button color='info' className='w-30' onClick={formik.handleSubmit}>
					Cancel
				</Button>
				<Button color='info' className='w-30' onClick={formik.handleSubmit}>
					Save
				</Button>
			</ModalFooter>
		</Modal>
	);
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader
				showAddNewButton={true}
				showSubHeaderRight={true}
				title='Manage Contract'
				addNewModal={addNewModal}
				setAddNewModalVisible={setAddNewModalVisible}
			/>
			<Page container='fluid'>
				<TableWidget
					getTableDataUrl='/contract'
					rowActions={rowActions}
					tableColumns={columns}
					title=''
				/>
			</Page>
		</PageWrapper>
	);
};

export default Contract;
