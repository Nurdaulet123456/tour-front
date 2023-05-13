import React, { useState } from "react";
import styled from "@emotion/styled";
import ProfileLayouts from "layouts/ProfileLayouts";
import { TextTitle } from "components/atoms/Container";
import { useEffect } from "react";
import { getLocalStorage } from "utils/utils";
import { useAppDispatch } from "hook/useAppDispatch";
import { useTypedSelector } from "hook/useTypedSelector";
import { getReferralThunk } from "store/system/system.thunk";

const Meneger = () => {
  const [show, setShow] = useState<any>();
  const dispatch = useAppDispatch();
  const referral = useTypedSelector((state) => state.system.referral);

  useEffect(() => {
    dispatch(
      getReferralThunk({
        token: getLocalStorage("jwt"),
      })
    );
  }, [dispatch]);

  const referralCountPerson = (referral: any) => {
    return referral?.["Line 1"] === null ? "0" : referral?.["Line 1"]?.length;
  };

  const referralPerson = (referral: any) => {
    if (referral?.["Line 1"] === null) {
      return (
        <TextTitle
          style={{
            fontSize: "1.6rem",
            marginTop: "3.2rem",
            textAlign: "left",
          }}
        >
          Әлі ешкім жоқ
        </TextTitle>
      );
    }

    return referral?.["Line 1"]?.map((item: any) => (
      <TextTitle
        style={{
          fontSize: "1.6rem",
          marginTop: "3.2rem",
          textAlign: "left",
        }}
        key={item.ID}
      >
        {item.first_name} {item.last_name}
      </TextTitle>
    ));
  };

  return (
    <>
      <ProfileLayouts title="Meneger Page">
        <TextTitle>Менеджер</TextTitle>
        <div style={{ marginTop: "5rem" }}>
          <>
            <MenegerBlock onClick={() => setShow(!show)}>
              <TextTitle style={{ fontSize: "3.2rem" }}>15%</TextTitle>
              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem" }}>
                Адамдар саны: {referralCountPerson(referral)}
              </TextTitle>
            </MenegerBlock>
            <MenegerContent className={show && "active"}>
              {referralPerson(referral)}
            </MenegerContent>
          </>
        </div>
      </ProfileLayouts>
    </>
  );
};

const MenegerBlock = styled.div`
  padding-block: 1.5rem;
  padding-inline: 1rem;
  background: #fbfbfb;
  box-shadow: 0px -8px 11px #ffffff, 0px 4px 13px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
  margin-right: 2.4rem;
  transition: all 0.2s linear;

  cursor: pointer;

  &:hover {
    transform: translateY(-1rem);
  }
`;

const MenegerContent = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.2s linear;

  &.active {
    height: 100%;
    transition: all 0.2s linear;
  }

  @media(max-width: 400px) {
    
  }
`;
export default Meneger;
