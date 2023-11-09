import { createSelector } from '@reduxjs/toolkit'

// Sélecteur pour récupérer le token
const selectToken = (state) => state.authentication.token;

const AuthenticationSelectors = {
  token: createSelector([selectToken], (token) => token),
};

export default AuthenticationSelectors
