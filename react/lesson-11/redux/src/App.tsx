import { getProducts } from './redux/products';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { useGetUsersQuery, useLazyGetUsersQuery } from './redux/usersApi';

function App() {
	const dispatch = useAppDispatch();
	const products = useAppSelector((state) => state.products.data);

	// const { isLoading, data } = useGetUsersQuery({});
	const [getUsers, GetUsersState] = useLazyGetUsersQuery();

	return (
		<div className='App'>
			<h1>Lesson 11</h1>
			<button
				onClick={() => {
					dispatch(getProducts());
				}}
			>
				get products
			</button>
			<button
				onClick={() => {
					getUsers({});
				}}
			>
				get users
			</button>
			<ul>
				{products.map((product) => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
			{GetUsersState.isLoading && <p>Loading...</p>}
			{GetUsersState.data && (
				<ul>
					{GetUsersState.data.map((user) => (
						<li key={user.username}>{user.username}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default App;
