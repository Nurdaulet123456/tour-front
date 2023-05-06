import React from 'react';
import AuthLayouts from 'layouts/AuthLayouts';
import LoginForm from 'components/forms/LoginForm';

const Main = () => {
  return (
    <>
      <AuthLayouts title='Sign in'>
          <LoginForm />
      </AuthLayouts>
    </>
  );
}

export default Main;
