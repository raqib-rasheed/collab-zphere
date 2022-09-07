import React, { useCallback, useMemo, useState } from 'react';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../components/icon/Icon';
import TableWidget from '../../../widgets/Table';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import Card, { CardBody } from '../../../components/bootstrap/Card';

type TColumnTitles =
	| 'Branch'
	| 'Department'
	| 'Designation'
	| 'Leave Type'
	| 'Documnet Type'
	| 'Payslip Type'
	| 'Allowance Option'
	| 'Loan Option'
	| 'Deduction Option'
	| 'Goal Type'
	| 'Training Type'
	| 'Award Type'
	| 'Termination Type'
	| 'Job Category'
	| 'Job Stage'
	| 'Performance Type';

const columns = {
	Branch: ['BRANCH', 'ACTION'],
	Department: ['BRANCH', 'DEPARTMENT', 'ACTION'],
	Designation: ['BRANCH', 'DESIGNATION', 'ACTION'],
	'Leave Type': ['LEAVE TYPE', 'DAYS/YEAR', 'ACTION'],
	'Documnet Type': ['DOCUMENT', 'REQUIRED FIELD', 'ACTION'],
	'Payslip Type': ['PAYSLIP TYPE', 'ACTION'],
	'Allowance Option': ['ALLOWANCE OPTION', 'ACTION'],
	'Loan Option': ['LOAN OPTION', 'ACTION'],
	'Deduction Option': ['DEDUCTION OPTION', 'ACTION'],
	'Goal Type': ['GOAL TYPE', 'ACTION'],
	'Training Type': ['TRAINING TYPE', 'ACTION'],
	'Award Type': ['AWARD TYPE', 'ACTION'],
	'Termination Type': ['TERMINATION TYPE', 'ACTION'],
	'Job Category': ['CATEGORY', 'ACTION'],
	'Job Stage': ['JOB STAGE', 'ACTION'],
	'Performance Type': ['NAME', 'ACTION'],
	Competencies: ['NAME', 'TYPE', 'ACTION'],
};

const HrmSystemSetup = () => {
	const TABS = {
		BRANCH: 'Branch',
		DEPARTMENT: 'Department',
		DESIGNATION: 'Designation',
		LEAVE_TYPE: 'Leave Type',
		DOCUMENT_TYPE: 'Documnet Type',
		PAYSLIP_TYPE: 'Payslip Type',
		ALLOWANCE_OPTION: 'Allowance Option',
		LOAN_OPTION: 'Loan Option',
		DEDUCTION_OPTION: 'Deduction Option',
		GOAL_TYPE: 'Goal Type',
		TRAINING_TYPE: 'Training Type',
		AWARD_TYPE: 'Award Type',
		TERMINATION_TYPE: 'Termination Type',
		JOB_CATEGORY: 'Job Category',
		JOB_STAGE: 'Job Stage',
		PERFORMANCE_TYPE: 'Performance Type',
		COMPETENCIES: 'Competencies',
	};

	const [activeTab, setActiveTab] = useState<TColumnTitles>('Branch');

	const generateColumns = useMemo(() => {
		const titles = columns[activeTab];
		return titles?.map((name) => ({ name }));
	}, [activeTab]);

	const generateDummyData = useCallback(
		(count: number) => {
			const titles = columns[activeTab];
			let i = count;
			const data = [];
			while (i > 0) {
				let obj = {};
				titles?.forEach((name) => {
					const key = name !== 'ACTION' && !obj.hasOwnProperty('id') ? 'id' : name;
					const value =
						name === 'ACTION' ? (
							<>
								<Icon size='lg' className='mx-2' icon='Edit' color='success' />
								<Icon size='lg' className='mx-2' icon='Trash' color='danger' />
							</>
						) : (
							'demo text'
						);
					obj = { ...obj, [key]: value };
				});
				data.push(obj);
				i--;
			}
			return data;
		},
		[activeTab],
	);

	return (
		<PageWrapper title='Holidays'>
			<PresentaionPagesSubHeader title='Manage Competencies' />
			<Page container='fluid'>
				<div className='row h-100'>
					<div className='col-xxl-3 col-xl-4 col-lg-6'>
						<Card stretch>
							<CardBody isScrollable>
								<div className='row g-3'>
									{Object.values(TABS)?.map((tab: any) => {
										return (
											<div key={tab} className='col-12'>
												<Button
													color='info'
													className='w-100 p-3'
													isLight={tab !== activeTab}
													onClick={() => setActiveTab(tab)}>
													{tab}
												</Button>
											</div>
										);
									})}
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xxl-9 col-xl-8 col-lg-6'>
						<TableWidget
							data={generateDummyData(8) as any}
							tableColumns={generateColumns}
						/>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default HrmSystemSetup;
