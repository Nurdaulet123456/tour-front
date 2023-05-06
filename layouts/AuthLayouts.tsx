import React from "react";
import { LayoutsProps } from "utils/utils";
import Head from "next/head";

const AuthLayouts = ({ children, title }: LayoutsProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="auth">
        <div className="auth_inner">
          <div className="auth_img">
            <div className="auth_img-parent">
              <div className="auth_img-child">
                <img src="/child_2.png" alt="" />
              </div>
            </div>
          </div>

          <div className="auth_content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AuthLayouts;
