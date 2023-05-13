import React, {useEffect} from 'react';
import ProfileLayouts from 'layouts/ProfileLayouts';
import Amout from 'components/molecules/Amout';
import { getLocalStorage } from 'utils/utils';
import { useAppDispatch } from '@/hook/useAppDispatch';
import { useTypedSelector } from '@/hook/useTypedSelector';
import { getUserThunk } from '@/store/system/system.thunk';


const ProfilePage = () => {

  const dispatch = useAppDispatch()
  const user = useTypedSelector(state => state.system.profile)

  useEffect(() => {
    dispatch(getUserThunk({
      token: getLocalStorage("jwt")
    }))

  }, [dispatch])

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
