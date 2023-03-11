import { useState } from 'react';
import { FunctionLife } from './FunctionLife';

function App() {
	const [show, setShow] = useState(true);

	return (
		<div className='App'>
			<h1>hello</h1>
			<button onClick={() => setShow(!show)}>toggle</button>
			{show && <FunctionLife />}
		</div>
	);
}

export default App;
