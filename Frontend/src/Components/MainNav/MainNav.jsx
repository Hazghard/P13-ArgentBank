import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOut } from '@fortawesome/free-solid-svg-icons';
import argentBankLogo from '@/assets/Images/argentBankLogo.png';

import { useDispatch } from 'react-redux';
import AuthenticationActions from '@/Store/Authentication/actions';
import UserProfileActions from '@/Store/User/actions';
import { Navigate } from 'react-router-dom';


const MainNav = ({type}) => {


	function handleSignOut() {
		const dispatch = useDispatch();
		dispatch(AuthenticationActions.resetToken());
		dispatch(UserProfileActions.resetProfile());
	}

	return (
		<nav className="main-nav">
			<NavLink className="main-nav-logo" to='/home'>
				<img
					className="main-nav-logo-image"
					src={argentBankLogo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</NavLink>
			<div>
				{type === 'Dashboard' ? (
					<NavLink className='main-nav-item' to='/home' onClick={handleSignOut}>
						<FontAwesomeIcon icon={faSignOut} />
						Sign Out
					</NavLink>
				) : (
					<NavLink className="main-nav-item" to='/login'>
						<FontAwesomeIcon icon={faCircleUser} />
						Sign In
					</NavLink>
				) }
			</div>
		</nav>
	);
};

export default MainNav;