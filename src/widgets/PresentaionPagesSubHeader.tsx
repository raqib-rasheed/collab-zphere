import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../layout/SubHeader/SubHeader';
import Button from '../components/bootstrap/Button';
import Breadcrumb from '../components/bootstrap/Breadcrumb';
import useSubHeaderBreadCrumpList from '../hooks/useSubHeaderBreadCrumpList';
import classNames from 'classnames';

interface IPresentaionPagesSubHeaderProps {
	showSubHeaderRight?: boolean;
	title?: string;
	customSubHeaderRightActions?: any;
	showAddNewButton?: boolean;
	addNewModal?: JSX.Element;
	setAddNewModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PresentaionPagesSubHeader = ({
	showSubHeaderRight,
	title,
	customSubHeaderRightActions,
	showAddNewButton = true,
	addNewModal,
	setAddNewModalVisible,
}: IPresentaionPagesSubHeaderProps) => {
	const breadcrumbLists = useSubHeaderBreadCrumpList();
	return (
		<>
			<SubHeader>
				<SubHeaderLeft
					className={classNames(
						{ 'd-flex flex-column align-items-start': title },
						'p-3',
					)}>
					{title && <h4>{title}</h4>}
					<Breadcrumb list={breadcrumbLists} />
				</SubHeaderLeft>
				{showSubHeaderRight && (
					<SubHeaderRight>
						<>
							{customSubHeaderRightActions && customSubHeaderRightActions()}
							{showAddNewButton && (
								<Button
									color='dark'
									isLight
									icon='Add'
									onClick={() =>
										setAddNewModalVisible && setAddNewModalVisible(true)
									}>
									{!customSubHeaderRightActions && 'Add New'}
								</Button>
							)}
						</>
					</SubHeaderRight>
				)}
			</SubHeader>
			{addNewModal}
		</>
	);
};

export default PresentaionPagesSubHeader;
