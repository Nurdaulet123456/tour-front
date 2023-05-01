import React from "react";
import Head from "next/head";
import { LayoutsProps } from "utils/utils";
import Sidebar from "components/molecules/Sidebar";

const ProfileLayouts = ({ children, title }: LayoutsProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="profile">
        <div className="container">
          <div className="profile_inner">
            <Sidebar />
            <div className="profile_block">
                {children}
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLayouts;
