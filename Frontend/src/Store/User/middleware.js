import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import UserProfileThunks from '@/Store/User/thunks.js'
import AuthenticationThunks from '@/Store/Authentication/thunks.js'

const UserProfileMiddleware = createListenerMiddleware()

UserProfileMiddleware.startListening({
  matcher: isAnyOf(
    AuthenticationThunks.login.fulfilled,
  ),
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(UserProfileThunks.fetchProfile())
  }
})

export default UserProfileMiddleware