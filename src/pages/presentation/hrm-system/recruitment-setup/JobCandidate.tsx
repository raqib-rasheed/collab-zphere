import React from 'react';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const JobCandidate = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Candice',
			id: ' Highly Competitive Fashion Jobs',
			EMAIL: (
				<div>
					<Icon icon='Star' color='dark' />
					<Icon icon='Star' color='dark' />
					<Icon icon='Star' color='dark' />
					<Icon icon='Star' color='dark' />
					<Icon icon='Star' color='dark' />
				</div>
			),
			BRANCH: '$100,000.00',
			idas: <Icon size='2x' icon='Download' color='success' />,
			iad: <Icon size='lg' className='mx-2' icon='Eye' color='info' />,
		};

		const data = [];
		while (count > 0) {
			data?.push(dummyData);
			count--;
		}
		return data;
	}

	const columns = [
		{ name: 'NAME' },
		{ name: 'APPLIED FOR' },
		{ name: 'RATING' },
		{ name: 'APPLIED AT' },
		{ name: 'CV / RESUME' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Manage Archive Application' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(1)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default JobCandidate;
