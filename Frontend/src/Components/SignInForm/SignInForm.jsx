import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AuthenticationThunks from '@/Store/Authentication/thunks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import UserSelectors from '@/Store/User/selectors.js';

const SignInForm = () => {
	const navigate = useNavigate();
	const userProfile = useSelector(UserSelectors.profile);
	const dispatch = useDispatch();
	console.log('userProfile SignInForm',userProfile);

	async function handleSubmitForm(e) {
		e.preventDefault();
		let formData = {
			email:{
				value: e.target[0].value,
				isOk: (/[A-Za-z0-9_\.+]+@[A-Za-z0-9]+\.[a-z]{2,3}/.test(e.target[0].value) ? true : false),
			},
			password: e.target[1].value,
			rememberMe: e.target[2].checked
		};

		if(formData.email.isOk) {
			await dispatch(AuthenticationThunks.login({email: formData.email.value, password: formData.password}))
		}
	}

	useEffect(() => {
		if (!userProfile) {
			return
		}
		console.log('prout')
		navigate('/profile')
	}, [ userProfile ]);

	return (
		<main className="main bg-dark">
		<section className="sign-in-content">
			<FontAwesomeIcon icon={faCircleUser} className='sign-in-icon' />
			<h1>Sign In</h1>
			<form onSubmit={handleSubmitForm}>
				<div className="input-wrapper">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" />
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" />
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" />
					<label htmlFor="remember-me">Remember me</label>
				</div>
				<button className="sign-in-button" type='submit'>Sign In</button>
			</form>
		</section>
		</main>
	);
};

export default SignInForm;