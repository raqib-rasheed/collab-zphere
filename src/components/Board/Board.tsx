import React, { FC } from 'react';
import PropTypes from 'prop-types';
import BoardGroup from './BoardGroup';
import { TColor } from '../../type/color';
import { TBoardCard } from './BoardCard';

interface IBoardProps {
	data: {
		id: string;
		title: string;
		icon: string;
		color: TColor;
		cards: TBoardCard[];
	}[];
	setData(...args: unknown[]): unknown;
}
const Board: FC<IBoardProps> = ({ data, setData }) => {
	return (
		<div className='board row mx-n4 pb-3 px-3'>
			{data.map((group) => (
				<BoardGroup key={group.id} groups={group} data={data} setData={setData} />
			))}
		</div>
	);
};
Board.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	data: PropTypes.array.isRequired,
	setData: PropTypes.func.isRequired,
};

export default Board;
