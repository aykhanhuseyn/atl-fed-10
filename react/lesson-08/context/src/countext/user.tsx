import {
	createContext,
	ReactNode,
	FC,
	useState,
	useCallback,
	useContext,
} from 'react';

type LoginUser = {
	email: string;
	password: string;
};

type User = {
	name: string;
	email: string;
	password: string;
};

type UserContextType = {
	user: User | null;
	login: (data: LoginUser) => void;
	logout: () => void;
};

const UserContext = createContext<UserContextType>({
	user: null,
	login: (data: LoginUser) => {},
	logout: () => {},
});

interface UserProviderProps {
	children: ReactNode;
}

const databaseUser: User = {
	name: 'Laz Ziya',
	email: 'laz@ziya.com',
	password: '123456',
};

const localUser: User | null = JSON.parse(localStorage.getItem('user')!);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(localUser);

	const login = useCallback((loginUser: LoginUser) => {
		if (
			loginUser.email === databaseUser.email &&
			loginUser.password === databaseUser.password
		) {
			setUser(databaseUser);
			localStorage.setItem('user', JSON.stringify(databaseUser));
		}
	}, []);

	const logout = useCallback(() => {
		setUser(null);
		localStorage.removeItem('user');
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
				login,
				logout,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}

	return context;
};

export { UserContext };
