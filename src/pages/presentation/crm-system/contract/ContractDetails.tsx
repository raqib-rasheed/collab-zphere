import React, { useMemo, useState } from 'react';
import Button from '../../../../components/bootstrap/Button';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import GeneralDetails from './GeneralDetails';

// TODO Add select for Lead stages and Deal stages

type TColumnTitles = 'General' | 'Attachment' | 'Comment' | 'Notes';

// const columns = {
// 	General: [{ name: 'PIPELINE', key: 'name' }, { name: 'ACTION' }],
// 	Attachment: [
// 		{ name: 'SOURCES', key: 'name' },
// 		{ name: 'ACTION', key: 'name' },
// 	],
// 	Comment: ['LABELS', 'ACTION'],
// 	Notes: [{ name: 'NAME', key: 'name' }, { name: 'ACTION' }],
// };

const CrmSystemSetup = () => {
	const TABS = {
		GENERAL: 'General',
		ATTACHEMENT: 'Attachment',
		COMMENT: 'Comment',
		NOTES: 'Notes',
	};

	const [activeTab, setActiveTab] = useState<TColumnTitles>('General');

	const getTabContent = useMemo(() => {
		const tabContentsMap = {
			General: <GeneralDetails />,
			Attachment: <></>,
			Comment: <></>,
			Notes: <></>,
		};
		return tabContentsMap[activeTab];
	}, [activeTab]);

	return (
		<PageWrapper title='Holidays'>
			<PresentaionPagesSubHeader title={`Manage ${activeTab}`} />
			<Page container='fluid'>
				<div className='row h-100'>
					<div className='h-75 col-xxl-3 col-xl-4 col-lg-6'>
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
