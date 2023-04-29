import React from 'react';
import ProfileLayouts from '@/layouts/ProfileLayouts';
import Amout from '@/components/molecules/Amout';

const ProfilePage = () => {
  return (
    <>
      <ProfileLayouts title='Profile Page'>
            <div className="profile_user">
                <div className="profile_user-info"> 
                    <div className="profile_user-title">Bekaris Ualiqan</div>
                    <div className="profile_user-email">bekaris01@gmail.com</div>
                    <div className="profile_user-referral">https://www.instagram.com/ilyas_design01</div>
                </div>
                <Amout />
            </div>
      </ProfileLayouts>
    </>
  );
}

export default ProfilePage;
