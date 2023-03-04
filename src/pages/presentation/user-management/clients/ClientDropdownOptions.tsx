import React, { useState } from 'react';
import Button from '../../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import Icon from '../../../../components/icon/Icon';
import CreateOrEditUserForm from './client-actions/CreateOrEditClientForm';
import RemoveUser from './client-actions/RemoveClient';
import ClientResetPassword from './client-actions/ClientResetPassword';

interface IClientDropdownOptions {
	client: any;
}

const ClientDropdownOptions = (props: IClientDropdownOptions) => {
	const [updateNewModalVisible, setUpdateNewModalVisible] = useState(false);
	const [removeModalVisible, setRemoveModalVisible] = useState(false);
	const [resetPasswordModalVisible, setResetPasswordModalVisible] = useState(false);
	return (
		<div className='col-auto'>
			<Dropdown key={props.client?.id} direction='start'>
				<DropdownToggle hasIcon={false}>
					<Button icon='ThreeDotsVertical' color='dark' isLight hoverShadow='sm' />
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem className='p-2' onClick={() => setUpdateNewModalVisible(true)}>
						<div>
							<Icon size='lg' icon='edit' />
							<span>Edit</span>
						</div>
					</DropdownItem>

					<DropdownItem className='p-2' onClick={() => setRemoveModalVisible(true)}>
						<div>
							<Icon size='lg' icon='delete' />
							<span>Delete</span>
						</div>
					</DropdownItem>
					<DropdownItem className='p-2'>
						<div>
							<Icon size='lg' icon='settings' />
							<span>Reset Password</span>
						</div>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<CreateOrEditUserForm
				addNewModalVisible={updateNewModalVisible}
				setAddNewModalVisible={setUpdateNewModalVisible}
				initialValues={{
					id: props.client?.id,
					name: props.client?.name,
					email: props.client?.email,
					dob: props.client?.dob,
					type: props.client?.type,
				}}
			/>
			<RemoveUser
				userId={props.client?.id}
				removeModalVisible={removeModalVisible}
				setRemoveModalVisible={setRemoveModalVisible}
			/>
			<ClientResetPassword
				userId={props.client?.id}
				userPassword={props.client?.password}
				resetPasswordModalVisible={resetPasswordModalVisible}
				setResetPasswordModalVisible={setResetPasswordModalVisible}
			/>
		</div>
	);
};

export default ClientDropdownOptions;
