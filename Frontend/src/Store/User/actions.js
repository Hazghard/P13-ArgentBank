import { createAction } from '@reduxjs/toolkit';

const ACTION_PREFIX = '[USER_PROFILE]'

const resetProfile = createAction(`${ACTION_PREFIX} reset token`);
const updateProfile = createAction(`${ACTION_PREFIX} update token`);

const UserProfileActions = {
    prefix: ACTION_PREFIX,
	resetProfile,
	updateProfile,
}

export default UserProfileActions
