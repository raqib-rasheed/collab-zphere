import React from 'react';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import TableWidget from '../../../widgets/Table';

const ProjectSystemTasks = () => {
	return (
		<PageWrapper title=''>
			<Page container='fluid'>
				<TableWidget />
			</Page>
		</PageWrapper>
	);
};

export default ProjectSystemTasks;
