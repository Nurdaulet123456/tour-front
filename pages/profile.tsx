import React, {useEffect, useState} from 'react';
import ProfileLayouts from 'layouts/ProfileLayouts';
import Amout from 'components/molecules/Amout';
import { instance } from 'api/axios';
import { getLocalStorage } from 'utils/utils';
import { useRouter } from 'next/router';


const ProfilePage = () => {
  let [user, setUser] = useState<any>()
  let router = useRouter()

  useEffect(() => {
    getUserInfo()
    setUser(JSON.parse(localStorage.getItem("user") as any))
  }, [])


  const getUserInfo = async () => {
    await instance.get('/api/v1/user', {
        headers: {
          'Authorization': `Bearer ${getLocalStorage("jwt")}`
        }
    }).then(res => {
      if (res) {
        localStorage.setItem('user', JSON.stringify(res))
      }
    })
  }

  return (
    <>
      <ProfileLayouts title='Profile Page'>
            <div className="profile_user">
                <div className="profile_user-info"> 
                    <div className="profile_user-title">{user?.first_name} {user?.last_name}</div>
                    <div className="profile_user-email">{user?.email}</div>
                    <div className="profile_user-referral">Referral code: {user?.referral_code}</div>
                </div>
                <Amout />
            </div>
      </ProfileLayouts>
    </>
  );
}

export default ProfilePage;
