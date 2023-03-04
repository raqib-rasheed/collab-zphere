import React from 'react';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import useTourStep from '../../../../hooks/useTourStep';
import PresentaionPagesSubHeader from '../../../../widgets/PresentaionPagesSubHeader';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../../components/bootstrap/Spinner';

// type FormValues = {
// 	name: String;
// 	email: String;
// 	type: String;
// 	password: String;
// 	dob: String;
// };

const Roles = () => {
	useTourStep(18);
	// const [staffVisible, setStaffVisible] = useState(false);

	// api calls
	const getRolles = () => axios.get('/Roll');
	const {
		data: rollsResponse,
		error: rollsErr,
		isLoading: rollsLoading,
	} = useQuery(['Roll'], getRolles);

	if (rollsLoading) {
		return (
			<div style={{ textAlign: 'center', width: '130vh' }}>
				<Spinner color={'primary'} />
			</div>
		);
	}
	if (rollsErr) {
		return <div>something went wrong...</div>;
	}
	console.log(rollsResponse);
	return (
		<PageWrapper title='Users Page'>
			<PresentaionPagesSubHeader
				title='Manage User'
				showSubHeaderRight
				// addNewModal={
				// 	<CreateOrEditUserForm
				// 		addNewModalVisible={addNewModalVisible}
				// 		setAddNewModalVisible={setAddNewModalVisible}
				// 	/>
				// }
				// setAddNewModalVisible={setAddNewModalVisible}
				// customSubHeaderRightActions={CreateOrEditUserForm}
			/>
			<Page container='fluid'>
				<div className='row row-cols-xxl-3 row-cols-lg-3 row-cols-md-2'></div>
			</Page>
		</PageWrapper>
	);
};

export default Roles;
