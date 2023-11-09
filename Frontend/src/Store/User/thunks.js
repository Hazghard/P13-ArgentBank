import UserProfileActions from './actions'
import { fetchUserProfile } from '@/_Services/FetchUserProfile.service'
import { PutModifiedProfile } from '@/_Services/UserModifiedProfilePut.service.js';
import { createAsyncThunk } from '@reduxjs/toolkit'

const UserProfileThunks = {
    fetchProfile: createAsyncThunk(
      `${UserProfileActions.prefix} fetch user profile`,
      async (_, { rejectWithValue, getState }) => {
        const token = getState().authentication.token

        try {
          return fetchUserProfile(token)
        } catch (e) {
          return rejectWithValue(e)
        }
      }
    ),
	updateProfile: createAsyncThunk(
		`${UserProfileActions.prefix} update user profile`,
		async ({ firstName, lastName }, { rejectWithValue, getState }) => {
			const token = getState().authentication.token
			try {
				return PutModifiedProfile({ token, firstName, lastName })
			  } catch (e) {
				return rejectWithValue(e)
			  }
		}
	)
}

export default UserProfileThunks
