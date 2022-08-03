import { useDispatch } from 'react-redux';
import { addNumber, removeNumber } from '../../slices/numbers';

function Numbers({ name, id, addedId }) {
	const dispatch = useDispatch();

	const buttonClickHandler = (e) => {
		dispatch(
			addNumber({
				id,
				name
			})
		);
		dispatch(removeNumber(id));
		e.preventDefault();
	};

	console.log('addedIds', addedId);
	return (
		<div
			onClick={buttonClickHandler}
			role="navigation"
			className={
				addedId !== id ? (
					'w-[48px] h-[48px] bg-star-bg rounded-full flex justify-center items-center text-numbers-font-color text-[16px]  hover:cursor-pointer hover:bg-button-bg-hover hover:text-white'
				) : (
					'w-[48px] h-[48px] rounded-full flex justify-center items-center bg-button-color text-white'
				)
			}
		>
			{name}
		</div>
	);
}

export default Numbers;
