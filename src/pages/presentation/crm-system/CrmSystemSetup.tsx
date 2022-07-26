import React, { useCallback, useMemo, useState } from 'react';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../components/icon/Icon';
import TableWidget from '../../../widgets/Table';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import Card, { CardBody } from '../../../components/bootstrap/Card';

// TODO Add select for Lead stages and Deal stages

type TColumnTitles =
	| 'Pipeline'
	| 'Lead Stages'
	| 'Deal Stages'
	| 'Sources'
	| 'Labels'
	| 'Contract Type';

const columns = {
	Pipeline: ['PIPELINE', 'ACTION'],
	'Lead Stages': ['LEAD STAGES', 'ACTION'],
	'Deal Stages': ['DEAL STAGES', 'ACTION'],
	Sources: ['SOURCES', 'ACTION'],
	Labels: ['LABELS', 'ACTION'],
	'Contract Type': ['NAME', 'ACTION'],
};

const HrmSystemSetup = () => {
	const TABS = {
		PIPELINE: 'Pipeline',
		LEAD_STAGES: 'Lead Stages',
		DEAL_STAGES: 'Deal Stages',
		SOURCES: 'Sources',
		LABELS: 'Labels',
		CONTRACT_TYPE: 'Contract Type',
	};

	const [activeTab, setActiveTab] = useState<TColumnTitles>('Pipeline');

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
