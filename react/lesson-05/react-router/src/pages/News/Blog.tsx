import { useParams } from 'react-router-dom';

export const NewsBlog = () => {
	const { slag } = useParams();

	const id = slag.split('-').at(-1);

	// dont fo this in real app
	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});

	return <h1>{slag}</h1>;
};
