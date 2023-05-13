import React from "react";
import { UserIcons, LogoutIcons, ManagerIcons } from "../atoms/Icons";
import Link from "next/link";
import { useRouter } from "next/router";


const Sidebar = () => {
  const router = useRouter()

  const handleRemoveAndLogaut = () => {
    localStorage.removeItem("jwt")
    router.push('/')
  }

  return (
    <>
      <div className="sidebar">
        <div className="sidebar_inner">
          <div className="sidebar_link">
          <Link href={'/profile'}>
            <UserIcons />
            Профиль
          </Link>
          </div>

          <div className="sidebar_link">
          <Link href={'/meneger'}>
            <ManagerIcons />
            Менеджер
            </Link>
          </div>

          <div className="sidebar_link" onClick={handleRemoveAndLogaut}>
            <LogoutIcons />
            Шығу
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
