import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserSelectors from '@/Store/User/selectors.js';

import UserProfileThunks from '@/Store/User/thunks';

import './dashboardInputs.css';

const DashboardInputs = () => {
	const userProfile = useSelector(UserSelectors.profile);
	const [editNameToggle, setEditNameToggle] = useState(false);
	const dispatch = useDispatch();

	function handleToggleEdit() {
		setEditNameToggle(!editNameToggle);
	}

	async function handleModifyNames(e) {
		e.preventDefault();

		dispatch(UserProfileThunks.updateProfile({
			firstName: !e.target[0].value ? userProfile.firstName : e.target[0].value,
			lastName: !e.target[1].value ? userProfile.lastName : e.target[1].value
		}));

		setEditNameToggle(false);
	}

	return (
		<>
			{editNameToggle ? (
				<form className='dashboardNameModifierContainer' onSubmit={handleModifyNames}>
					<div className='inputsContainer'>
						<input className='dashboardInput' placeholder={userProfile.firstName}></input>
						<input className='dashboardInput' placeholder={userProfile.lastName}></input>
					</div>
					<div className='buttonsContainer'>
						<button className='edit-button'>Save</button>
						<button className='edit-button' onClick={handleToggleEdit}>Cancel</button>
					</div>
				</form>
			) : (
				<button className='edit-button' onClick={handleToggleEdit}>Edit Name</button>
			)}
		</>
	);
};

export default DashboardInputs;