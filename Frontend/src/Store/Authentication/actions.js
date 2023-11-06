import { createAction } from '@reduxjs/toolkit';

const ACTION_PREFIX = '[AUTHENTICATION]';

const resetToken = createAction(`${ACTION_PREFIX} reset token`);

const AuthenticationActions = {
    prefix: ACTION_PREFIX,
    resetToken,
};

export default AuthenticationActions;

