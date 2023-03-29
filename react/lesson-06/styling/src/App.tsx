import { useState } from 'react';

import { ClassDesign } from './components/ClassDesign';
import { ModuleDesign } from './components/ModuleDesign';
import { Ziya } from './components/ModuleDesign/Ziya';
import { Inline } from './components/Inline';
import { InlineFakeReactNative } from './components/RN';

// styled components
import { Button } from './components/Button';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<ClassDesign />
			<ModuleDesign />
			<Ziya />
			<Inline />
			<InlineFakeReactNative />
			<hr />
			<Button primary>I am Primary</Button>
			<Button>I am Secordary</Button>
			<hr />
			<Button block primary>
				I am Primary
			</Button>
			<Button block>I am Secordary</Button>
			<hr />
		</div>
	);
}

export default App;
