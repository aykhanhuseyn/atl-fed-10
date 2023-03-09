import React, { Component } from 'react';
import { Props } from './Props';

type CardProps = {
	name: string;
};
type CardState = {
	count: number;
	age: number;
};

export class Card extends Component<CardProps, CardState> {
	constructor(props: CardProps) {
		super(props);

		console.log('constructor');

		this.state = {
			count: 0,
			age: 0,
		} as CardState;
	}

	// life cycle methods
	// created => constructor
	// render => render
	// renderFinished => componentDidMount
	// changed => componentDidUpdate
	// deleted => componentWillUnmount

	static getDerivedStateFromProps(nextProps: CardProps, prevState: CardState) {
		console.log('getDerivedStateFromProps');
		console.log({
			nextProps,
			prevState,
		});

		return null;
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate(
		prevProps: CardProps,
		prevState: CardState,
		snapshot?: any,
	): void {
		console.log('componentDidUpdate');
		console.log({
			newProps: this.props,
			prevProps,
		});
		console.log({
			prevState,
			newState: this.state,
		});
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	shouldComponentUpdate(nextProps: CardProps, nextState: CardState): boolean {
		console.log('shouldComponentUpdate');
		console.log({
			nextState,
			state: this.state,
		});
		// return nextState.count > 5;
		return true;
	}

	render() {
		console.log('render');

		return (
			<div>
				<h2>Hello, {this.props.name}!</h2>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					count is {this.state.count}
				</button>
				<hr />
				<button onClick={() => this.setState({ age: this.state.age + 1 })}>
					age is {this.state.age}
				</button>
				<hr />

				<Props name={this.props.name} />
			</div>
		);
	}
}

// const CardFunction = () => {
//   const [count, setCount] = React.useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>count is {count}</button>
//     </div>
//   );
// };
