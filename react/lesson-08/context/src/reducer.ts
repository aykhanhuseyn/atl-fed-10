import { useReducer } from 'react';

export type State = {
	count: number;
	age: number;
};

export type Action = {
	type:
		| 'incrementCount'
		| 'decrementCount'
		| 'incrementAge'
		| 'decrementAge'
		| 'reset';
};

export const initialState: State = {
	count: 0,
	age: 0,
};

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'incrementCount':
			return { ...state, count: state.count + 1 };
		case 'decrementCount':
			return { ...state, count: state.count - 1 };
		case 'incrementAge':
			return { ...state, age: state.age + 1 };
		case 'decrementAge':
			return { ...state, age: state.age - 1 };
		case 'reset':
			return initialState;
		default:
			return state;
	}
};

export const useCounter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	// const [state, dispatch] = useReducer(reducer, initialState);

	return {
		state,
		dispatch,
		// count: state.count,
		// increment: () => dispatch({ type: 'increment' }),
		// decrement: () => dispatch({ type: 'decrement' }),
		// reset: () => dispatch({ type: 'reset' }),
	};
};
