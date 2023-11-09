import React from 'react';
import { useSelector } from 'react-redux';
import UserSelectors from '@/Store/User/selectors.js';

const Name = () => {
	const userProfile = useSelector(UserSelectors.profile);
	return (
		<h1>Welcome back<br />{userProfile?.firstName} {userProfile?.lastName} !</h1>
	);
};

export default Name;