import React from 'react';
import MainNav from '@/Components/MainNav/MainNav';
import Footer from '@/Components/Footer/Footer';
import SignInForm from '@/Components/SignInForm/SignInForm';

const Login = () => {
  return (
    <>
      <MainNav />
      <SignInForm />
      <Footer />
    </>
  );
};

export default Login;