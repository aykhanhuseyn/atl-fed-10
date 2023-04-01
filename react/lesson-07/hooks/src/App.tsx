import {
	useState,
	useCallback,
	useMemo,
	useLayoutEffect,
	useEffect,
	useRef,
	// useContext,
	// useReducer,
	lazy,
	Suspense,
} from 'react';
import AlmaMemo from './components/AlmaMemo';
import AlmaNonMemo from './components/AlmaNonMemo';

const f = () => {
	console.log('f called');
};

// lazy loading
// created only when needed
// created only once
// creates separate chunk independent of main chunk
const HeavyComponent = lazy(() => import('./components/Heavy'));

function App() {
	const [mCount, setMCount] = useState(0);
	const [nmCount, setNMCount] = useState(0);

	const refH = useRef<HTMLDivElement>(null);
	console.log('refh', refH);

	// #region
	// useRef is used to access dom elements
	const ref = useRef<HTMLDivElement>(null);
	// useRef is used to access any value
	// useRef is used to access any object
	// useRef is used to access any function
	// useRef is used to access any array
	// without re-rendering
	const ref1 = useRef<any>({ name: 'ayxan' });

	// useEffect is called after render finished
	// app apinted on screen
	useEffect(() => {
		console.log('use Effect called');

		if (ref.current) {
			// ref.current.style.backgroundColor = 'red';
			ref.current.innerText = mCount.toString();

			// ref.current = null;
			// ref.current = 'salom';
		}
	}, [mCount]);

	// useLayoutEffect is called before render finished
	// app not painted on screen
	// before dom updated
	// use when needed dom updates
	useLayoutEffect(() => {
		if (ref.current) {
			ref.current.style.backgroundColor = 'green';
			ref.current.style.padding = '10px';
		}
		console.log('use Layout Effect called');
	}, []);

	// const func = () => {
	// 	console.log('func called');
	// };
	const func = useCallback(() => {
		console.log('func called');
	}, []);

	const onClick = () => {
		setMCount((p) => p + 1);
		ref1.current.name = 'ayxan' + mCount;
	};

	// const arr: number[] = [];

	const arr: number[] = useMemo(() => {
		console.log('arr created');
		return [];
	}, []);
	// #endregion

	console.log('App rendered');

	console.log('ref', ref);
	console.log('ref1', ref1);

	return (
		<div className='App'>
			<h1>Hooks</h1>
			<button onClick={onClick}>upd memo count</button>
			<button onClick={() => setNMCount((p) => p + 1)}>upd non memo count</button>
			<br />
			<AlmaMemo appCount={mCount} onClick={func} arr={arr} />
			<AlmaNonMemo appCount={nmCount} onClick={func} arr={arr} />
			<div className='ref' ref={ref}>
				salam {ref1.current.name}
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<HeavyComponent ref={refH} />
			</Suspense>
		</div>
	);
}

export default App;
