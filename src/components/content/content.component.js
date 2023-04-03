import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './content.styles.css';

function Content() {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: true,
			body: 'One half pound bag of Cocoa covered almonds unsalted',
		},
		{
			id: 2,
			checked: false,
			body: 'item 2',
		},
		{
			id: 3,
			checked: false,
			body: 'item 3',
		},
	]);

	const handleCheck = (currentId) => {
		const listItems = items.map((item) =>
			item.id === currentId ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
	};

	const handleDelete = (currentId) => {
		const filteredItems = items.filter((item) => item.id !== currentId);
		setItems(filteredItems);
	};

	return (
		<main>
			{items.length ? (
				<ul>
					{items.map((item) => {
						const { id, checked, body } = item;

						return (
							<li key={id} className="item">
								<input
									type="checkbox"
									checked={checked}
									onChange={() => handleCheck(id)}
								/>
								<label
									style={checked ? { textDecoration: 'line-through' } : null}
								>
									{body}
								</label>
								<FaTrashAlt
									onClick={() => handleDelete(id)}
									role="button"
									tabIndex="0"
								/>
							</li>
						);
					})}
				</ul>
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty</p>
			)}
		</main>
	);
}

export default Content;
