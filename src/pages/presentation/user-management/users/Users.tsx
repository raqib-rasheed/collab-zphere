import React, { useState } from 'react';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import useTourStep from '../../../../hooks/useTourStep';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import CreateOrEditUserForm from './user-actions/CreateOrEditUserForm';
import Spinner from '../../../../components/bootstrap/Spinner';
import User from './User';

// type FormValues = {
// 	name: String;
// 	email: String;
// 	type: String;
// 	password: String;
// 	dob: String;
// };

const Users = () => {
	useTourStep(18);
	const [addNewModalVisible, setAddNewModalVisible] = useState(false);

	// api calls
	const getUsers = () => axios.get('/User');
	const {
		data: usersResponse,
		error: usersErr,
		isLoading: usersLoading,
	} = useQuery(['User'], getUsers);

	if (usersLoading) {
		return (
			<div style={{ textAlign: 'center', width: '130vh' }}>
				<Spinner color={'primary'} />
			</div>
		);
	}
	if (usersErr) {
		return <div>something went wrong...</div>;
	}
	return (
		<PageWrapper title='Users Page'>
			<PresentaionPagesSubHeader
				title='Manage User'
				showSubHeaderRight
				addNewModal={
					<CreateOrEditUserForm
						addNewModalVisible={addNewModalVisible}
						setAddNewModalVisible={setAddNewModalVisible}
					/>
				}
				setAddNewModalVisible={setAddNewModalVisible}
				// customSubHeaderRightActions={CreateOrEditUserForm}
			/>
			<Page container='fluid'>
				<div className='row row-cols-xxl-3 row-cols-lg-3 row-cols-md-2'>
					{usersResponse?.data?.data?.map((user: any) => (
						<User key={user.id} user={user} />
					))}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Users;
