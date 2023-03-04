import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Button from '../../../../../components/bootstrap/Button';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
} from '../../../../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../../../../components/bootstrap/OffCanvas';
import Spinner from '../../../../../components/bootstrap/Spinner';

interface IRemoveUser {
	userId: string;
	removeModalVisible: any;
	setRemoveModalVisible: any;
}

const RemoveUser = (props: IRemoveUser) => {
	const removeUser = useMutation(
		(userId) => {
			return axios.post('/User-del', userId);
		},
		{
			onSuccess: () => {},
			onError: () => {},
		},
	);

	function handleRemoveUser() {
		// @ts-ignore comment to disable type checking for a line in TypeScript.
		removeUser.mutate({
			id: props?.userId,
		});
	}

	return (
		<Modal
			// size='sm'
			titleId='upcomingEdit'
			isOpen={props.removeModalVisible}
			setIsOpen={() => props.setRemoveModalVisible(false)}>
			<ModalHeader setIsOpen={() => props.setRemoveModalVisible(false)}>
				<OffCanvasTitle id='upcomingEdit'>Delete</OffCanvasTitle>
			</ModalHeader>

			<ModalBody>
				<div>Are sure want to delete user!</div>
			</ModalBody>
			<ModalFooter className='bg-transparent'>
				{/* <Button color='info' className='col-4 mx-2'>
					Cancel
				</Button> */}
				<Button color='info' className=' col-4 mx-2' onClick={() => handleRemoveUser()}>
					{removeUser.isLoading && <Spinner color='primary' inButton isSmall />}
					Yes
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export default RemoveUser;
