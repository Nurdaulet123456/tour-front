import React, { useState } from "react";
import styled from "@emotion/styled";
import ProfileLayouts from "layouts/ProfileLayouts";
import { TextTitle } from "components/atoms/Container";
import { useEffect } from "react";
import { instance } from "api/axios";
import { getLocalStorage } from "utils/utils";

const Meneger = () => {
  const [show, setShow] = useState<any>();
  const [userLine, setUserLine] = useState<any>();
  console.log(userLine);

  useEffect(() => {
    getUser();
    setUserLine(JSON.parse(localStorage.getItem("userLine") as any));
  }, []);

  const getUser = async () => {
    await instance
      .get("/api/v1/my_referrals", {
        headers: {
          Authorization: `Bearer ${getLocalStorage("jwt")}`,
        },
      })
      .then((res) => {
        localStorage.setItem("userLine", JSON.stringify(res));
      });
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
                Адамдар саны:{" "}
                {userLine?.["Line 1"] === null
                  ? "0"
                  : userLine?.["Line 1"].length}
              </TextTitle>
            </MenegerBlock>
            <MenegerContent className={show && "active"}>
              {userLine?.["Line 1"] === null ? (
                <TextTitle
                  style={{
                    fontSize: "1.6rem",
                    marginTop: "3.2rem",
                    textAlign: "left",
                  }}
                >
                  Әлі ешкім жоқ
                </TextTitle>
              ) : (
                userLine?.["Line 1"]?.map((item: any) => (
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
                ))
              )}
            </MenegerContent>
          </>
        </div>
      </ProfileLayouts>
    </>
  );
};

const MenegerInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 3rem;
`;

const MenegerFlex = styled.div`
  width: 33.33333%;
`;

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
`;
export default Meneger;
