import { useState, useEffect } from 'react';
import { Container } from './components/Container';
import { CreateTodo } from './components/CreateTodo';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import './style.css';

export interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		console.log(todos);
	}, [todos]);

	return (
		<div className='App'>
			<Container>
				<Header />
				<CreateTodo
					onSubmit={(value) => {
						setTodos((prevTodos) => [...prevTodos, value]);
					}}
				/>
				<TodoList todos={todos} />
			</Container>
		</div>
	);
}

export default App;
