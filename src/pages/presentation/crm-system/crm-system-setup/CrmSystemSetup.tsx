import React, { useMemo, useState } from 'react';
import Button from '../../../../components/bootstrap/Button';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import TableWidget from '../../../../widgets/Table';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import Card, { CardBody } from '../../../../components/bootstrap/Card';

// TODO Add select for Lead stages and Deal stages

type TColumnTitles =
	| 'Pipeline'
	| 'Lead Stages'
	| 'Deal Stages'
	| 'Sources'
	| 'Labels'
	| 'Contract-Type';

const columns = {
	Pipeline: [{ name: 'PIPELINE', key: 'name' }, { name: 'ACTION' }],
	'Lead Stages': ['LEAD STAGES', 'ACTION'],
	'Deal Stages': ['DEAL STAGES', 'ACTION'],
	Sources: [
		{ name: 'SOURCES', key: 'name' },
		{ name: 'ACTION', key: 'name' },
	],
	Labels: ['LABELS', 'ACTION'],
	'Contract-Type': [{ name: 'NAME', key: 'name' }, { name: 'ACTION' }],
};

const CrmSystemSetup = () => {
	const TABS = {
		PIPELINE: 'Pipeline',
		LEAD_STAGES: 'Lead Stages',
		DEAL_STAGES: 'Deal Stages',
		SOURCES: 'Sources',
		LABELS: 'Labels',
		CONTRACT_TYPE: 'Contract-Type',
	};

	const [activeTab, setActiveTab] = useState<TColumnTitles>('Pipeline');

	const generateColumns = useMemo(() => {
		return columns[activeTab];
	}, [activeTab]);

	const getTabContent = useMemo(() => {
		console.log(generateColumns);
		const contentsWithTable = ['Pipeline', 'Sources', 'Contract-Type'];
		if (contentsWithTable.includes(activeTab)) {
			return (
				<TableWidget
					getTableDataUrl={`/${activeTab.toLocaleLowerCase()}`}
					tableColumns={generateColumns as any}
				/>
			);
		} else return <></>;
	}, [activeTab, generateColumns]);

	return (
		<PageWrapper title='Holidays'>
			<PresentaionPagesSubHeader title={`Manage ${activeTab}`} />
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
					<div className='col-xxl-9 col-xl-8 col-lg-6'>{getTabContent}</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CrmSystemSetup;
