import React, {useEffect} from "react";
import Head from "next/head";
import { LayoutsProps } from "@/utils/utils";
import { getUser } from "@/store/system/system.slice";
import { getLocalStorage } from "@/utils/utils";
import { instance } from "@/api/axios";
import { useAppDispatch } from "@/hook/useAppDispatch";

import Sidebar from "@/components/molecules/Sidebar";

const ProfileLayouts = ({ children, title }: LayoutsProps) => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      getUser({
        token: getLocalStorage("jwt"),
        axios: instance,
      })
    );
  }, [])
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
