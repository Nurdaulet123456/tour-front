import React from "react";
import AuthLayouts from "layouts/AuthLayouts";
import LoginAdmin from "components/forms/LoginAdmin";

const SigninAdmin = () => {
  return (
    <>
      <AuthLayouts title="Admin: Sign in">
        <LoginAdmin />
      </AuthLayouts>
    </>
  );
};

export default SigninAdmin;
