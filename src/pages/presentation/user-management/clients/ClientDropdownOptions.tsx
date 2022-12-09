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

interface IUserDropdownOptions {
	user: any;
}

const UserDropdownOptions = (props: IUserDropdownOptions) => {
	const [updateNewModalVisible, setUpdateNewModalVisible] = useState(false);
	const [removeModalVisible, setRemoveModalVisible] = useState(false);
	const [resetPasswordModalVisible, setResetPasswordModalVisible] = useState(false);
	return (
		<div className='col-auto'>
			<Dropdown key={props.user?.id} direction='start'>
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
					id: props.user?.id,
					name: props.user?.name,
					email: props.user?.email,
					dob: props.user?.dob,
					type: props.user?.type,
				}}
			/>
			<RemoveUser
				userId={props.user?.id}
				removeModalVisible={removeModalVisible}
				setRemoveModalVisible={setRemoveModalVisible}
			/>
			<ClientResetPassword
				userId={props.user?.id}
				userPassword={props.user?.password}
				resetPasswordModalVisible={resetPasswordModalVisible}
				setResetPasswordModalVisible={setResetPasswordModalVisible}
			/>
		</div>
	);
};

export default UserDropdownOptions;
