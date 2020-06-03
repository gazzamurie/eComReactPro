import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';

import './sign-in-up.styles.scss';

const SignInUpPage = () => (
  <div className='sign-in-and-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUpPage;
