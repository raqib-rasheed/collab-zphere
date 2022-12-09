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

interface IRemoveUser {
	userId: string;
	removeModalVisible: any;
	setRemoveModalVisible: any;
}

const RemoveUser = (props: IRemoveUser) => {
	const removeUser = useMutation((userId) => {
		return axios.post('/User-del', userId);
	});

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
				<OffCanvasTitle id='upcomingEdit'>Delete user</OffCanvasTitle>
			</ModalHeader>

			<ModalBody>
				<div></div>
			</ModalBody>
			<ModalFooter className='bg-transparent'>
				<Button color='info' className='w-100' type='submit'>
					No
				</Button>
				<Button
					color='info'
					className='w-100'
					// type='submit'
					onClick={() => handleRemoveUser()}>
					Yes
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export default RemoveUser;
