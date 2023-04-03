import { FaTrashAlt } from 'react-icons/fa';

function LineItem({ item, handleCheck, handleDelete }) {
	const { id, checked, body } = item;

	return (
		<li key={id} className="item">
			<input
				type="checkbox"
				checked={checked}
				onChange={() => handleCheck(id)}
			/>
			<label style={checked ? { textDecoration: 'line-through' } : null}>
				{body}
			</label>
			<FaTrashAlt onClick={() => handleDelete(id)} role="button" tabIndex="0" />
		</li>
	);
}

export default LineItem;
