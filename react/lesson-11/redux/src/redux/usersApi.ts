import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://fakestoreapi.com/users

// terminal command: npx @reduxjs/toolkit query

const userApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => 'users',
		}),
	}),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = userApi;

export default userApi;
