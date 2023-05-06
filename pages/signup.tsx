import React from 'react';
import AuthLayouts from 'layouts/AuthLayouts';
import RegisterForm from 'components/forms/RegisterForm';

const Registration = () => {
  return (
    <>
        <AuthLayouts title='Signup'>
            <RegisterForm />
        </AuthLayouts> 
    </>
  );
}

export default Registration;
