import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { toPairs, map } from 'lodash';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';

const Chats = () => {
	const [chats, setChats] = useState([]);

	console.log(chats);

	const { currentUser } = useContext(AuthContext);
	const { dispatch } = useContext(ChatContext);

	useEffect(() => {
		const getChats = () => {
			const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
				setChats(doc.data());
			});

			return () => {
				unsub();
			};
		};

		currentUser.uid && getChats();
	}, [currentUser.uid]);

	const handleSelect = (u) => {
		dispatch({ type: 'CHANGE_USER', payload: u });
		console.log('U', u);
	};

	return (
		<div className='chats'>
			{map(toPairs(chats), ([username, chat]) => (
				<div
					className='userChat'
					key={username}
					onClick={() => handleSelect(chat.userInfo)}
				>
					<img src={chat.userInfo.photoURL} alt='' />
					<div className='userChatInfo'>
						<span>{chat.userInfo.displayName}</span>
						<p>{chat.lastMessage?.text}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Chats;
