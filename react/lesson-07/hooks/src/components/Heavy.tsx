// use forwardRef to access dom element
// which is created by component
import { forwardRef } from 'react';

const HeavyComponent = forwardRef<HTMLDivElement>((props, ref) => {
	for (let i = 0; i < 10_000_000; i++) {
		// do nothing
	}

	console.log('heavy component', props);

	return <div ref={ref}>HeavyComponent</div>;
});

export default HeavyComponent;
