import ItemList from '../item-list/item-list.component';
import './content.styles.css';

function Content({ items, handleCheck, handleDelete }) {
	return (
		<main>
			{items.length ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty</p>
			)}
		</main>
	);
}

export default Content;
