import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import Button from '../../../../components/bootstrap/Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../../../components/bootstrap/OffCanvas';
import Icon from '../../../../components/icon/Icon';

interface IRemoveUser {
	userId: string;
}

const RemoveUser = (props: IRemoveUser) => {
	const [removeModalVisible, setRemoveModalVisible] = useState(true);

	const removeUser = useMutation((userId) => {
		return axios.post('/User-del', userId);
	});

	function handleRemoveUser() {
		console.log('first');
		// @ts-ignore comment to disable type checking for a line in TypeScript.
		removeUser.mutate({
			id: props?.userId,
		});
	}

	return (
		<>
			<div onClick={() => setRemoveModalVisible(true)}>
				<Icon size='lg' icon='trash' />
				<span>Delete</span>
			</div>
			<Modal
				// size='sm'
				titleId='upcomingEdit'
				isOpen={removeModalVisible}
				setIsOpen={() => setRemoveModalVisible(false)}>
				<ModalHeader setIsOpen={() => setRemoveModalVisible(false)}>
					<OffCanvasTitle id='upcomingEdit'>Create new user</OffCanvasTitle>
				</ModalHeader>

				<ModalBody>
					<div></div>
				</ModalBody>
				<ModalFooter className='bg-transparent'>
					<Button color='info' className='w-100' type='submit'>
						No
					</Button>
					<div
						color='info'
						className='w-100'
						// type='submit'
						onClick={() => handleRemoveUser()}>
						Yes
					</div>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default RemoveUser;
