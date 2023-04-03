import { useState } from 'react';
import Header from './components/header/header.component';
import Content from './components/content/content.component';
import Footer from './components/footer/footer.component';
import AddItem from './components/add-item/add-item.component';
import './app.css';

function App() {
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
	const [textField, setTextField] = useState('');

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

	const handleTextChange = (event) => {
		const text = event.target.value;
		setTextField(text);
	};

	const handleSubmit = (event) => {
		console.log('submitted');
	};

	return (
		<div className="App">
			<Header title="Groceries list" />
			<AddItem />
			<Content
				items={items}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	);
}

export default App;
