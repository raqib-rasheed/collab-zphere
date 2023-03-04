import React, { useState } from 'react';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import useTourStep from '../../../../hooks/useTourStep';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import CreateOrEditClientForm from './client-actions/CreateOrEditClientForm';
import Spinner from '../../../../components/bootstrap/Spinner';
import Client from './Client';

// type FormValues = {
// 	name: String;
// 	email: String;
// 	type: String;
// 	password: String;
// 	dob: String;
// };

const Clients = () => {
	useTourStep(18);
	const [addNewModalVisible, setAddNewModalVisible] = useState(false);

	// api calls
	const getClient = () => axios.get('/Client');
	const {
		data: clientsResponse,
		error: clientsErr,
		isLoading: clientsLoading,
	} = useQuery(['Client'], getClient);

	if (clientsLoading) {
		return (
			<div style={{ textAlign: 'center', width: '130vh' }}>
				<Spinner color={'primary'} />
			</div>
		);
	}
	if (clientsErr) {
		return <div>something went wrong...</div>;
	}
	return (
		<PageWrapper title='Users Page'>
			<PresentaionPagesSubHeader
				title='Manage User'
				showSubHeaderRight
				addNewModal={
					<CreateOrEditClientForm
						addNewModalVisible={addNewModalVisible}
						setAddNewModalVisible={setAddNewModalVisible}
					/>
				}
				setAddNewModalVisible={setAddNewModalVisible}
			/>
			<Page container='fluid'>
				<div className='row row-cols-xxl-3 row-cols-lg-3 row-cols-md-2'>
					{clientsResponse?.data?.data?.map((client: any) => (
						<Client client={client} key={client.id} />
					))}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Clients;
