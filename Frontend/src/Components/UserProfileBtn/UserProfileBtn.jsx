import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import UserSelectors from '@/Store/User/selectors.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const UserProfileBtn = () => {
	const userProfile = useSelector(UserSelectors.profile);
	return (
        <NavLink className='main-nav-item' to='/profile'>
          <FontAwesomeIcon icon={faCircleUser}/>
          {userProfile?.firstName}
        </NavLink>
	);
};

export default UserProfileBtn;