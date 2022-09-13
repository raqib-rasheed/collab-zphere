import React from 'react';
import Button from '../../../../components/bootstrap/Button';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import TableWidget from '../../../../widgets/Table';

const JobOnBoarding = () => {
	function generateDummyData(count: number) {
		const dummyData = {
			employeeid: 'Jessie',
			id: ' Highly Competitive Fashion Jobs',
			BRANCH: '-',
			BRANCaH: 'Jul 21, 2021',
			BRANCaHas: 'Jul 21, 2021',
			EMAIL: <Button color='success'>Confirm</Button>,
			iad: (
				<>
					<Icon size='lg' className='mx-2' icon='Eye' color='info' />
					<Icon size='lg' className='mx-2' icon='Edit' color='info' />
					<Icon size='lg' className='mx-2' icon='Trash' color='info' />
				</>
			),
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
		{ name: 'JOB' },
		{ name: 'BRANCH' },
		{ name: 'APPLIED AT' },
		{ name: 'JOINING AT' },
		{ name: 'STATUS' },
		{ name: 'ACTION' },
	];
	return (
		<PageWrapper title=''>
			<PresentaionPagesSubHeader title='Manage Archive Application' />
			<Page container='fluid'>
				<TableWidget data={generateDummyData(2)} tableColumns={columns} />
			</Page>
		</PageWrapper>
	);
};

export default JobOnBoarding;
