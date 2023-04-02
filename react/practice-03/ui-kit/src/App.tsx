import Headline from './components/Headline';
import Button from './components/Button';

function App() {
	return (
		<div>
			<Headline level={1}>salam</Headline>
			{/* <Headline level={2}>salam</Headline>
			<Headline level={3}>salam</Headline>
			<Headline level={4}>salam</Headline>
			<Headline level={5}>salam</Headline>
			<Headline level={6}>salam</Headline>
			<Headline>salam</Headline> */}
			<Button size='large' tip='primary'>
				Click me
			</Button>
			<Button tip='primary'>Click me</Button>
			<br />
			<Button size='large' tip='secondary' addonBefore='🏳️‍🌈'>
				Click me
			</Button>
			<Button tip='secondary' addonAfter='🫡' addonBefore='😍'>
				Click me
			</Button>
			<br />
			<Button size='large' tip='link'>
				Click me
			</Button>
			<Button tip='link'>Click me</Button>
		</div>
	);
}

export default App;
